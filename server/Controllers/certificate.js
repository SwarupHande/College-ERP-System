const expressAsyncHandler = require('express-async-handler');
const cuid = require('cuid');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');
const puppeteer = require('puppeteer');
const Certificate = require('../models/certificate');
const certificate = require('../documents/certificateTemplate');

// @desc    Create new certificate
// @route   POST /api/certificate
// @access  Public
const createPdf = expressAsyncHandler(async (details, res) => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  page.setDefaultNavigationTimeout(0);
  page.setCacheEnabled(true);

  if (details?.key === 'Update') {
    const file = `./Output/CertificatesPDF/${
      details.StudentName_old +
      ' ' +
      details.Surname_old +
      '_' +
      details.VerificationCode_old
    }_certificate.pdf`;

    if (fs.existsSync(file)) {
      //file exists then delete the file
      fs.unlinkSync(file);
      console.log('certificate ile deleted');
      //create new file

      await page.setContent(certificate(details), {
        waitUntil: 'domcontentloaded',
      });

      await page.emulateMediaType('print');

      await page.pdf({
        path: `./Output/CertificatesPDF/${
          details.StudentName +
          ' ' +
          details.Surname +
          '_' +
          details.VerificationCode
        }_certificate.pdf`,
        landscape: true,
        printBackground: true,
        scale: 0.65,
        width: 705,
        height: 1250,
      });
    } else {
      //file does not exists then create new file
      await page.setContent(certificate(details), {
        waitUntil: 'domcontentloaded',
      });

      await page.emulateMediaType('print');

      await page.pdf({
        path: `./Output/CertificatesPDF/${
          details.StudentName +
          ' ' +
          details.Surname +
          '_' +
          details.VerificationCode
        }_certificate.pdf`,
        landscape: true,
        printBackground: true,
        scale: 0.65,
        width: 705,
        height: 1250,
      });
    }
  }

  if (details?.key === 'Create') {
    await page.setContent(certificate(details), {
      waitUntil: 'domcontentloaded',
    });

    await page.emulateMediaType('print');

    await page.pdf({
      path: `./Output/CertificatesPDF/${
        details.StudentName +
        ' ' +
        details.Surname +
        '_' +
        details.VerificationCode
      }_certificate.pdf`,
      landscape: true,
      printBackground: true,
      scale: 0.65,
      width: 705,
      height: 1250,
    });
  }

  await browser.close();
});

const appendJsonFile = (req, res) => {
  const data = req.body;
  try {
    data.map((item) => {
      // const code = uuid.v4();

      const code = (cuid.slug() + item.Date).replace(/-/g, '').toUpperCase();

      const getCertificateImage = () => {
        const image = fs.readFileSync(
          path.join(__dirname, '../documents/certificate.png')
        );
        return image.toString('base64');
      };

      const {
        VerificationCode = code,
        student_name = item?.StudentName + ' ' + item?.Surname,
        student_email = item?.Studentmailid,
        date = item?.Date,
        workshop_name = item?.WorkShopName,
        workshop_description = item?.WorkShopDesc,
      } = item;

      const details = {
        key: 'Create',
        VerificationCode: VerificationCode,
        Surname: item.Surname,
        StudentName: item.StudentName,
        Date: item.Date,
        WorkShopName: item.WorkShopName,
        WorkShopDesc: item.WorkShopDesc,
        image: getCertificateImage(),
      };

      createPdf(details, res);

      Certificate.create({
        VerificationCode,
        student_name,
        student_email,
        date,
        workshop_name,
        workshop_description,
      });
    });
    res.send('Data stored successfully to server.');
  } catch (error) {
    res.send('Error storing data to server.' + error);
  }
};
const editStudentDetails = async (req, res) => {
  console.log(req.body);

  const getCertificateImage = () => {
    const image = fs.readFileSync(
      path.join(__dirname, '../documents/certificate.png')
    );
    return image.toString('base64');
  };

  let data = {
    VerificationCode: req.body.certificate_no,
    student_name: req.body.student_name,
    student_email: req.body.student_email,
    date: req.body.date,
    workshop_name: req.body.workshop_name,
    workshop_description: req.body.workshop_description,
  };

  try {
    const { id } = req.params;
    const oldData = await Certificate.findOne({ VerificationCode: id }).exec();

    let oldSudentData = {
      student_name: oldData?.student_name.split(' ')[0],
      surname: oldData?.student_name.split(' ')[1],
      VerificationCode: oldData?.VerificationCode,
    };
    Certificate.findOneAndUpdate(
      { VerificationCode: id },
      {
        $set: data,
      },
      {
        new: true,
      }
    ).exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Something went wrong',
        });
      } else {
        let newName = data.student_name.toString();
        let newStudentData = {
          student_name: newName.split(' ')[0],
          surname: newName.split(' ')[1],
        };
        const details = {
          key: 'Update',
          StudentName_old: oldSudentData.student_name,
          Surname_old: oldSudentData.surname,
          VerificationCode_old: oldSudentData.VerificationCode,
          VerificationCode: data.VerificationCode,
          Surname: newStudentData.surname,
          StudentName: newStudentData.student_name,
          Date: data.date,
          WorkShopName: data.workshop_name,
          WorkShopDesc: data.workshop_description,
          image: getCertificateImage(),
        };

        createPdf(details, res);

        return res.status(200).json({
          message: 'Data updated successfully',
        });
      }
    });
  } catch (error) {
    res.send('Error updating data to studentData.json' + error);
  }
};

