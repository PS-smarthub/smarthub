// import axios from "axios";

// export async function callMsGraph(
//   accessToken: string | undefined,
//   emailUser: string | undefined,
// ) {
//   const headers = {
//     Authorization: `Bearer ${accessToken}`,
//   };

//   const body = {
//     message: {
//       subject: "E-MAIL AUTOMÁTICO - Container de temperatura",
//       body: {
//         contentType: "Text",
//         content: `Olá, esta é uma mensagem automática do Cold Start!\n\n A temperatura está próxima à definida no Set Point virtual!`,
//       },
//       toRecipients: [
//         {
//           emailAddress: {
//             address: emailUser,
//           },
//         },
//       ],
//     },
//   };

//   return await axios.post(
//     "https://graph.microsoft.com/v1.0/me/sendMail",
//     body,
//     { headers },
//   );
// }
