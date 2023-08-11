// import Sib from "sib-api-v3-typescript"


// let client = new Sib.TransactionalEmailsApi();
//         client.setApiKey(Sib.TransactionalEmailsApiApiKeys.apiKey, API_KEY);
//         let transEmail = new Sib.SendSmtpEmail();
//         let transEmailOwner = new Sib.SendSmtpEmail();
        
//         // Subcriber email format
//         transEmail = {
//             // take this off when template Issue is resolve
//             subject: "THANK YOU FOR CONTACTING OGIDISPEARL PROJECT LIMITED A COMSTOMER CARE REPRESENTATIVE WOULD ATTAIN TO U SHORTLY",
//             htmlContent:`<!DOCTYPE  html PRIVATE "-//OgidisPearl Project Limited data-editor-version 1.0 Strict//EN" "https://ogidispearl-project-limited-peach.vercel.app/">
//             <html lang="en"  ata-editor-version="1" class="client email" xmlns="https://ogidispearl-project-limited-peach.vercel.app/">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//                     <title>OgidisPearl Project Limited</title>
//                 </head>
//                 <body>
//                     <div style="padding:10px 50px 20px 50px; line-height:24px; text-align:inherit; background-color:#0A3752;" height="100%" valign="top" bgcolor="#0A3752">
//                             <div style="font-family: inherit; text-align: left">
//                                 <span style="font-family: verdana, geneva, sans-serif; font-size: 16px; color: whitesmoke"> Welcome to <strong>OgidisPearl Project Limited</strong> please confirm that this email{{params.email}} you gave us  a correct & it is your
//                                             <strong>Company</strong> or <strong>Personal</strong> email.This would enable us contact you or use the  button below to send a new contact request
//                                             </span><br><br>
//                                 <div><button <a href="https://ogidispearl-project-limited-peach.vercel.app/contact"
//                                         style="background-color:#ffff; border:0px solid #ffffff; border-color:#ffffff; border-radius:0px; border-width:0px; color:#0A3752; display:inline-block; font-size:17px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 30px 12px 30px; text-align:center; text-decoration:none; border-style:solid; font-family:verdana,geneva,sans-serif;"
//                                         target="_blank"></a>SEND NEW</button><br></div>
//                                 <span></span><br>
//                             </div>
//                             <div>
//                                 <span style="font-family: verdana, geneva, sans-serif; color: #ffffff; font-size: 20px"><strong>Thank Your Patronise</strong></span>
//                                         <hr style="padding:0px 0px 1px 0px;" bgcolor="#fffff"></hr><br>
//                                 <span style="font-family: verdana, geneva, sans-serif; color: #ffff; font-size: 14px">You can follow us on our social media below can follow us on our social media below</span>
//                                 <span style=" display: flex;justify-content:space-around; text-align: center;">
//                                         <a role="social-icon-link" href="#" class="fa fa-facebook" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                                         <a role="social-icon-link" href="#" class="fa fa-twitter" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                                         <a role="social-icon-link" href="#" class="fa fa-linkedin" style=" background-color:whitesmoke;color:#0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                                 </span>
//                             </div><br><br>
//                             <div></div>
//                             div>
//                                 <a href="https://ogidispearl-project-limited-peach.vercel.app/" style=" border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#ffff; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank" justify-content: center;>♥ POWERED BY OgidisPearl Project Limited</a>
//                             </div>
//                     </div>
//                 </body>
//             </html>`,
//             sender:{
//                 "name": "Ogidispearl-Project Limited",
//                 "email":"ogidispearlprojectlimited@gmail.com"
//             },
//             // above is were u delete and stop when error is fixed
//             to:[{
//                 email:newMail.email,
//             }],

//             params: {
//                 email:newMail.email
//             },

//             headers:{
//                 'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
//             },
             
