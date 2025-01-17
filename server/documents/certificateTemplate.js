module.exports = ({
  Surname,
  StudentName,
  Date,
  WorkShopName,
  WorkShopDesc,
  VerificationCode,
  image,
}) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8" />
    <meta property="twitter:card" content="summary_large_image" />
    <style data-tag="reset-style-sheet">
      html {
        line-height: 1.15;
      }
      body {
        margin: 0;
      }
      * {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
      }
      p,
      li,
      ul,
      pre,
      div,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      figure,
      blockquote,
      figcaption {
        margin: 0;
        padding: 0;
      }
      button {
        background-color: transparent;
      }
      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }
      button,
      select {
        text-transform: none;
      }
      button,
      [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: button;
      }
      button::-moz-focus-inner,
      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }
      button:-moz-focus,
      [type='button']:-moz-focus,
      [type='reset']:-moz-focus,
      [type='submit']:-moz-focus {
        outline: 1px dotted ButtonText;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      input {
        padding: 2px 4px;
      }
      img {
        display: block;
      }
      html {
        scroll-behavior: smooth;
      }
    </style>
    <style data-tag="default-style-sheet">
      html {
        font-family: Inter;
        font-size: 16px;
      }

      body {
        font-weight: 400;
        font-style: normal;
        text-decoration: none;
        text-transform: none;
        letter-spacing: normal;
        line-height: 1.15;
        color: var(--dl-color-gray-black);
        background-color: var(--dl-color-gray-white);
      }
    </style>
    <style data-tag="default-style-sheet">
      :root {
        --dl-color-gray-500: #595959;
        --dl-color-gray-700: #999999;
        --dl-color-gray-900: #d9d9d9;
        --dl-size-size-large: 144px;
        --dl-size-size-small: 48px;
        --dl-color-danger-300: #a22020;
        --dl-color-danger-500: #bf2626;
        --dl-color-danger-700: #e14747;
        --dl-color-gray-black: #000000;
        --dl-color-gray-white: #ffffff;
        --dl-size-size-medium: 96px;
        --dl-size-size-xlarge: 192px;
        --dl-size-size-xsmall: 16px;
        --dl-space-space-unit: 16px;
        --dl-color-primary-100: #003eb3;
        --dl-color-primary-300: #0074f0;
        --dl-color-primary-500: #14a9ff;
        --dl-color-primary-700: #85dcff;
        --dl-color-success-300: #199033;
        --dl-color-success-500: #32a94c;
        --dl-color-success-700: #4cc366;
        --dl-size-size-xxlarge: 288px;
        --dl-size-size-maxwidth: 1400px;
        --dl-radius-radius-round: 50%;
        --dl-space-space-halfunit: 8px;
        --dl-space-space-sixunits: 96px;
        --dl-space-space-twounits: 32px;
        --dl-radius-radius-radius2: 2px;
        --dl-radius-radius-radius4: 4px;
        --dl-radius-radius-radius8: 8px;
        --dl-space-space-fiveunits: 80px;
        --dl-space-space-fourunits: 64px;
        --dl-space-space-threeunits: 48px;
        --dl-space-space-oneandhalfunits: 24px;
      }
      .button {
        color: var(--dl-color-gray-black);
        display: inline-block;
        padding: 0.5rem 1rem;
        border-color: var(--dl-color-gray-black);
        border-width: 1px;
        border-radius: 4px;
        background-color: var(--dl-color-gray-white);
      }
      .input {
        color: var(--dl-color-gray-black);
        cursor: auto;
        padding: 0.5rem 1rem;
        border-color: var(--dl-color-gray-black);
        border-width: 1px;
        border-radius: 4px;
        background-color: var(--dl-color-gray-white);
      }
      .textarea {
        color: var(--dl-color-gray-black);
        cursor: auto;
        padding: 0.5rem;
        border-color: var(--dl-color-gray-black);
        border-width: 1px;
        border-radius: 4px;
        background-color: var(--dl-color-gray-white);
      }
      .list {
        width: 100%;
        margin: 1em 0px 1em 0px;
        display: block;
        padding: 0px 0px 0px 1.5rem;
        list-style-type: none;
        list-style-position: outside;
      }
      .list-item {
        display: list-item;
      }
      .teleport-show {
        display: flex !important;
        transform: none !important;
      }
      .Content {
        font-size: 16px;
        font-family: Inter;
        font-weight: 400;
        line-height: 1.15;
        text-transform: none;
        text-decoration: none;
      }
      .Heading {
        font-size: 32px;
        font-family: Inter;
        font-weight: 700;
        line-height: 1.15;
        text-transform: none;
        text-decoration: none;
      }
    </style>
    <style data-tag="default-style-sheet">
      .home-container {
        width: 100%;
        display: flex;
        overflow: auto;
        min-height: 100vh;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
      }
      .home-text {
        top: 250px;
        left: 140px;
        position: absolute;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
      }
      .home-text1 {
        top: 400px;
        left: 140px;
        position: absolute;
        font-size: 3rem;
        font-style: normal;
        text-align: center;
        font-weight: 600;
      }
      .home-text2 {
        top: 550px;
        left: 140px;
        position: absolute;
        font-size: 3.5rem;
        font-style: normal;
        text-align: center;
        font-weight: 500;
      }
      .home-text3 {
        top: 620px;
        left: 140px;
        width: 800px;
        height: 100px;
        position: absolute;
        font-size: 1.2rem;
        font-style: normal;
        text-align: left;
        font-weight: 400;
      }
      .home-text4 {
        right: 80px;
        width: 500px;
        bottom: 0.2px;
        height: 29px;
        position: absolute;
        font-size: 1.2rem;
        font-style: normal;
        text-align: left;
        font-weight: 400;
      }
      .home-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    </style>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
      data-tag="font"
    />
  </head>
  <body>
    <div>
      <div class="home-container">
        <span class="home-text">${Date}</span>
        <h1 class="home-text1">${StudentName + ' ' + Surname}</h1>
        <h1 class="home-text2">${WorkShopName}</h1>
        <h1 class="home-text3">${WorkShopDesc}</h1>
        <h1 class="home-text4">${VerificationCode}</h1>
        <img
          alt="image"
          src="data:image/png;base64,${image}"
          class="home-image"
        />
      </div>
    </div>
  </body>
</html>

`;
};
