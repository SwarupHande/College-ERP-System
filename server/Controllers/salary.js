const expressAsyncHandler = require('express-async-handler');
const cuid = require('cuid');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const AdmZip = require('adm-zip');
const puppeteer = require('puppeteer');
const salary = require('../documents/salaryTemplate');
const SalarySlip = require('../models/salary');

// @desc    Create new fee receipt
// @route   POST /api/salary
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
    const file = `./Output/SalaryPDF/${
      details.date_old.split('/').reverse().join('-') +
      '_' +
      details.sdrn_old +
      '_' +
      details.name_old
    }_salaryslip.pdf`;

    if (fs.existsSync(file)) {
      //file exists then delete the file
      fs.unlinkSync(file);
      console.log('file deleted');
      //create new file

      await page.setContent(salary(details), { waitUntil: 'domcontentloaded' });

      await page.pdf({
        path: `./Output/SalaryPDF/${
          details.date.split('/').reverse().join('-') +
          '_' +
          details.sdrn +
          '_' +
          details.name
        }_salaryslip.pdf`,
        landscape: true,
        printBackground: true,
        scale: 0.65,
        width: 500,
        height: 1100,
        margin: {
          top: '5px',
          left: '5px',
          right: '5px',
        },
      });
    } else {
      //file does not exists then create new file
      await page.setContent(salary(details), { waitUntil: 'domcontentloaded' });

      await page.pdf({
        path: `./Output/SalaryPDF/${
          details.date.split('/').reverse().join('-') +
          '_' +
          details.sdrn +
          '_' +
          details.name
        }_salaryslip.pdf`,
        landscape: true,
        printBackground: true,
        scale: 0.65,
        width: 500,
        height: 1100,
        margin: {
          top: '5px',
          left: '5px',
          right: '5px',
        },
      });
    }
  }

  if (details?.key === 'Create') {
    await page.setContent(salary(details), { waitUntil: 'domcontentloaded' });

    await page.pdf({
      path: `./Output/SalaryPDF/${
        details.date.split('/').reverse().join('-') +
        '_' +
        details.sdrn +
        '_' +
        details.name
      }_salaryslip.pdf`,
      landscape: true,
      printBackground: true,
      scale: 0.65,
      width: 500,
      height: 1100,
      margin: {
        top: '5px',
        left: '5px',
        right: '5px',
      },
    });
  }

  await browser.close();
});

const appendJsonFile = async (req, res) => {
  const data = req.body;
  try {
    data.map((item) => {
      const getLogo = () => {
        const image = fs.readFileSync(
          path.join(__dirname, '../documents/logo.png')
        );
        return image.toString('base64');
      };
      const {
        email = item?.email,
        mobile = item?.mobile,
        date = item?.date,
        sdrn = item?.sdrn,
        name = item?.name,
        department = item?.department,
        date_of_joining = item?.date_of_joining,
        basic = item?.basic,
        dearness_pay = item?.dearness_pay,
        dearness_allowance = item?.dearness_allowance,
        cla = item?.cla,
        ta = item?.ta,
        hra = item?.hra,
        others_1 = item?.others_1,
        pf_mgmt_share = item?.pf_mgmt_share,
        arrears = item?.arrears,
        others = item?.others,
        designation = item?.designation,
        acc_no = item?.acc_no,
        days_present = item?.days_present,
        pt = item?.pt,
        it = item?.it,
        wpl = item?.wpl,
        pf = item?.pf,
        loan = item?.loan,
        wc = item?.wc,
        lic = item?.lic,
        others_dec = item?.others_dec,
        mc = item?.mc,
        gr_insu = item?.gr_insu,
        hr = item?.hr,
        advance = item?.advance,
        gross = item?.gross,
        total_dec = item?.total_dec,
        net_pay = item?.net_pay,
      } = item;

      const details = {
        key: 'Create',
        date: item?.date,
        sdrn: item?.sdrn,
        name: item?.name,
        department: item?.department,
        date_of_joining: item?.date_of_joining,
        basic: item?.basic,
        dearness_pay: item?.dearness_pay,
        dearness_allowance: item?.dearness_allowance,
        cla: item?.cla,
        ta: item?.ta,
        hra: item?.hra,
        others_1: item?.others_1,
        pf_mgmt_share: item?.pf_mgmt_share,
        arrears: item?.arrears,
        others: item?.others,
        designation: item?.designation,
        acc_no: item?.acc_no,
        days_present: item?.days_present,
        pt: item?.pt,
        it: item?.it,
        wpl: item?.wpl,
        pf: item?.pf,
        loan: item?.loan,
        wc: item?.wc,
        lic: item?.lic,
        others_dec: item?.others_dec,
        mc: item?.mc,
        gr_insu: item?.gr_insu,
        hr: item?.hr,
        advance: item?.advance,
        gross: item?.gross,
        total_dec: item?.total_dec,
        net_pay: item?.net_pay,
        logo: getLogo(),
      };
      setTimeout(() => {
        createPdf(details, res);
      }, 1000);

      SalarySlip.create({
        email,
        mobile,
        date,
        sdrn,
        name,
        department,
        date_of_joining,
        basic,
        dearness_pay,
        dearness_allowance,
        cla,
        ta,
        hra,
        others_1,
        pf_mgmt_share,
        arrears,
        others,
        designation,
        acc_no,
        days_present,
        pt,
        it,
        wpl,
        pf,
        loan,
        wc,
        lic,
        others_dec,
        mc,
        gr_insu,
        hr,
        advance,
        gross,
        total_dec,
        net_pay,
      });
    });
    res.send('Data stored successfully to server.');
  } catch (error) {
    res.send('Error storing data to studentData.json' + error);
  }
};

