// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);

    await sendgrid.send({
      to: "infos@tcbw.be", // Your email where you'll receive emails
      from: "demande@tcbw.be", // your website email address here
      subject: `[Depuis le site internet] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//FR">
      <html lang="fr">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
          </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <div style=" background-color: rgb(25, 25, 25);
                  padding: 10px;
                  color: white;
                  font-family: 'Arial', 'Helvetica', 'sans-serif';">

                  <span style="font-weight: bold">Prénom, Nom :</span>
                  ${req.body.fullname}<br />
    
                  <span style="font-weight: bold">Mail :</span>
                  ${req.body.email}<br />
    
                  <span style="font-weight: bold">Numéro de téléphone :</span>
                  ${req.body.phone}<br />
                </div>

              <div style="font-size: 16px;">
                <p>${req.body.message}</p>
                <br>
              </div>
              <p>Envoyé le ${req.body.date}</p>
          </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  console.log("succes");
  return res.status(200).json({ error: "" });
}

export default sendEmail;