//         }
//         // ower email format
//         transEmailOwner = {
//             // take this off when template Issue is resolve
//             subject: "THANK YOU FOR CONTACTING OGIDISPEARL PROJECT LIMITED A COMSTOMER CARE REPRESENTATIVE WOULD ATTAIN TO U SHORTLY",
//             htmlContent:`<!DOCTYPE  html PRIVATE "-//OgidisPearl Project Limited data-editor-version 1.0 Strict//EN" "https://ogidispearl-project-limited-peach.vercel.app/">
//             <html lang="en"  ata-editor-version="1" class="client email" xmlns="https://ogidispearl-project-limited-peach.vercel.app/">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//                     <title>OgidisPearl Project Limited</title>
//                 </head>
//                 <body>
//                     <div style="padding:10px 50px 20px 50px; line-height:24px; text-align:inherit; background-color:#0A3752;" height="100%" valign="top" bgcolor="#0A3752">
//                             <div style="font-family: inherit; text-align: left">
//                                 <span style="font-family: verdana, geneva, sans-serif; font-size: 16px; color: whitesmoke"> Welcome to <strong>OgidisPearl Project Limited</strong> {{name}}please confirm that this email{{email}} you gave us  a correct & it is your
//                                             <strong>Company</strong> or <strong>Personal</strong> email.This would enable us contact you or use the  button below to send a new contact request
//                                             </span><br><br>
//                                 <div><button <a href="https://ogidispearl-project-limited-peach.vercel.app/contact"
//                                         style="background-color:#ffff; border:0px solid #ffffff; border-color:#ffffff; border-radius:0px; border-width:0px; color:#0A3752; display:inline-block; font-size:17px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 30px 12px 30px; text-align:center; text-decoration:none; border-style:solid; font-family:verdana,geneva,sans-serif;"
//                                         target="_blank"></a>SEND NEW</button><br></div>
//                                 <span></span><br>
//                             </div>
//                     </div>
//                     <div>
//                         <span style="font-family: verdana, geneva, sans-serif; color: #ffffff; font-size: 20px"><strong>Thank Your Patronise</strong></span>
//                         <hr style="padding:0px 0px 1px 0px;" bgcolor="#fffff"></hr><br>
//                         <span style="font-family: verdana, geneva, sans-serif; color: #ffff; font-size: 14px">You can follow us on our social media below can follow us on our social media below</span>
//                         <span style=" display: flex;justify-content:space-around; text-align: center;">
//                                 <a role="social-icon-link" href="#" class="fa fa-facebook" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                                 <a role="social-icon-link" href="#" class="fa fa-twitter" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                                 <a role="social-icon-link" href="#" class="fa fa-linkedin" style=" background-color:whitesmoke;color:#0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                         </span>
//                     </div><br>
//                     <div></div>
//                     div>
//                         <a href="https://ogidispearl-project-limited-peach.vercel.app/" style=" border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#ffff; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank" justify-content: center;>♥ POWERED BY OgidisPearl Project Limited</a>
//                     </div>
//                 </body>
//             </html>

//             `,
//             sender:{
//                 "name": "Ogidispearl-Project Limited",
//                 "email":"ogidispearlprojectlimited@gmail.com"
//             },
//             // above is were u delete and stop when error is fixed
//             to:[{
//                 email:'ogidispearlprojectlimited@gmail.com',
//                 name:"NEW CONTACT FORM"
//             }],

//             cc:[{
//                 email:'samueleffiongjacob@gmail.com',
//                 name:"newForm"
//             }],
//             // use this when template issue is resove
//             // templateId:2,
//             params: {
//                 email:newMail.email
//             },
//             headers:{
//                 'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
//             },
//         }
//         // sending email client
//         client.sendTransacEmail(transEmail).then(function(data){
//             console.log('API called successfully. Returned data: ' + data);
//         }, function(error){
//             console.error(error);
//         }); // {{params.name}} {{params.email}}

//         // returning sending mail to ower
//         client.sendTransacEmail(transEmailOwner).then(function(data){
//             console.log('API called successfully. Returned data: ' + data);
//         }, function(error){
//             console.error(error);
//         })







// let client = new Sib.TransactionalEmailsApi();
//         client.setApiKey(Sib.TransactionalEmailsApiApiKeys.apiKey, API_KEY);
//         let transEmail = new Sib.SendSmtpEmail();
//         let transEmailOwner = new Sib.SendSmtpEmail();