const editStaffDetails = async (req, res) => {
  // console.log(req.body);
  const getLogo = () => {
    const image = fs.readFileSync(
      path.join(__dirname, '../documents/logo.png')
    );
    return image.toString('base64');
  };
  let data = {
    email: req.body.email,
    mobile: req.body.mobile,
    date: req.body.date,
    sdrn: req.body.sdrn,
    name: req.body.name,
    department: req.body.department,
    date_of_joining: req.body.date_of_joining,
    basic: req.body.basic,
    dearness_pay: req.body.dearness_pay,
    dearness_allowance: req.body.dearness_allowance,
    cla: req.body.cla,
    ta: req.body.ta,
    hra: req.body.hra,
    others_1: req.body.others_1,
    pf_mgmt_share: req.body.pf_mgmt_share,
    arrears: req.body.arrears,
    others: req.body.others,
    designation: req.body.designation,
    acc_no: req.body.acc_no,
    days_present: req.body.days_present,
    pt: req.body.pt,
    it: req.body.it,
    wpl: req.body.wpl,
    pf: req.body.pf,
    loan: req.body.loan,
    wc: req.body.wc,
    lic: req.body.lic,
    others_dec: req.body.others_dec,
    mc: req.body.mc,
    gr_insu: req.body.gr_insu,
    hr: req.body.hr,
    advance: req.body.advance,
    gross: req.body.gross,
    total_dec: req.body.total_dec,
    net_pay: req.body.net_pay,
  };

  try {
    const { sdrn } = req.params;
    const oldData = await SalarySlip.findOne({ sdrn: sdrn }).exec();

    let oldStaffData = {
      date: oldData.date,
      sdrn: oldData.sdrn,
      name: oldData.name,
    };
    SalarySlip.findOneAndUpdate(
      { sdrn: sdrn },
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
        const details = {
          key: 'Update',
          date_old: oldStaffData.date,
          sdrn_old: oldStaffData.sdrn,
          name_old: oldStaffData.name,
          date: data.date,
          sdrn: data.sdrn,
          name: data.name,
          department: data.department,
          date_of_joining: data.date_of_joining,
          basic: data.basic,
          dearness_pay: data.dearness_pay,
          dearness_allowance: data.dearness_allowance,
          cla: data.cla,
          ta: data.ta,
          hra: data.hra,
          others_1: data.others_1,
          pf_mgmt_share: data.pf_mgmt_share,
          arrears: data.arrears,
          others: data.others,
          designation: data.designation,
          acc_no: data.acc_no,
          days_present: data.days_present,
          pt: data.pt,
          it: data.it,
          wpl: data.wpl,
          pf: data.pf,
          loan: data.loan,
          wc: data.wc,
          lic: data.lic,
          others_dec: data.others_dec,
          mc: data.mc,
          gr_insu: data.gr_insu,
          hr: data.hr,
          advance: data.advance,
          gross: data.gross,
          total_dec: data.total_dec,
          net_pay: data.net_pay,
          logo: getLogo(),
        };

        setTimeout(() => {
          createPdf(details, res);
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

const fetchStaffDetails = (req, res) => {
  try {
    SalarySlip.find({})
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
    console.log(error);
  }
};

const sendBulkEmail = async (req, res) => {
  const { rows } = req.body;
  try {
    rows.map((item) => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SENDER_EMAIL_ID,
          pass: process.env.SENDER_EMAIL_ID_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.SENDER_EMAIL_ID,
        to: item.email,
        subject: 'Salary Slip',
        text: `${item.name} please find your attached salary slip.`,
        attachments: [
          {
            filename: `${item.date.split('/').reverse().join('-')}_${
              item.sdrn
            }_${item.name}_salaryslip.pdf`,
            path: `./Output/SalaryPDF/${
              item.date.split('/').reverse().join('-') +
              '_' +
              item.sdrn +
              '_' +
              item.name
            }_salaryslip.pdf`,
            contentType: 'application/pdf',
          },
        ],
      };

      transporter.sendMail(mailOptions, function (error) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent to : ' + item.email);
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
      to: req.body?.email,
      subject: 'Salary Slip',
      text: `${req.body?.name} please find your attached salary slip.`,
      attachments: [
        {
          filename: `${req.body?.date.split('/').reverse().join('-')}_${
            req.body?.sdrn
          }_${req.body?.name}_salaryslip.pdf`,
          path: `./Output/SalaryPDF/${
            req.body?.date.split('/').reverse().join('-') +
            '_' +
            req.body?.sdrn +
            '_' +
            req.body?.name
          }_salaryslip.pdf`,
          contentType: 'application/pdf',
        },
      ],
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent to : ' + req.body?.email);
      }
    });
    res.send('Email sent successfully');
  } catch (error) {
    console.log(error);
    res.send('Error sending email');
  }
};

const fetchStaffDetailsById = (req, res) => {
  const { sdrn } = req.params;
  console.log(sdrn);
  SalarySlip.find({ sdrn: sdrn }, (err, data) => {
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

const downloadSalarySlip = expressAsyncHandler(async (req, res) => {
  const sdrn = req.params.sdrn;

  const stafDetails = await SalarySlip.findOne({ sdrn: sdrn });
  if (stafDetails) {
    const fileName = `${stafDetails.date.split('/').reverse().join('-')}_${
      stafDetails.sdrn
    }_${stafDetails.name}_salaryslip.pdf`;
    const filePath = './Output/SalaryPDF/' + fileName;
    res.download(filePath);
  } else {
    res.send('No such file is found.');
  }
});

const downloadSalarySlipAsZip = async (req, res) => {
  var zip = new AdmZip();

  zip.addLocalFolder('./Output/SalaryPDF/');

  const today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const dateTime = date;

  const downloadName = `SalaryPDFs_date_${dateTime}.zip`;
  const data = zip.toBuffer();

  //save zip file to server
  // zip.writeZip('./Output/FeeReceiptsPDF/' + downloadName);

  res.set('Content-Type', 'application/octet-stream');
  res.set('Content-Disposition', `attachment; filename=${downloadName}`);
  res.set('Content-Length', data?.length);
  res.send(data);
};

module.exports = {
  appendJsonFile,
  fetchStaffDetails,
  fetchStaffDetailsById,
  downloadSalarySlip,
  sendBulkEmail,
  sendEmail,
  downloadSalarySlipAsZip,
  editStaffDetails,
};
