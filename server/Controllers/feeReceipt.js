const expressAsyncHandler = require('express-async-handler');
const cuid = require('cuid');
const fs = require('fs');
const nodemailer = require('nodemailer');
const AdmZip = require('adm-zip');
const puppeteer = require('puppeteer');
const feereceipt = require('../documents/feereceiptTemplate');
const studentFeereceiptTemplate = require('../documents/studentFeereceiptTemplate');
const FeeReceipt = require('../models/feeReceipt');

// @desc    Create new fee receipt
// @route   POST /api/feereceipt
// @access  Public

const createPdf = expressAsyncHandler(async (details, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 100,
    height: 2160,
  });
  page.setDefaultNavigationTimeout(0);
  page.setCacheEnabled(true);

  if (details?.key === 'Update') {
    const file = `./Output/FeeReceiptsPDF/${
      details.StudentName_old +
      ' ' +
      details.Surname_old +
      '_' +
      details.RollNO_old +
      '_' +
      details.receipt_no_old
    }_feereceipt.pdf`;

    if (fs.existsSync(file)) {
      //file exists then delete the file
      fs.unlinkSync(file);
      console.log('file deleted');
      //create new file

      await page.setContent(
        feereceipt(details),

        {
          waitUntil: 'domcontentloaded',
        }
      );
      await page.pdf({
        path: `./Output/FeeReceiptsPDF/${
          details.StudentName +
          ' ' +
          details.Surname +
          '_' +
          details.RollNO +
          '_' +
          details.receipt_no
        }_feereceipt.pdf`,
        landscape: true,
        printBackground: true,
        scale: 0.65,
        width: 650,
        height: 1250,
        margin: {
          top: '5px',
          left: '10px',
          right: '10px',
        },
      });
    } else {
      //file does not exists then create new file
      await page.setContent(
        feereceipt(details),

        {
          waitUntil: 'domcontentloaded',
        }
      );
      await page.pdf({
        path: `./Output/FeeReceiptsPDF/${
          details.StudentName +
          ' ' +
          details.Surname +
          '_' +
          details.RollNO +
          '_' +
          details.receipt_no
        }_feereceipt.pdf`,
        landscape: true,
        printBackground: true,
        scale: 0.65,
        width: 650,
        height: 1250,
        margin: {
          top: '5px',
          left: '10px',
          right: '10px',
        },
      });
    }
  }

  if (details?.key === 'Create') {
    await page.setContent(
      feereceipt(details),

      {
        waitUntil: 'domcontentloaded',
      }
    );
    await page.pdf({
      path: `./Output/FeeReceiptsPDF/${
        details.StudentName +
        ' ' +
        details.Surname +
        '_' +
        details.RollNO +
        '_' +
        details.receipt_no
      }_feereceipt.pdf`,
      landscape: true,
      printBackground: true,
      scale: 0.65,
      width: 650,
      height: 1250,
      margin: {
        top: '5px',
        left: '10px',
        right: '10px',
      },
    });
  }

  await browser.close();
});
const createPdfStudentCopy = expressAsyncHandler(async (details, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.setViewport({
  //   width: 100,
  //   height: 2160,
  // });
  page.setDefaultNavigationTimeout(0);
  page.setCacheEnabled(true);

  if (details?.key === 'Update') {
    const file = `./Output/FeeReceiptStudentCopy/${
      details.StudentName_old +
      ' ' +
      details.Surname_old +
      '_' +
      details.RollNO_old +
      '_' +
      details.receipt_no_old
    }_feereceipt.pdf`;
    if (fs.existsSync(file)) {
      //file exists then delete the file
      fs.unlinkSync(file);
      //creating new file
      await page.setContent(studentFeereceiptTemplate(details), {
        waitUntil: 'domcontentloaded',
      });
      await page.pdf({
        path: `./Output/FeeReceiptStudentCopy/${
          details.StudentName +
          ' ' +
          details.Surname +
          '_' +
          details.RollNO +
          '_' +
          details.receipt_no
        }_feereceipt.pdf`,
        landscape: true,
        printBackground: true,
        scale: 1,
        width: 1000,
        height: 600,
        margin: {
          top: '5px',
          left: '10px',
          right: '10px',
        },
      });
    } else {
      //file does not exists then create new file
      await page.setContent(studentFeereceiptTemplate(details), {
        waitUntil: 'domcontentloaded',
      });

      await page.pdf({
        path: `./Output/FeeReceiptStudentCopy/${
          details.StudentName +
          ' ' +
          details.Surname +
          '_' +
          details.RollNO +
          '_' +
          details.receipt_no
        }_feereceipt.pdf`,
        landscape: true,
        printBackground: true,
        scale: 1,
        width: 1000,
        height: 600,
        margin: {
          top: '5px',
          left: '10px',
          right: '10px',
        },
      });
    }
  }

  if (details?.key === 'Create') {
    await page.setContent(studentFeereceiptTemplate(details), {
      waitUntil: 'domcontentloaded',
    });

    await page.pdf({
      path: `./Output/FeeReceiptStudentCopy/${
        details.StudentName +
        ' ' +
        details.Surname +
        '_' +
        details.RollNO +
        '_' +
        details.receipt_no
      }_feereceipt.pdf`,
      landscape: true,
      printBackground: true,
      scale: 1,
      width: 1000,
      height: 600,
      margin: {
        top: '5px',
        left: '10px',
        right: '10px',
      },
    });
  }

  await browser.close();
});

const appendJsonFile = async (req, res) => {
  const data = req.body;
  try {
    data.map((item) => {
      const receipt_no = (cuid.slug() + item.RollNO).toUpperCase();
      const {
        receiptNo = receipt_no,
        student_name = item?.StudentName + ' ' + item?.Surname,
        roll_no = item?.RollNO,
        mobile_number = item?.MobileNo,
        student_email = item?.Studentmailid,
        academic_year = item?.AcademicYear,
        student_class = item?.Class,
        student_division = item?.Division,
        student_branch = item?.Branch,
        student_course = item?.Course,
        address_student = item?.Address1,
        father_name = item?.FatherName + ' ' + item?.Surname,
        amount_data = item?.FeesPaid,
        date_of_payment = item?.DateOfPaymnent,
        bank_name = item?.BankName,
        account_number = item?.ACCNo,
        other_fees = '0',
        balance_fee_data = '0',
      } = item;

      const details = {
        key: 'Create',
        AcademicYear: item.AcademicYear,
        DateOfPaymnent: item.DateOfPaymnent,
        RollNO: item.RollNO,
        Surname: item.Surname,
        StudentName: item.StudentName,
        FatherName: item.FatherName,
        Division: item.Division,
        Class: item.Class,
        Course: item.Course,
        Branch: item.Branch,
        Address1: item.Address1,
        MobileNo: item.MobileNo,
        FeesPaid: item.FeesPaid,
        BankName: item.BankName,
        ACCNo: item.ACCNo,
        receipt_no: receipt_no,
      };

      console.log(details);

      // Office use
      setTimeout(() => {
        createPdf(details, res);
      }, 1000);
      //Student use
      setTimeout(() => {
        createPdfStudentCopy(details, res);
      }, 1000);

      FeeReceipt.create({
        receiptNo,
        student_name,
        roll_no,
        mobile_number,
        student_email,
        academic_year,
        student_class,
        student_division,
        student_branch,
        student_course,
        address_student,
        father_name,
        amount_data,
        date_of_payment,
        bank_name,
        account_number,
        other_fees,
        balance_fee_data,
      });
    });
    res.send('Data stored successfully to server.');
  } catch (error) {
    res.send('Error storing data to studentData.json' + error);
  }
};

const editStudentDetails = async (req, res) => {
  let data = {
    receiptNo: req.body.receipt_no,
    student_name: req.body.student_name,
    roll_no: req.body.roll_no,
    mobile_number: req.body.mobile_number,
    student_email: req.body.student_email,
    academic_year: req.body.academic_year,
    student_class: req.body.student_class,
    student_division: req.body.student_division,
    student_branch: req.body.student_branch,
    student_course: req.body.student_course,
    address_student: req.body.address_student,
    father_name: req.body.father_name,
    amount_data: req.body.amount_data,
    date_of_payment: req.body.date_of_payment,
    bank_name: req.body.bank_name,
    account_number: req.body.account_number,
    other_fees: req.body.other_fees,
    balance_fee_data: req.body.balance_fee_data,
  };

  try {
    const { id } = req.params;
    const oldData = await FeeReceipt.findOne({ receiptNo: id }).exec();

    let oldSudentData = {
      student_name: oldData?.student_name.split(' ')[0],
      surname: oldData?.student_name.split(' ')[1],
      roll_no: oldData?.roll_no,
      receipt_no: oldData?.receiptNo,
    };
    FeeReceipt.findOneAndUpdate(
      { receiptNo: id },
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
        let newfatherName = data.father_name.toString();
        let newStudentData = {
          student_name: newName.split(' ')[0],
          surname: newName.split(' ')[1],
          father_name: newfatherName.split(' ')[0],
        };
        const details = {
          key: 'Update',
          StudentName_old: oldSudentData.student_name,
          Surname_old: oldSudentData.surname,
          RollNO_old: oldSudentData.roll_no,
          receipt_no_old: oldSudentData.receipt_no,
          AcademicYear: req.body.academic_year,
          DateOfPaymnent: req.body.date_of_payment,
          RollNO: req.body.roll_no,
          Surname: newStudentData.surname,
          StudentName: newStudentData.student_name,
          FatherName: newStudentData.father_name,
          Division: req.body.student_division,
          Class: req.body.student_class,
          Course: req.body.student_course,
          Branch: req.body.student_branch,
          Address1: req.body.address_student,
          MobileNo: req.body.mobile_number,
          FeesPaid: req.body.amount_data,
          BankName: req.body.bank_name,
          ACCNo: req.body.account_number,
          receipt_no: req.body.receipt_no,
        };

        console.log(details);

        // Office use
        setTimeout(() => {
          createPdf(details, res);
        }, 1000);
        //Student use
        setTimeout(() => {
          createPdfStudentCopy(details, res);
        }, 1000);

        return res.status(200).json({
          message: 'Data updated successfully',
        });
      }
    });
  } catch (error) {
    res.send('Error updating data to studentData.json' + error);
  }
};