//         // let client = new Sib.TransactionalEmailsApi();
//         // const apiKey = client.Authentication['apiKey'];
//         // apiKey.apiKey = API_KEY

//         // contact email format
//         transEmail = {
//             // take this off when template Issue is resolve
//             subject: "THANK YOU FOR CONTACTING OGIDISPEARL PROJECT LIMITED A COMSTOMER CARE REPRESENTATIVE WOULD ATTAIN TO U SHORTLY",
//             htmlContent:`<!DOCTYPE  html PRIVATE "-//OgidisPearl Project Limited data-editor-version 1.0 Strict//EN" "https://ogidispearl-project-limited-peach.vercel.app/">
//             <html lang="en"  ata-editor-version="1" class="client email" xmlns="https://ogidispearl-project-limited-peach.vercel.app/">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//                     <title>OgidisPearl Project Limited</title>
//                 </head>
//                 <body>
                //     <div style="padding:10px 50px 20px 50px; line-height:24px; text-align:inherit; background-color:#0A3752;" height="100%" valign="top" bgcolor="#0A3752">
                //             <div style="font-family: inherit; text-align: left">
                //                 <span style="font-family: verdana, geneva, sans-serif; font-size: 16px; color: whitesmoke"> Welcome to <strong>OgidisPearl Project Limited</strong> {{params.name}}please confirm that this email{{params.email}} you gave us  a correct & it is your
                //                             <strong>Company</strong> or <strong>Personal</strong> email.This would enable us contact you or use the  button below to send a new contact request
                //                             </span><br><br>
                //                 <div><button <a href="https://ogidispearl-project-limited-peach.vercel.app/contact"
                //                         style="background-color:#ffff; border:0px solid #ffffff; border-color:#ffffff; border-radius:0px; border-width:0px; color:#0A3752; display:inline-block; font-size:17px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 30px 12px 30px; text-align:center; text-decoration:none; border-style:solid; font-family:verdana,geneva,sans-serif;"
                //                         target="_blank"></a>SEND NEW</button><br></div>
                //                 <span></span><br>
                //             </div>
                //             <div>
                //                 <span style="font-family: verdana, geneva, sans-serif; color: #ffffff; font-size: 20px"><strong>Thank Your Patronise</strong></span>
                //                     <hr style="padding:0px 0px 1px 0px;" bgcolor="#fffff"></hr><br>
                //                 <span style="font-family: verdana, geneva, sans-serif; color: #ffff; font-size: 14px">You can follow us on our social media below can follow us on our social media below</span>
                //                 <span style=" display: flex;justify-content:space-around; text-align: center;">
                //                         <a role="social-icon-link" href="#" class="fa fa-facebook" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
                //                         <a role="social-icon-link" href="#" class="fa fa-twitter" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
                //                         <a role="social-icon-link" href="#" class="fa fa-linkedin" style=" background-color:whitesmoke;color:#0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
                //                 </span>
                //             </div><br>
                //             <div></div>
                //             <div>
                //                 <a href="https://ogidispearl-project-limited-peach.vercel.app/" style=" border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#ffff; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank" justify-content: center;>♥ POWERED BY OgidisPearl Project Limited</a>
                //             </div>
                //     </div>
                    
//                 </body>
//             </html>

//             `,
//             sender:{
//                 "name": "Ogidispearl-Project Limited",
//                 "email":"ogidispearlprojectlimited@gmail.com"
//             },

//             // above is were u delete and stop when error is fixed
//             to:[{
//                 email:newForm.email,
//                 name:newForm.name
//             }],

//             cc:[{
//                 email:'samueleffiongjacob@gmail.com',
//                 name:"newForm"
//             }],
//             // use this when template issue is resove
//             // templateId:1,
//             params: {
//                 name: newForm.name,
//                 email:newForm.email
//             },
//             headers:{
//                 'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
//             },
//         }

