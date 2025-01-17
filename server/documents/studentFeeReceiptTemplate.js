const convertRupeesIntoWords = require('convert-rupees-into-words');
module.exports = ({
  AcademicYear,
  DateOfPaymnent,
  RollNO,
  Surname,
  StudentName,
  FatherName,
  Division,
  Class,
  Course,
  Branch,
  Address1,
  MobileNo,
  FeesPaid,
  BankName,
  ACCNo,
  receipt_no,
}) => {
  const amount_in_words = convertRupeesIntoWords(parseInt(FeesPaid));
  const today = new Date();
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="font-family: arial, 'helvetica neue', helvetica, sans-serif"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .es-button {
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 10px 20px 10px 20px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li {
          margin-bottom: 9px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li {
          margin-bottom: 9px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li {
          margin-bottom: 9px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li {
          margin-bottom: 8px !important;
        }
        p,
        ul li,
        ol li,
        a {
          line-height: 120% !important;
        }
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120%;
        }
        h1 {
          font-size: 30px !important;
          text-align: left;
          margin-bottom: 18px;
        }
        h2 {
          font-size: 24px !important;
          text-align: left;
          margin-bottom: 15px;
        }
        h3 {
          font-size: 20px !important;
          text-align: left;
          margin-bottom: 12px;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
          text-align: left;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 24px !important;
          text-align: left;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
          text-align: left;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class='gmail-fix'] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        a.es-button,
        button.es-button {
          font-size: 18px !important;
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
        .es-desk-hidden {
          display: table-row !important;
          width: auto !important;
          overflow: visible !important;
          max-height: inherit !important;
        }
      }
    </style>
  </head>
  <body
    style="
      font-family: arial, 'helvetica neue', helvetica, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color">
      <table
        class="es-wrapper"
        cellspacing="0"
        cellpadding="0"
        style="
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
        "
      >
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <tr>
                    <td align="left" style="padding-left: 15px; margin: 0">
                      <p
                        style="
                          margin: 0;
                          -webkit-text-size-adjust: none;
                          -ms-text-size-adjust: none;
                          font-family: arial, 'helvetica neue', helvetica,
                            sans-serif;
                          line-height: 24px;
                          color: #000000;
                        "
                      >
                        <strong>Student Copy</strong>
                      </p>
                    </td>
                  </tr>
                  <table
                    class="es-content-body"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    style="
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                      border-color: #000000;
                      border-width: 1px;
                      border-style: solid;
                    "
                  >
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="border-collapse: collapse; border-spacing: 0px"
                        >
                          <tr>
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 552px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 22px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 18px;
                                      "
                                    >
                                      <span style="font-size: 20px"
                                        ><strong
                                          >(DYPU) RAMRAO ADIK INSTITUTE OF
                                          TECHNOLOGY</strong
                                        ></span
                                      ><br /><span style="font-size: 15px"
                                        >DR D Y PATIL UNIVERSITY, Dr D Y Patil
                                        Vidyanagar,<br />Sect-7 Phase-I Nerul,
                                        Navi Mumbai<br />Phone No :022-27709313
                                        / 9819606098<br />Email
                                        :accounts@rait.ac.in</span
                                      >
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <table
                                      border="0"
                                      width="100%"
                                      height="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      role="presentation"
                                      style="
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 2px solid #cccccc;
                                            background: unset;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              class="es-m-p20b"
                              align="left"
                              style="padding: 0; margin: 0; width: 262px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Receipt No : ${receipt_no}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 270px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Date : ${`${today.getDate()}-${
                                        today.getMonth() + 1
                                      }-${today.getFullYear()}.`}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="padding: 0; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="border-collapse: collapse; border-spacing: 0px"
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 592px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 5px;
                                      padding-right: 5px;
                                      padding-left: 25px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Bank Name : ${BankName}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      margin: 0;
                                      padding-top: 5px;
                                      padding-bottom: 5px;
                                      padding-right: 5px;
                                      padding-left: 25px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Acc Number : ${ACCNo}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="border-collapse: collapse; border-spacing: 0px"
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 552px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Received From : ${
                                        StudentName + ' ' + Surname
                                      }
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              class="es-m-p20b"
                              align="left"
                              style="padding: 0; margin: 0; width: 262px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Father Name : ${
                                        FatherName + ' ' + Surname
                                      }
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 270px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Roll No : ${RollNO}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-bottom: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="border-collapse: collapse; border-spacing: 0px"
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 552px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Address&nbsp;: ${Address1}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 5px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              class="es-m-p20b"
                              align="left"
                              style="padding: 0; margin: 0; width: 260px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Mobile Number : ${MobileNo}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 272px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Academic Year : ${AcademicYear}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              class="es-m-p20b"
                              align="left"
                              style="padding: 0; margin: 0; width: 262px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Class : ${Class}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 270px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Division : ${Division}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              class="es-m-p20b"
                              align="left"
                              style="padding: 0; margin: 0; width: 262px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Branch : ${Branch}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 270px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      Course : ${Course}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="padding: 0; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="border-collapse: collapse; border-spacing: 0px"
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 592px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                    "
                                  >
                                    <table
                                      border="1"
                                      cellspacing="1"
                                      cellpadding="1"
                                      style="
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                        width: 500px;
                                      "
                                      class="es-table"
                                      role="presentation"
                                    >
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            text-align: justify;
                                          "
                                        >
                                          <strong>Description&nbsp;</strong>
                                        </td>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            text-align: justify;
                                          "
                                        >
                                          <strong>Amount&nbsp;₹</strong>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            text-align: justify;
                                            font-size: 14px;
                                          "
                                        >
                                          TUTION FEES
                                        </td>
                                        <td style="padding: 0; margin: 0">
                                          <p
                                            style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              line-height: 21px;
                                              margin-bottom: 9px;
                                              color: #333333;
                                              font-size: 14px;
                                            "
                                          >
                                            &nbsp;₹ ${FeesPaid}
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            text-align: justify;
                                          "
                                        >
                                          <br /><br />
                                        </td>
                                        <td style="padding: 0; margin: 0">
                                          <p
                                            style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              line-height: 21px;
                                              margin-bottom: 9px;
                                              color: #333333;
                                              font-size: 14px;
                                              text-align: justify;
                                            "
                                          >
                                            <br /><br /><br /><br /><br /><br />
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 15px;
                                    "
                                  >
                                    <table
                                      border="1"
                                      cellspacing="1"
                                      cellpadding="1"
                                      style="
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                        width: 500px;
                                      "
                                      class="es-table"
                                      role="presentation"
                                    >
                                      <tr>
                                        <td style="padding: 0; margin: 0">
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp;
                                        </td>
                                        <td style="padding: 0; margin: 0">
                                          <strong
                                            ><span style="font-size: 14px"
                                              >TOTAL</span
                                            >&nbsp;:&nbsp;</strong
                                          >₹ ${FeesPaid}
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              class="es-m-p20b"
                              align="left"
                              style="padding: 0; margin: 0; width: 262px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-left: 5px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong>&nbsp;Received Fees </strong> : ₹
                                      ${FeesPaid}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 270px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong>Other Fees </strong> : ₹ ${0}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="padding: 0; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="border-collapse: collapse; border-spacing: 0px"
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 592px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-left: 20px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong>&nbsp; Balance Fees </strong> : ₹
                                      ${0}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 5px;
                          padding-bottom: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="border-collapse: collapse; border-spacing: 0px"
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 552px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong
                                        >&nbsp; Amount in Words&nbsp;</strong
                                      >
                                      : ${amount_in_words}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              class="es-m-p20b"
                              align="left"
                              style="padding: 0; margin: 0; width: 262px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-left: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong>Instrument No</strong> : NEFT
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 270px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong>Date : </strong>${DateOfPaymnent}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              class="es-m-p20b"
                              align="left"
                              style="padding: 0; margin: 0; width: 262px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-left: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <b>Bank Name :&nbsp;</b>${BankName}
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-right"
                          align="right"
                          style="
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 270px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    style="padding: 5px; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <b>Branch :&nbsp;</b>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left" style="padding: 0; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="border-collapse: collapse; border-spacing: 0px"
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 592px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 17px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 14px;
                                      "
                                    >
                                      <strong></strong>This receipt is computer
                                      generated<strong></strong>
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>

`;
};
