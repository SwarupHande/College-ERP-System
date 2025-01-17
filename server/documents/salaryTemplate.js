module.exports = ({
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
  logo,
}) => {
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
    <title>Salary Slip</title>
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .es-button {
        mso-style-priority: 100 !important;
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
        mso-hide: all;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #56d66b !important;
      }
      .es-button-border:hover {
        border-color: #42d159 #42d159 #42d159 #42d159 !important;
        background: #56d66b !important;
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
        .es-button-border {
          display: inline-block !important;
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
      background-color: #f7f6f6;
      width: 100%;
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
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #f7f6f6;
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
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-content-body"
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#F7F6F6"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f7f6f6;
                      width: 1300px;
                    "
                  >
                    <tr>
                      <td align="left" style="padding: 0; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              class="es-m-p0r es-m-p20b"
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 100px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="right"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      font-size: 0px;
                                    "
                                  >
                                    <img
                                     src="data:image/png;base64,${logo}"
                                      alt
                                      style="
                                        display: block;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                        -ms-interpolation-mode: bicubic;
                                      "
                                      height="75"
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <table
                          class="es-right"
                          cellpadding="0"
                          cellspacing="0"
                          align="right"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 1200px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="center"
                                    bgcolor="#F7F6F6"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 22px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 18px;
                                      "
                                    >
                                      <span style="font-size: 25px"
                                        ><strong
                                          >RAMRAO ADIK INSTITUTE OF
                                          TECHNOLOGY</strong
                                        ></span
                                      ><br /><span style="font-size: 15px"
                                        ><strong
                                          >DR D Y PATIL UNIVERSITY, Dr D Y Patil
                                          Vidyanagar, Nerul, Navi Mumbai-400
                                          706</strong
                                        ><br />Salary Slip for the month of
                                        ${date}</span
                                      >
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
                        bgcolor="#F7F6F6"
                        style="padding: 0; margin: 0; background-color: #f7f6f6"
                      >
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="es-left"
                          align="left"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              class="es-m-p20b"
                              style="padding: 0; margin: 0; width: 650px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    bgcolor="#F7F6F6"
                                    style="padding: 0; margin: 0"
                                  >
                                    <table
                                      cellspacing="1"
                                      cellpadding="1"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                        width: 100%;
                                      "
                                      class="es-table"
                                      border="1"
                                      role="presentation"
                                    >
                                      <tr>
                                        <td
                                          colspan="4"
                                          style="padding: 0; margin: 0"
                                        >
                                          <br /><span style="font-size: 17px"
                                            ><strong>&nbsp;SDRN </strong></span
                                          >${sdrn}&nbsp;<span
                                            style="font-size: 18px"
                                          >
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp;Name
                                            ${name}</span
                                          >
                                        </td>
                                        <td style="padding: 0; margin: 0">
                                          <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colspan="4"
                                          style="padding: 0; margin: 0"
                                        >
                                          <br />&nbsp;Date of Joining:
                                          ${date_of_joining}&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp;SOP:
                                          1560-39100+6000
                                        </td>
                                        <td style="padding: 0; margin: 0">
                                          <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colspan="4"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            text-align: center;
                                            font-size: 21px;
                                          "
                                        >
                                          Earnings
                                        </td>
                                        <td style="padding: 0; margin: 0">
                                          <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          rowspan="4"
                                          colspan="4"
                                          style="padding: 0; margin: 0"
                                        >
                                          <br
                                            style="font-size: 16px"
                                          />&nbsp;BASIC&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          ${basic}&nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          DEARNESS PAY&nbsp; &nbsp;
                                          &nbsp;${dearness_pay}<br /><br /><br />&nbsp;DEARNESS<br />&nbsp;ALLOWANCE&nbsp;
                                          &nbsp;${dearness_allowance}&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; CLA&nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; ${cla}<br />&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; TA&nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          ${ta}<br /><br /><br />&nbsp;HRA&nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp;
                                          &nbsp;${hra}&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; OTHERS 1&nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; ${others_1}<br /><br /><br />&nbsp;PF
                                          Mgmt.Share ${pf_mgmt_share}&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp;
                                          ARREARS&nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp;
                                           ${arrears}<br />&nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp;OTHERS&nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp;${others}<br /><br /><br />
                                        </td>
                                        <td style="padding: 0; margin: 0">
                                          <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="padding: 0; margin: 0">
                                          <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="padding: 0; margin: 0">
                                          <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td style="padding: 0; margin: 0">
                                          <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          rowspan="1"
                                          colspan="4"
                                          align="right"
                                          style="padding: 0; margin: 0"
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              line-height: 19px;
                                              margin-bottom: 9px;
                                              color: #333333;
                                              font-size: 16px;
                                            "
                                          >
                                            <br />
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              -webkit-text-size-adjust: none;
                                              -ms-text-size-adjust: none;
                                              mso-line-height-rule: exactly;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              line-height: 19px;
                                              margin-bottom: 9px;
                                              color: #333333;
                                              font-size: 16px;
                                              text-align: center;
                                            "
                                          >
                                            &nbsp;
                                            <span style="font-size: 18px"
                                              >GROSS&nbsp; &nbsp; &nbsp; &nbsp;
                                              &nbsp; &nbsp; ${gross}</span
                                            ><br /><br />
                                          </p>
                                        </td>
                                        <td style="padding: 0; margin: 0">
                                          <br />
                                        </td>
                                      </tr>
                                    </table>
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
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr>
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 650px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="left"
                                    bgcolor="#F7F6F6"
                                    style="padding: 0; margin: 0"
                                  >
                                    <table
                                      cellspacing="1"
                                      cellpadding="1"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                        width: 100%;
                                      "
                                      class="es-table"
                                      border="1"
                                      role="presentation"
                                    >
                                      <tr>
                                        <td
                                          colspan="6"
                                          style="padding: 0; margin: 0"
                                        >
                                          &nbsp;<br /><span
                                            style="font-size: 17px"
                                            >&nbsp;Desig: ${designation} &nbsp; &nbsp; Bank
                                            A/C No: ${acc_no}&nbsp;&nbsp; &nbsp; No.days
                                            Present: ${days_present}</span
                                          >
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colspan="6"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            text-align: center;
                                          "
                                        >
                                          <br />Dept. ${department}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colspan="6"
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            text-align: center;
                                            font-size: 21px;
                                          "
                                        >
                                          Deductions
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colspan="6"
                                          style="padding: 0; margin: 0"
                                        >
                                          <br />&nbsp; PT&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          ${pt}&nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; IT&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          ${it}&nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          WPL&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; ${wpl}<br /><br />&nbsp;<br /><br />&nbsp;PF&nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; ${pf}&nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; Loan&nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp;${loan}&nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; WC&nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp;${wc}<br />&nbsp;<br /><br /><br />&nbsp;LIC&nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp;${lic}&nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp;
                                          &nbsp;&nbsp; &nbsp; &nbsp; Others&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp;${others_dec}&nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                          MC&nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp;${mc}<br />&nbsp;<br /><br /><br />&nbsp;Gr.Insu&nbsp;
                                          &nbsp; &nbsp; &nbsp;
                                          &nbsp;${gr_insu}&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; HR&nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp;${hr}&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp;&nbsp; &nbsp; &nbsp;Advance&nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp;${advance}&nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp;<br />&nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                          &nbsp;<br />&nbsp;<br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          colspan="6"
                                          style="padding: 0; margin: 0"
                                        >
                                          &nbsp;<br />&nbsp;
                                          &nbsp;&nbsp;<span
                                            style="font-size: 18px"
                                            ><br />Total Deduction&nbsp; &nbsp; &nbsp;
                                            &nbsp; ${total_dec}&nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp;Net Pay&nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp;&nbsp; ${net_pay}</span
                                          ><br /><br />
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
                      <td align="left" style="padding: 0; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr>
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 1300px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr>
                                  <td
                                    align="right"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 24px;
                                        margin-bottom: 9px;
                                        color: #333333;
                                        font-size: 20px;
                                      "
                                    >
                                      <br /><br /><br /><span
                                        style="font-size: 18px"
                                        >PRINCIPAL</span
                                      >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      &nbsp; &nbsp;
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
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
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
