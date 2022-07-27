export const generateEmailTemplate = (htmlContent) => {
  return `

    <!DOCTYPE html>

    <html lang="en">

    <head>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <style>

        @media only screen and (max-width: 620px){

            h1{

                font-size:20px;

                padding:5px;

            }

        }

        </style>

        </head>

        <body>

        <div>

        <div style="max-width:620px; margin:0 auto; font-family:sans-serif; color:#272727:">

            ${htmlContent}

        </div>

        </div>

        </body>

        </html>



    `;
};
