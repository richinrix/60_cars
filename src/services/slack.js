import axios from "axios";
// import md5 from "crypto-js";
import { submitOrder } from "./graphCMS";

// dev webhook
const citryRideWebhook =
  "https://hooks.slack.com/services/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";
const outstationWebhook = process.env.REACT_APP_OUTSTATION_SLACK_WEBHOOK;
const corporateSignUpWebhook = process.env.REACT_APP_CONTACT_SLACK_WEBHOOK;
//  // dev hook const citryRideWebhook = process.env.REACT_APP_CITYRIDE_SLACK_WEBHOOK;
// * discord webhooks
const citryRideDiscordWebhook =
  "https://discord.com/api/webhooks/956998991285989426/GsV-1JlUbj2tAVINSzMHPth-PC3nDLacpt1TN_Atpe3MTzHlxD9iMOSkhfZKm__4hk62";
const outstationDiscordWebhook =
  "https://discord.com/api/webhooks/956999193346596916/e6wVxiTL_koTXWDG_UQGDDg-8CrRLb1GnD2TBeJzEDhz_zGp-8cA4p_BrO3L1PHpHXzC";
const contactDiscordWebhook =
  "https://discord.com/api/webhooks/957004029454614548/hHSpbIROKOXWIVDlnZvDD6YfqzGN0BA8_sToXf_rkQCpLKVlC_GngmKbDHXl08hxZw3p";
// REACT_APP_CITYRIDE_DISCORD_WEBHOOK='https://discord.com/api/webhooks/956998991285989426/GsV-1JlUbj2tAVINSzMHPth-PC3nDLacpt1TN_Atpe3MTzHlxD9iMOSkhfZKm__4hk62'
// REACT_APP_OUTSTATION_DISCORD_WEBHOOK='https://discord.com/api/webhooks/956999193346596916/e6wVxiTL_koTXWDG_UQGDDg-8CrRLb1GnD2TBeJzEDhz_zGp-8cA4p_BrO3L1PHpHXzC'
// REACT_APP_CONTACT_DISCORD_WEBHOOK='https://discord.com/api/webhooks/957004029454614548/hHSpbIROKOXWIVDlnZvDD6YfqzGN0BA8_sToXf_rkQCpLKVlC_GngmKbDHXl08hxZw3p'
// REACT_APP_DEV_DISCORD_WEBHOOK='https://discord.com/api/webhooks/956745688186773535/kiC0QUzLbp5U64GPjAdjRwL_3kaV37OCxgcxvOlgwElz1iOtAd0jR8B9bh_527dQmPlS'

