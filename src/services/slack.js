import axios from "axios";
// import md5 from "crypto-js";
import { submitOrder } from "./graphCMS";
const citryRideWebhook = process.env.REACT_APP_CITYRIDE_SLACK_WEBHOOK;
const outstationWebhook = process.env.REACT_APP_OUTSTATION_SLACK_WEBHOOK;
const corporateSignUpWebhook = process.env.REACT_APP_CONTACT_SLACK_WEBHOOK;
export const submitSlack = async (content) => {
  const {
    pickup,
    drop,
    phoneNumber,
    bookingOption,
    bookingTime,
    bookingLaterTime,
    bookingLaterDate,
    pickupData,
    dropData,
  } = content;
  let date = new Date();
  let dateString = date.toLocaleDateString();
  let timeString = date.toLocaleTimeString();
  // deciding webhook for city or outstation
  const webhook =
    bookingOption.toLowerCase() == "cityride"
      ? citryRideWebhook
      : outstationWebhook;
  const data = {
    text: `\n>*--------New Booking--------*
    -\` Booking Option: \` ${bookingOption.toUpperCase()}
    -\` Pickup: \` ${pickup}
    -\` Pickup Complete Address: \` ${pickupData.addressLine2}
    -\` Drop: \` ${drop}
    -\` Drop Complete Address: \` ${dropData.addressLine2}
    -\` Phone: \` ${phoneNumber}  
    ${
      bookingTime === "now"
        ? `-\` Booking Time: \` ${bookingTime}`
        : `-\` Booking Later Time: \` ${bookingLaterTime}
    -\` Booking Later Date: \` ${bookingLaterDate}`
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
  //* slack webhook
  const postSlack = async () => {
    let res = await axios.post(webhook, JSON.stringify(data), {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          delete headers.post["Content-Type"];
          return data;
        },
      ],
    });
    if (res.status == 200) {
      // console.log(res.er)
    }
  };
  postSlack();
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
    text: `\n>*New Corporate Sign Up*
      -\` Email: \` ${email}
      -\` Phone: \` ${phoneNumber}
      -\` Company Name: \` ${companyName}
      -\` Company Email: \` ${companyEmail}
      -\` Company State: \` ${companyState}
      -\` Department: \` ${department}
      -\` Number of Employees: \` ${NumberOfEmployees}
     -:date: Booking Date: ${dateString}
      -:clock1: Booking Time: ${timeString}`,
  };

  //* slack webhook
  let res = await axios.post(corporateSignUpWebhook, JSON.stringify(data), {
    withCredentials: false,
    transformRequest: [
      (data, headers) => {
        delete headers.post["Content-Type"];
        return data;
      },
    ],
  });
};
export const submitGeneralContact = async (content) => {
  const {
    type,
    email,
    phoneNumber,
    companyName,
    companyState,
    department,
    NumberOfEmployees,
    Message,
  } = content;
  let date = new Date();
  let dateString = date.toLocaleDateString();
  let timeString = date.toLocaleTimeString();
  const data = {
    text: `\n>*New Corporate Sign Up*
    \n Type: ${type}
      -\` Email: \` ${email}
      -\` Phone: \` ${phoneNumber}
      -\` Company Name: \` ${companyName}
      -\` Company State: \` ${companyState}
      -\` Department: \` ${department}
      -\` Number of Employees: \` ${NumberOfEmployees}
      -\` Message: \` ${Message}
     -:date: Booking Date: ${dateString}
      -:clock1: Booking Time: ${timeString}`,
  };

  //* slack webhook
  let res = await axios.post(corporateSignUpWebhook, JSON.stringify(data), {
    withCredentials: false,
    transformRequest: [
      (data, headers) => {
        delete headers.post["Content-Type"];
        return data;
      },
    ],
  });
};