const sendBulkEmail = async (req, res) => {
  const data = req.body.data;
  try {
    data.map((item) => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SENDER_EMAIL_ID,
          pass: process.env.SENDER_EMAIL_ID_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.SENDER_EMAIL_ID,
        to: item.student_email,
        subject: 'Certificate',
        text: `${item.student_name} please find your attached certificate.`,
        attachments: [
          {
            filename: `${item.student_name}_${item.VerificationCode}_certificate.pdf`,
            path: `./Output/CertificatesPDF/${item.student_name}_${item.VerificationCode}_certificate.pdf`,
            contentType: 'application/pdf',
          },
        ],
      };

      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent to : ' + item.student_email);
        }
      });
    });
    res.send('Email sent successfully');
  } catch (error) {
    console.log(error);
    res.send('Error sending email');
  }
};

const sendEmail = (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL_ID,
        pass: process.env.SENDER_EMAIL_ID_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SENDER_EMAIL_ID,
      to: req.body?.student_email,
      subject: 'Certificate',
      text: `${req.body?.student_name} please find your attached certificate.`,
      attachments: [
        {
          filename: `${req.body?.student_name}_${req.body?.certificate_no}_certificate.pdf`,
          path: `./Output/CertificatesPDF/${req.body?.student_name}_${req.body?.certificate_no}_certificate.pdf`,
          contentType: 'application/pdf',
        },
      ],
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent to : ' + req.body?.student_email);
      }
    });
    res.send('Email sent successfully');
  } catch (error) {
    console.log(error);
    res.send('Error sending email');
  }
};
const fetchStudentDetails = (req, res) => {
  try {
    Certificate.find({})
      .sort({
        createdAt: -1,
      })
      .exec((err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
  } catch (error) {
    res.send('Error fetching data from server.' + error);
  }
};

const fetchStudentDetailsById = (req, res) => {
  const { id } = req.params;
  Certificate.find(
    {
      VerificationCode: id,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (data) {
          res.send(data);
        } else {
          res.send('No data found');
        }
      }
    }
  );
};

const downloadCertificate = expressAsyncHandler(async (req, res) => {
  const VerificationCode = req.params.id;

  const certificate = await Certificate.findOne({
    VerificationCode: VerificationCode,
  });

  if (certificate) {
    const fileName = `${certificate.student_name}_${certificate.VerificationCode}_certificate.pdf`;
    const filePath = `./Output/CertificatesPDF/${fileName}`;
    res.download(filePath);
  } else {
    res.status(404);
    throw new Error('Certificate not found');
  }
});

const downloadCertificateAsZip = expressAsyncHandler(async (req, res) => {
  const zip = new AdmZip();

  zip.addLocalFolder('./Output/CertificatesPDF/');

  const today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const dateTime = date;

  const downloadName = `Certificates_${dateTime}.zip`;
  const data = zip.toBuffer();

  //save zip file to server
  // zip.writeZip('./Output/CertificatesPDF/' + downloadName);

  res.set('Content-Type', 'application/octet-stream');
  res.set('Content-Disposition', `attachment; filename=${downloadName}`);
  res.set('Content-Length', data?.length);
  res.send(data);
});

// search certificate by VerificationCode
const searchCertificate = expressAsyncHandler(async (req, res) => {
  const { search } = req.query;

  Certificate.find(
    {
      VerificationCode: search,
    },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (data) {
          res.send(data);
        } else {
          res.send('No data found');
        }
      }
    }
  );
});

module.exports = {
  downloadCertificate,
  fetchStudentDetails,
  fetchStudentDetailsById,
  appendJsonFile,
  sendBulkEmail,
  sendEmail,
  downloadCertificateAsZip,
  searchCertificate,
  editStudentDetails,
};
