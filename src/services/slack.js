import axios from "axios";
// import md5 from "crypto-js";
import { submitOrder } from "./graphCMS";

// ! dev webhook
const webhookUrl =
  "https://hooks.slack.com/services/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";
// ! official webhook
// const webhookUrl ="https://hooks.slack.com/services/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";

export const submitForm = async (content) => {
  const { name, phone, message } = content;
  let date = new Date();
  let dateString = date.toLocaleDateString();
  let timeString = date.toLocaleTimeString();
  const data = {
    text: `\n>*New Booking* 
      -\` Name:  \` ${name} 
      -\` Email: \` ${phone} 
      -Message: ${message} 
      -:date: Booking Date: ${dateString} 
      -:clock1: Booking Time: ${timeString}`,
  };
  //* slack webhook
  let res = await axios.post(webhookUrl, JSON.stringify(data), {
    withCredentials: false,
    transformRequest: [
      (data, headers) => {
        delete headers.post["Content-Type"];
        return data;
      },
    ],
  });
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