//         // owener email format
//         transEmailOwner = {
//             // take this off when template Issue is resolve
//             subject: "THANK YOU FOR CONTACTING OGIDISPEARL PROJECT LIMITED A COMSTOMER CARE REPRESENTATIVE WOULD ATTAIN TO U SHORTLY",
//             htmlContent:`<!DOCTYPE  html PRIVATE "-//OgidisPearl Project Limited data-editor-version 1.0 Strict//EN" "https://ogidispearl-project-limited-peach.vercel.app/">
//             <html lang="en"  ata-editor-version="1" class="client email" xmlns="https://ogidispearl-project-limited-peach.vercel.app/">
//                 <head>
//                     <meta charset="UTF-8">
//                     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//                     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//                     <title>OgidisPearl Project Limited</title>
//                 </head>
//                 <body>
//                     <div style="padding:10px 50px 20px 50px; line-height:24px; text-align:inherit; background-color:#0A3752;" height="100%" valign="top" bgcolor="#0A3752">
//                             <div style="font-family: inherit; text-align: left">
//                                 <span style="font-family: verdana, geneva, sans-serif; font-size: 16px; color: whitesmoke"> Welcome to <strong>OgidisPearl Project Limited</strong> {{name}}please confirm that this email{{params.email}} you gave us  a correct & it is your
//                                             <strong>Company</strong> or <strong>Personal</strong> email.This would enable us contact you or use the  button below to send a new contact request
//                                             </span><br><br>
//                                 <div><button <a href="https://ogidispearl-project-limited-peach.vercel.app/contact"
//                                         style="background-color:#ffff; border:0px solid #ffffff; border-color:#ffffff; border-radius:0px; border-width:0px; color:#0A3752; display:inline-block; font-size:17px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 30px 12px 30px; text-align:center; text-decoration:none; border-style:solid; font-family:verdana,geneva,sans-serif;"
//                                         target="_blank"></a>SEND NEW</button><br></div>
//                                 <span></span><br>
//                             </div>
//                     </div>
//                     <div>
//                         <span style="font-family: verdana, geneva, sans-serif; color: #ffffff; font-size: 20px"><strong>Thank Your Patronise</strong></span>
//                         <hr style="padding:0px 0px 1px 0px;" bgcolor="#fffff"></hr><br>
//                         <span style="font-family: verdana, geneva, sans-serif; color: #ffff; font-size: 14px">You can follow us on our social media below can follow us on our social media below</span>
//                         <span style=" display: flex;justify-content:space-around; text-align: center;">
//                                 <a role="social-icon-link" href="#" class="fa fa-facebook" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                                 <a role="social-icon-link" href="#" class="fa fa-twitter" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                                 <a role="social-icon-link" href="#" class="fa fa-linkedin" style=" background-color:whitesmoke;color:#0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                         </span>
//                     </div><br>
//                     <div></div>
//                     div>
//                         <a href="https://ogidispearl-project-limited-peach.vercel.app/" style=" border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#ffff; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank" justify-content: center;>♥ POWERED BY OgidisPearl Project Limited</a>
//                     </div>
//                 </body>
//             </html>

//             `,
//             sender:{
//                 "name": "Ogidispearl-Project Limited",
//                 "email":"ogidispearlprojectlimited@gmail.com"
//             },
//             to:[{
//                 email:'ogidispearlprojectlimited@gmail.com',
//                 name:"NEW CONTACT FORM"
//             }],

//             cc:[{
//                 email:'samueleffiongjacob@gmail.com',
//                 name:"newForm"
//             }],
//             // templateId:2,
//             params: {
//                 name: newForm.name,
//                 email:newForm.email
//             },
//             headers:{
//                 'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
//             },
//         }
//         // sending email client
//         client.sendTransacEmail(transEmail).then(function(data){
//             console.log('API called successfully. Returned data: ' + data);
//         }, function(error){
//             console.error(error);
//         }); // {{params.name}} {{params.email}}