// const devDiscordHook =
//   "";
export const submitSlack = async (content) => {
  const {
    pickup,
    drop,
    phoneNumber,
    bookingOption,
    bookingTime,
    bookingDate,
    bookingLaterTime,
    bookingLaterDate,
    pickupData,
    dropData,
    carType,
  } = content;
  let date = new Date();
  let dateString = date.toLocaleDateString();
  let timeString = date.toLocaleTimeString();
  // deciding webhook for city or outstation
  // const webhook =
  //   bookingOption.toLowerCase() == "cityride"
  //     ? citryRideWebhook
  //     : outstationWebhook;
  // * choosing webhook
  const webhookDiscord =
    bookingOption.toLowerCase() == "cityride"
      ? citryRideDiscordWebhook
      : outstationDiscordWebhook;
  const data = {
    text: `\n>*--------New Booking--------*
    -\` Booking Option: \` ${bookingOption.toUpperCase()}
    -\` Car Type: \` ${carType.toUpperCase()}
    -\` Pickup: \` ${pickup}
    -\` Pickup Complete Address: \` ${pickupData.addressLine2}
    -\` Drop: \` ${drop}
    -\` Drop Complete Address: \` ${dropData.addressLine2}
    -\` Phone: \` ${phoneNumber}  
    ${
      bookingTime === "now"
        ? `-\` Booking Time: \` ${bookingTime}`
        : `-\` Booking Later Date and Time: \` ${
            bookingDate
              ? bookingDate + " " + bookingLaterTime
              : bookingLaterDate
          }`
    }
    ${
      pickupData.coordinates.lat == ""
        ? ""
        : "-` Pickup Coordinates: ` \n  " +
          pickupData.coordinates.lat +
          "," +
          pickupData.coordinates.lon
    }  
    ${
      dropData.coordinates.lat == ""
        ? ""
        : "-` Drop Coordinates: ` \n  " +
          dropData.coordinates.lat +
          "," +
          dropData.coordinates.lon
    }    
      -:date: Booking Date: ${dateString}
      -:clock1: Booking Time: ${timeString}`,
  };

  // * discord posting
  const postDiscord = async () => {
    const data = {
      content: "",
      embeds: [
        {
          title: "New Booking",
          description: "",
          color: "16711680",
        },
        {
          title: `:taxi:  ${bookingOption.toUpperCase()}`,
          description: "",
          color: "16776960",
        },
        {
          title: ":telephone: Phone Number",
          description: `\n${phoneNumber}\n`,
          color: "5814783",
        },
        {
          title: "",
          description: `
          **Booking Details**
          **Car Type:** ${carType.toUpperCase()}
          **Pickup** : ${pickup}
          **Drop** : ${drop}
          **Pickup Complete Address** : ${pickup} , ${pickupData.addressLine2}
          **Drop Complete Address** : ${drop} , ${dropData.addressLine2}
          ${
            bookingTime === "now"
              ? `**Booking Time** : ${bookingTime}\n`
              : `**Booking Later Date and Time** : ${
                  bookingDate
                    ? bookingDate + " " + bookingLaterTime
                    : bookingLaterDate
                }\n`
          }
          
          
            `,
          color: "16777215",
          // fields: [
          //   {
          //     name: "Mentioning users, roles, channels, and using emojis",
          //     value: "test",
          //   },
          // ],
        },
        {
          title: "Pickup Coordinates",
          description: `${pickupData.coordinates.lat},${pickupData.coordinates.lon}`,
          color: "16777215",
        },
        {
          title: "Drop Coordinates",
          description: `${dropData.coordinates.lat},${dropData.coordinates.lon}`,
          color: "16777215",
        },
        // {
        //   title: "",
        //   description: `:date: **Booking Date** : ${dateString}
        //   \n:clock1: **Booking Time** : ${timeString}\n`,
        // },
      ],
    };
    let res = await axios.post(webhookDiscord, data);
  };
  postDiscord();

  // ! slack webhook disabled for now
  // const postSlack = async () => {
  //   let res = await axios.post(webhook, JSON.stringify(data), {
  //     withCredentials: false,
  //     transformRequest: [
  //       (data, headers) => {
  //         delete headers.post["Content-Type"];
  //         return data;
  //       },
  //     ],
  //   });
  //   if (res.status == 200) {
  //     // console.log(res.er)
  //   }
  // };
  // postSlack();

  //*  graphcms webhook
  //   const orderObject = {
  //     pickup: location,
  //     drop: location,
  //     when: dateString,
  //     departTime: timeString,
  //     departDate: dateString,
  //     pickupCoordinates: location,
  //     dropCoordinates: location,
  //     phoneNumber: Math.floor(Math.random() * 1000000000).toString(),
  //     orderId: Math.floor(Math.random() * 1000000000),
  //   };
  //   let res2 = await submitOrder(orderObject);

  //   console.log("phone", md5.createHash("md5"));

  // if (res.status === 200) {
  //    success
  // } else {
  //   there was an error
  // }
};
export const submitCorporateSignUp = async (content) => {
  const {
    type,
    email,
    phoneNumber,
    companyName,
    companyEmail,
    companyState,
    department,
    NumberOfEmployees,
  } = content;
  let date = new Date();
  let dateString = date.toLocaleDateString();
  let timeString = date.toLocaleTimeString();
  const data = {
    text: `\n>----------*New Corporate Sign Up*----------
      Email:  ${email}
      Phone:  ${phoneNumber}
      Company Name:  ${companyName}
      Company Email:  ${companyEmail}
      Company State:  ${companyState}
      Department:  ${department}
      Number of Employees:  ${NumberOfEmployees}
     -:date: Booking Date: ${dateString}
     -:clock1: Booking Time: ${timeString}`,
  };
  const postDiscord = async () => {
    const data = {
      content: "",
      embeds: [
        {
          title: "New Form Submission",
          description: ``,
          color: "16711680",
        },
        {
          title: `:telephone:  ${type.toUpperCase()}`,
          description: "",
          color: "16776960",
        },
        {
          title: ":call_me: Phone Number",
          description: `\n${phoneNumber}\n`,
          color: "5814783",
        },
        {
          title: ":email: Email",
          description: `\n${email}\n`,
          color: "5814783",
        },
        {
          title: "",
          description: `
          **Company Details**
          Company Name:  ${companyName}
          Company Email:  ${companyEmail}
          Company State:  ${companyState}
          Department:  ${department}
          Number of Employees:  ${NumberOfEmployees}
            `,
          color: "16777215",
        },
        // {
        //   title: "",
        //   description: `:date: **Contact Submission Date** : ${dateString}
        //   \n:clock1: **Booking Submission Time** : ${timeString}\n`,
        // },
      ],
    };
    let res = await axios.post(contactDiscordWebhook, data);
  };
  postDiscord();
  //* slack webhook
  // let res = await axios.post(corporateSignUpWebhook, JSON.stringify(data), {
  //   withCredentials: false,
  //   transformRequest: [
  //     (data, headers) => {
  //       delete headers.post["Content-Type"];
  //       return data;
  //     },
  //   ],
  // });
};
export const submitGeneralContact = async (content) => {
  const {
    type,
    email,
    phoneNumber,
    companyName,
    companyEmail,
    companyState,
    department,
    NumberOfEmployees,
    Message,
  } = content;
  let date = new Date();
  let dateString = date.toLocaleDateString();
  let timeString = date.toLocaleTimeString();
  const data = {
    text: `\n>----------*New Genneral Sign Up*----------
      -\` Email: \` ${email}
      -\` Phone: \` ${phoneNumber}
      -\` Company Name: \` ${companyName}
      -\` Company Email: \` ${companyEmail}
      -\` Company State: \` ${companyState}
      -\` Department: \` ${department}
      -\` Number of Employees: \` ${NumberOfEmployees}
      -\` Message: \` ${Message}
     -:date: Booking Date: ${dateString}
     -:clock1: Booking Time: ${timeString}`,
  };
  const postDiscord = async () => {
    const data = {
      content: "",
      embeds: [
        {
          title: "New Form Submission",
          description: ``,
          color: "16711680",
        },
        {
          title: `:telephone: Contact Type`,
          description: `${type.toUpperCase()}`,
          color: "16776960",
        },
        {
          title: ":call_me: Phone Number",
          description: `\n${phoneNumber}\n`,
          color: "5814783",
        },
        {
          title: ":email: Email",
          description: `\n${email}\n`,
          color: "5814783",
        },
        {
          title: "",
          description: `
          **Company Details**
          Company Name:  ${companyName}
          Company Email:  ${companyEmail}
          Company State:  ${companyState}
          Department:  ${department}
          Number of Employees:  ${NumberOfEmployees}
            `,
          color: "16777215",
        },
        {
          title: "Message",
          description: `${Message}`,
          color: "16777215",
        },
        // {
        //   title: "",
        //   description: `:date: **Contact Submission Date** : ${dateString}
        //   \n:clock1: **Booking Submission Time** : ${timeString}\n`,
        // },
      ],
    };
    let res = await axios.post(contactDiscordWebhook, data);
  };
  postDiscord();
  // //slack webhook
  // //let res = await axios.post(corporateSignUpWebhook, JSON.stringify(data), {
  // //withCredentials: false,
  // //  transformRequest: [
  // //    (data, headers) => {
  //  //     delete headers.post["Content-Type"];
  //  //     return data;
  //  //   },
  //  //  ],
  // // });
};
