// const subcriber = function () {
//   const html = `
//     <!DOCTYPE html PRIVATE "-//OgidisPearl Project Limited data-editor-version 1.0 Strict//EN" "https://ogidispearl-project-limited-peach.vercel.app/">
// <html lang="en" ata-editor-version="1" class="client email" xmlns="https://ogidispearl-project-limited-peach.vercel.app/">

// <head>
//   <meta charset="utf-8">
//   <meta name="x-apple-disable-message-reformatting">
//   <meta http-equiv="x-ua-compatible" content="ie=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
//   <title>OgidisPearl Project Limited</title>
//   <link
//     href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
//     rel="stylesheet" media="screen">
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
//   <style>
//     .hover-underline:hover {
//       text-decoration: underline !important;
//     }

//     @keyframes spin {
//       to {
//         transform: rotate(360deg);
//       }
//     }

//     @keyframes ping {

//       75%,
//       100% {
//         transform: scale(2);
//         opacity: 0;
//       }
//     }

//     @keyframes pulse {
//       50% {
//         opacity: .5;
//       }
//     }

//     @keyframes bounce {

//       0%,
//       100% {
//         transform: translateY(-25%);
//         animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
//       }

//       50% {
//         transform: none;
//         animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
//       }
//     }

//     @media (max-width: 600px) {
//       .sm-px-24 {
//         padding-left: 24px !important;
//         padding-right: 24px !important;
//       }

//       .sm-py-32 {
//         padding-top: 32px !important;
//         padding-bottom: 32px !important;
//       }

//       .sm-w-full {
//         width: 100% !important;
//       }
//     }
//   </style>
// </head>

// <body
//   style="margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; --bg-opacity: 1; background-color: #eceff1;">
//   <div style="padding:10px 50px 20px 50px; line-height:24px; text-align:inherit; background-color:#0A3752;" height="100%" valign="top" bgcolor="#0A3752">
//                             <div style="font-family: inherit; text-align: left">
//                                 <span style="font-family: verdana, geneva, sans-serif; font-size: 16px; color: whitesmoke"> Welcome to <strong>OgidisPearl Project Limited</strong> {{params.name}}please confirm that this email{{params.email}} you gave us  a correct & it is your
//                                             <strong>Company</strong> or <strong>Personal</strong> email.This would enable us contact you or use the  button below to send a new contact request
//                                             </span><br><br>
//                                 <div><button <a href="https://ogidispearl-project-limited-peach.vercel.app/contact"
//                                         style="background-color:#ffff; border:0px solid #ffffff; border-color:#ffffff; border-radius:0px; border-width:0px; color:#0A3752; display:inline-block; font-size:17px; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 30px 12px 30px; text-align:center; text-decoration:none; border-style:solid; font-family:verdana,geneva,sans-serif;"
//                                         target="_blank"></a>SEND NEW</button><br></div>
//                                 <span></span><br>
//                             </div>
//                             <div>
//                                 <span style="font-family: verdana, geneva, sans-serif; color: #ffffff; font-size: 20px"><strong>Thank Your Patronise</strong></span>
//                                     <hr style="padding:0px 0px 1px 0px;" bgcolor="#fffff"></hr><br>
//                                 <span style="font-family: verdana, geneva, sans-serif; color: #ffff; font-size: 14px">You can follow us on our social media below can follow us on our social media below</span>
//                                 <span style=" display: flex;justify-content:space-around; text-align: center;">
//                                         <a role="social-icon-link" href="#" class="fa fa-facebook" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                                         <a role="social-icon-link" href="#" class="fa fa-twitter" style=" background-color:whitesmoke;color: #0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                                         <a role="social-icon-link" href="#" class="fa fa-linkedin" style=" background-color:whitesmoke;color:#0A3752;border-radius: 30px; height: 15px;line-height: 15px;margin: auto 3px;width: 15px;font-size: 9px;text-decoration: none"></a>
//                                 </span>
//                             </div><br>
//                             <div></div>
//                             <div>
//                                 <a href="https://ogidispearl-project-limited-peach.vercel.app/" style=" border:1px solid #F5F8FD; border-color:#F5F8FD; border-radius:25px; border-width:1px; color:#ffff; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank" justify-content: center;>♥ POWERED BY OgidisPearl Project Limited</a>
//                             </div>
//                     </div>
                    
// </body>

// </html>`;
//   const text = `
//         you can now return to our website to explore more:
//         ${`https://ogidispearl-project-limited-peach.vercel.app/`}

// If you did not requested a password reset, please ignore this email or reply to let us know. This password reset is only valid for the next 2 hours.`;
//   return {
//     html: html,
//     text: text,
//   };
// };

// export default subcriber;
