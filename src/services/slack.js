import axios from "axios";
// import md5 from "crypto-js";
import { submitOrder } from "./graphCMS";

// ! dev webhook
const citryRideWebhook =
  "https://hooks.slack.com/services/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";

// ! official webhook
// const citryRideWebhook =
//   "https://hooks.slack.com/services/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";
const outstationWebhook =
  "https://hooks.slack.com/services/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";
export const submitSlack = async (content) => {
  const {
    pickup,
    drop,
    phoneNumber,
    bookingOption,
    bookingTime,
    bookingLaterTime,
    bookingLaterDate,
  } = content;
  let date = new Date();
  let dateString = date.toLocaleDateString();
  let timeString = date.toLocaleTimeString();
  const data = {
    text: `\n>*New Booking*
    -\` Booking Option: \` ${bookingOption.toUpperCase()}
      -\` Pickup: \` ${pickup}
      -\` Drop: \` ${drop}
      -\` Phone: \` ${phoneNumber}
      -\` Booking Time: \` ${bookingTime}
       ${
         bookingTime === "later"
           ? `-\` Booking Later Time: \` ${bookingLaterTime}
      -\` Booking Later Date: \` ${bookingLaterDate}`
           : ""
       }
      -:date: Booking Date: ${dateString}
      -:clock1: Booking Time: ${timeString}`,
  };

  //* slack webhook
  let res = await axios.post(
    bookingOption.toLowerCase() === "citryride"
      ? citryRideWebhook
      : outstationWebhook,
    JSON.stringify(data),
    {
      withCredentials: false,
      transformRequest: [
        (data, headers) => {
          delete headers.post["Content-Type"];
          return data;
        },
      ],
    }
  );
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

  if (res.status === 200) {
    //    success
  } else {
    //   there was an error
  }
};