const fetchStudentDetails = (req, res) => {
  try {
    FeeReceipt.find({})
      .sort({
        createdAt: -1,
      })
      .exec((err, data) => {
        if (err) {
          res.send(err);
        } else {
          // console.log(data);
          res.send(data);
        }
      });
  } catch (error) {
    console.log(error);
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
        subject: 'Fee Receipt',
        text: `${item.student_name} please find your attached fee receipt.`,
        attachments: [
          {
            filename: `${item.student_name}_${item.roll_no}_${item.receiptNo}_feereceipt.pdf`,
            path: `./Output/FeeReceiptStudentCopy/${item.student_name}_${item.roll_no}_${item.receiptNo}_feereceipt.pdf`,
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
      subject: 'Fee Receipt',
      text: `${req.body?.student_name} please find your attached fee recceipt.`,
      attachments: [
        {
          filename: `${req.body?.student_name}_${req.body?.roll_no}_${req.body?.receipt_no}_feereceipt.pdf`,
          path: `./Output/FeeReceiptStudentCopy/${req.body?.student_name}_${req.body?.roll_no}_${req.body?.receipt_no}_feereceipt.pdf`,
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

const fetchStudentDetailsById = (req, res) => {
  const { id } = req.params;
  FeeReceipt.find({ receiptNo: id }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data) {
        res.send(data);
      } else {
        res.send('No data found');
      }
    }
  });
};

const downloadFeeReceipt = expressAsyncHandler(async (req, res) => {
  const receiptNo = req.params.id;

  const studentDetails = await FeeReceipt.findOne({ receiptNo: receiptNo });
  if (studentDetails) {
    const fileName =
      studentDetails.student_name +
      '_' +
      studentDetails.roll_no +
      '_' +
      studentDetails.receiptNo +
      '_feereceipt.pdf';
    const filePath = './Output/FeeReceiptsPDF/' + fileName;
    res.download(filePath);
  } else {
    res.send('No such file is found.');
  }
});

const downloadFeeReceiptAsZip = async (req, res) => {
  var zip = new AdmZip();

  zip.addLocalFolder('./Output/FeeReceiptsPDF/');

  const today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const dateTime = date;

  const downloadName = `FeeReceiptsPDFs_date_${dateTime}.zip`;
  const data = zip.toBuffer();

  //save zip file to server
  // zip.writeZip('./Output/FeeReceiptsPDF/' + downloadName);

  res.set('Content-Type', 'application/octet-stream');
  res.set('Content-Disposition', `attachment; filename=${downloadName}`);
  res.set('Content-Length', data?.length);
  res.send(data);
};

module.exports = {
  editStudentDetails,
  appendJsonFile,
  fetchStudentDetails,
  fetchStudentDetailsById,
  downloadFeeReceipt,
  sendBulkEmail,
  sendEmail,
  downloadFeeReceiptAsZip,
};