//         // returning sending mail to ower
//         client.sendTransacEmail(transEmailOwner).then(function(data){
//             console.log('API called successfully. Returned data: ' + data);
//         }, function(error){
//             console.error(error);
//         })
        // import Sib from "sib-api-v3-typescript"
        // const API_KEY = process.env.API_KEY || "";

        // let client = new Sib.TransactionalEmailsApi();
        // client.setApiKey(Sib.TransactionalEmailsApiApiKeys.apiKey, API_KEY);
        // let transEmail = new Sib.SendSmtpEmail();
        // let transEmailOwner = new Sib.SendSmtpEmail();
        
        // // Subcriber email format
        // transEmail = {
        //     // take this off when template Issue is resolve
        //     subject: "THANK YOU FOR CONTACTING OGIDISPEARL PROJECT LIMITED A COMSTOMER CARE REPRESENTATIVE WOULD ATTAIN TO U SHORTLY",
        //     htmlContent:`<!DOCTYPE  html PRIVATE "-//OgidisPearl Project Limited data-editor-version 1.0 Strict//EN" "https://ogidispearl-project-limited-peach.vercel.app/">
        //     <html lang="en"  ata-editor-version="1" class="client email" xmlns="https://ogidispearl-project-limited-peach.vercel.app/">
        //         <head>
        //             <meta charset="UTF-8">
        //             <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        //             <title>OgidisPearl Project Limited</title>
        //         </head>
        //         <body>
        //             <div style="padding:10px 50px 20px 50px; line-height:24px; text-align:inherit; background-color:#0A3752;" height="100%" valign="top" bgcolor="#0A3752">
        //                     <div style="font-family: inherit; text-align: left">
        //                         <span style="font-family: verdana, geneva, sans-serif; font-size: 16px; color: whitesmoke"> Welcome to <strong>OgidisPearl Project Limited</strong> please confirm that this email{{params.email}} you gave us  a correct & it is your
        //                                     <strong>Company</strong> or <strong>Personal</strong> email.This would enable us contact you or use the  button below to send a new contact request
        //                                     </span><br><br>
        //                         <div><button <a href="https://ogidispearl-project-limited-peach.vercel.app/contact"
        //                                 style="background-color:#ffff; border:0px solid #ffffff; border-color:#ffffff; border-radius:0px; border-width:0px; color:#0A3752; display:inline-block; font-size:17px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 30px 12px 30px; text-align:center; text-decoration:none; border-style:solid; font-family:verdana,geneva,sans-serif;"
        //                                 target="_blank"></a>SEND NEW</button><br></div>
        //                         <span></span><br>
        //                     </div>
        //                     <div>
        //                         <span style="font-family: verdana, geneva, sans-serif; color: #ffffff; font-size: 20px"><strong>Thank Your Patronise</strong></span>
        //                                 <hr style="padding:0px 0px 1px 0px;" bgcolor="#fffff"></hr><br>
        //                         <span style="font-family: verdana, geneva, sans-serif; color: #ffff; font-size: 14px">You can follow us on our social media below can follow us on our social media below</span>
        //                         <span style=" display: flex;justify-content:space-around; text-align: center;">
        //                                 <a role="social-icon-link" href="#" class="fa fa-facebook" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                                 <a role="social-icon-link" href="#" class="fa fa-twitter" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                                 <a role="social-icon-link" href="#" class="fa fa-linkedin" style=" background-color:whitesmoke;color:#0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                         </span>
        //                     </div><br><br>
        //                     <div></div>
        //                     div>
        //                         <a href="https://ogidispearl-project-limited-peach.vercel.app/" style=" border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#ffff; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank" justify-content: center;>♥ POWERED BY OgidisPearl Project Limited</a>
        //                     </div>
        //             </div>
        //         </body>
        //     </html>`,
        //     sender:{
        //         "name": "Ogidispearl-Project Limited",
        //         "email":"ogidispearlprojectlimited@gmail.com"
        //     },
        //     // above is were u delete and stop when error is fixed
        //     to:[{
        //         email:newMail.email,
        //     }],

        //     params: {
        //         email:newMail.email
        //     },

        //     headers:{
        //         'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        //     },
             
        // }
        // // ower email format
        // transEmailOwner = {
        //     // take this off when template Issue is resolve
        //     subject: "THANK YOU FOR CONTACTING OGIDISPEARL PROJECT LIMITED A COMSTOMER CARE REPRESENTATIVE WOULD ATTAIN TO U SHORTLY",
        //     htmlContent:`<!DOCTYPE  html PRIVATE "-//OgidisPearl Project Limited data-editor-version 1.0 Strict//EN" "https://ogidispearl-project-limited-peach.vercel.app/">
        //     <html lang="en"  ata-editor-version="1" class="client email" xmlns="https://ogidispearl-project-limited-peach.vercel.app/">
        //         <head>
        //             <meta charset="UTF-8">
        //             <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        //             <title>OgidisPearl Project Limited</title>
        //         </head>
        //         <body>
        //             <div style="padding:10px 50px 20px 50px; line-height:24px; text-align:inherit; background-color:#0A3752;" height="100%" valign="top" bgcolor="#0A3752">
        //                     <div style="font-family: inherit; text-align: left">
        //                         <span style="font-family: verdana, geneva, sans-serif; font-size: 16px; color: whitesmoke"> Welcome to <strong>OgidisPearl Project Limited</strong> {{name}}please confirm that this email{{email}} you gave us  a correct & it is your
        //                                     <strong>Company</strong> or <strong>Personal</strong> email.This would enable us contact you or use the  button below to send a new contact request
        //                                     </span><br><br>
        //                         <div><button <a href="https://ogidispearl-project-limited-peach.vercel.app/contact"
        //                                 style="background-color:#ffff; border:0px solid #ffffff; border-color:#ffffff; border-radius:0px; border-width:0px; color:#0A3752; display:inline-block; font-size:17px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 30px 12px 30px; text-align:center; text-decoration:none; border-style:solid; font-family:verdana,geneva,sans-serif;"
        //                                 target="_blank"></a>SEND NEW</button><br></div>
        //                         <span></span><br>
        //                     </div>
        //             </div>
        //             <div>
        //                 <span style="font-family: verdana, geneva, sans-serif; color: #ffffff; font-size: 20px"><strong>Thank Your Patronise</strong></span>
        //                 <hr style="padding:0px 0px 1px 0px;" bgcolor="#fffff"></hr><br>
        //                 <span style="font-family: verdana, geneva, sans-serif; color: #ffff; font-size: 14px">You can follow us on our social media below can follow us on our social media below</span>
        //                 <span style=" display: flex;justify-content:space-around; text-align: center;">
        //                         <a role="social-icon-link" href="#" class="fa fa-facebook" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                         <a role="social-icon-link" href="#" class="fa fa-twitter" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                         <a role="social-icon-link" href="#" class="fa fa-linkedin" style=" background-color:whitesmoke;color:#0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                 </span>
        //             </div><br>
        //             <div></div>
        //             div>
        //                 <a href="https://ogidispearl-project-limited-peach.vercel.app/" style=" border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#ffff; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank" justify-content: center;>♥ POWERED BY OgidisPearl Project Limited</a>
        //             </div>
        //         </body>
        //     </html>

        //     `,
        //     sender:{
        //         "name": "Ogidispearl-Project Limited",
        //         "email":"ogidispearlprojectlimited@gmail.com"
        //     },
        //     // above is were u delete and stop when error is fixed
        //     to:[{
        //         email:'ogidispearlprojectlimited@gmail.com',
        //         name:"NEW CONTACT FORM"
        //     }],

        //     cc:[{
        //         email:'samueleffiongjacob@gmail.com',
        //         name:"newForm"
        //     }],
        //     // use this when template issue is resove
        //     // templateId:2,
        //     params: {
        //         email:newMail.email
        //     },
        //     headers:{
        //         'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        //     },
        // }
        // // sending email client
        // client.sendTransacEmail(transEmail).then(function(data){
        //     console.log('API called successfully. Returned data: ' + data);
        // }, function(error){
        //     console.error(error);
        // }); // {{params.name}} {{params.email}}

        // // returning sending mail to ower
        // client.sendTransacEmail(transEmailOwner).then(function(data){
        //     console.log('API called successfully. Returned data: ' + data);
        // }, function(error){
        //     console.error(error);
        // })


        // let client = new Sib.TransactionalEmailsApi();
        // client.setApiKey(Sib.TransactionalEmailsApiApiKeys.apiKey, API_KEY);
        // let transEmail = new Sib.SendSmtpEmail();
        // let transEmailOwner = new Sib.SendSmtpEmail();

        // // let client = new Sib.TransactionalEmailsApi();
        // // const apiKey = client.Authentication['apiKey'];
        // // apiKey.apiKey = API_KEY

        // // contact email format
        // transEmail = {
        //     // take this off when template Issue is resolve
        //     subject: "THANK YOU FOR CONTACTING OGIDISPEARL PROJECT LIMITED A COMSTOMER CARE REPRESENTATIVE WOULD ATTAIN TO U SHORTLY",
        //     htmlContent:`<!DOCTYPE  html PRIVATE "-//OgidisPearl Project Limited data-editor-version 1.0 Strict//EN" "https://ogidispearl-project-limited-peach.vercel.app/">
        //     <html lang="en"  ata-editor-version="1" class="client email" xmlns="https://ogidispearl-project-limited-peach.vercel.app/">
        //         <head>
        //             <meta charset="UTF-8">
        //             <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        //             <title>OgidisPearl Project Limited</title>
        //         </head>
        //         <body>
        //             <div style="padding:10px 50px 20px 50px; line-height:24px; text-align:inherit; background-color:#0A3752;" height="100%" valign="top" bgcolor="#0A3752">
        //                     <div style="font-family: inherit; text-align: left">
        //                         <span style="font-family: verdana, geneva, sans-serif; font-size: 16px; color: whitesmoke"> Welcome to <strong>OgidisPearl Project Limited</strong> {{params.name}}please confirm that this email{{params.email}} you gave us  a correct & it is your
        //                                     <strong>Company</strong> or <strong>Personal</strong> email.This would enable us contact you or use the  button below to send a new contact request
        //                                     </span><br><br>
        //                         <div><button <a href="https://ogidispearl-project-limited-peach.vercel.app/contact"
        //                                 style="background-color:#ffff; border:0px solid #ffffff; border-color:#ffffff; border-radius:0px; border-width:0px; color:#0A3752; display:inline-block; font-size:17px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 30px 12px 30px; text-align:center; text-decoration:none; border-style:solid; font-family:verdana,geneva,sans-serif;"
        //                                 target="_blank"></a>SEND NEW</button><br></div>
        //                         <span></span><br>
        //                     </div>
        //                     <div>
        //                         <span style="font-family: verdana, geneva, sans-serif; color: #ffffff; font-size: 20px"><strong>Thank Your Patronise</strong></span>
        //                             <hr style="padding:0px 0px 1px 0px;" bgcolor="#fffff"></hr><br>
        //                         <span style="font-family: verdana, geneva, sans-serif; color: #ffff; font-size: 14px">You can follow us on our social media below can follow us on our social media below</span>
        //                         <span style=" display: flex;justify-content:space-around; text-align: center;">
        //                                 <a role="social-icon-link" href="#" class="fa fa-facebook" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                                 <a role="social-icon-link" href="#" class="fa fa-twitter" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                                 <a role="social-icon-link" href="#" class="fa fa-linkedin" style=" background-color:whitesmoke;color:#0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                         </span>
        //                     </div><br>
        //                     <div></div>
        //                     <div>
        //                         <a href="https://ogidispearl-project-limited-peach.vercel.app/" style=" border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#ffff; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank" justify-content: center;>♥ POWERED BY OgidisPearl Project Limited</a>
        //                     </div>
        //             </div>
                    
        //         </body>
        //     </html>

        //     `,
        //     sender:{
        //         "name": "Ogidispearl-Project Limited",
        //         "email":"ogidispearlprojectlimited@gmail.com"
        //     },

        //     // above is were u delete and stop when error is fixed
        //     to:[{
        //         email:newForm.email,
        //         name:newForm.name
        //     }],

        //     cc:[{
        //         email:'samueleffiongjacob@gmail.com',
        //         name:"newForm"
        //     }],
        //     // use this when template issue is resove
        //     // templateId:1,
        //     params: {
        //         name: newForm.name,
        //         email:newForm.email
        //     },
        //     headers:{
        //         'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        //     },
        // }

        // // owener email format
        // transEmailOwner = {
        //     // take this off when template Issue is resolve
        //     subject: "THANK YOU FOR CONTACTING OGIDISPEARL PROJECT LIMITED A COMSTOMER CARE REPRESENTATIVE WOULD ATTAIN TO U SHORTLY",
        //     htmlContent:`<!DOCTYPE  html PRIVATE "-//OgidisPearl Project Limited data-editor-version 1.0 Strict//EN" "https://ogidispearl-project-limited-peach.vercel.app/">
        //     <html lang="en"  ata-editor-version="1" class="client email" xmlns="https://ogidispearl-project-limited-peach.vercel.app/">
        //         <head>
        //             <meta charset="UTF-8">
        //             <meta http-equiv="X-UA-Compatible" content="IE=edge">
        //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        //             <title>OgidisPearl Project Limited</title>
        //         </head>
        //         <body>
        //             <div style="padding:10px 50px 20px 50px; line-height:24px; text-align:inherit; background-color:#0A3752;" height="100%" valign="top" bgcolor="#0A3752">
        //                     <div style="font-family: inherit; text-align: left">
        //                         <span style="font-family: verdana, geneva, sans-serif; font-size: 16px; color: whitesmoke"> Welcome to <strong>OgidisPearl Project Limited</strong> {{name}}please confirm that this email{{params.email}} you gave us  a correct & it is your
        //                                     <strong>Company</strong> or <strong>Personal</strong> email.This would enable us contact you or use the  button below to send a new contact request
        //                                     </span><br><br>
        //                         <div><button <a href="https://ogidispearl-project-limited-peach.vercel.app/contact"
        //                                 style="background-color:#ffff; border:0px solid #ffffff; border-color:#ffffff; border-radius:0px; border-width:0px; color:#0A3752; display:inline-block; font-size:17px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 30px 12px 30px; text-align:center; text-decoration:none; border-style:solid; font-family:verdana,geneva,sans-serif;"
        //                                 target="_blank"></a>SEND NEW</button><br></div>
        //                         <span></span><br>
        //                     </div>
        //             </div>
        //             <div>
        //                 <span style="font-family: verdana, geneva, sans-serif; color: #ffffff; font-size: 20px"><strong>Thank Your Patronise</strong></span>
        //                 <hr style="padding:0px 0px 1px 0px;" bgcolor="#fffff"></hr><br>
        //                 <span style="font-family: verdana, geneva, sans-serif; color: #ffff; font-size: 14px">You can follow us on our social media below can follow us on our social media below</span>
        //                 <span style=" display: flex;justify-content:space-around; text-align: center;">
        //                         <a role="social-icon-link" href="#" class="fa fa-facebook" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                         <a role="social-icon-link" href="#" class="fa fa-twitter" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                         <a role="social-icon-link" href="#" class="fa fa-linkedin" style=" background-color:whitesmoke;color:#0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
        //                 </span>
        //             </div><br>
        //             <div></div>
        //             div>
        //                 <a href="https://ogidispearl-project-limited-peach.vercel.app/" style=" border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#ffff; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank" justify-content: center;>♥ POWERED BY OgidisPearl Project Limited</a>
        //             </div>
        //         </body>
        //     </html>

        //     `,
        //     sender:{
        //         "name": "Ogidispearl-Project Limited",
        //         "email":"ogidispearlprojectlimited@gmail.com"
        //     },
        //     to:[{
        //         email:'ogidispearlprojectlimited@gmail.com',
        //         name:"NEW CONTACT FORM"
        //     }],

        //     cc:[{
        //         email:'samueleffiongjacob@gmail.com',
        //         name:"newForm"
        //     }],
        //     // templateId:2,
        //     params: {
        //         name: newForm.name,
        //         email:newForm.email
        //     },
        //     headers:{
        //         'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2'
        //     },
        // }
        // // sending email client
        // client.sendTransacEmail(transEmail).then(function(data){
        //     console.log('API called successfully. Returned data: ' + data);
        // }, function(error){
        //     console.error(error);
        // }); // {{params.name}} {{params.email}}

        // // returning sending mail to ower
        // client.sendTransacEmail(transEmailOwner).then(function(data){
        //     console.log('API called successfully. Returned data: ' + data);
        // }, function(error){
        //     console.error(error);
        // })