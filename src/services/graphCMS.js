import { gql, GraphQLClient } from "graphql-request";

const graphqlAPI =
  "https://api-ap-south-1.graphcms.com/v2/ckzwt60u23vph01zagmbr4c5x/master";
const graphCMSToken =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDU1NTEwNjcsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmdyYXBoY21zLmNvbS92Mi9ja3p3dDYwdTIzdnBoMDF6YWdtYnI0YzV4L21hc3RlciIsImh0dHBzOi8vbWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQuZ3JhcGhjbXMuY29tLyIsInN1YiI6ImU1ODZkYzQ1LWYxMmYtNGYyMS1hNTE3LWNjNDU5N2Y4NGYyMyIsImp0aSI6ImNrenllbWE0YjV3eTEwMXlzNnJ0eDVtZ2UifQ.sg-OW71Mj_uHWZKQvHZK8do8PIuA77TE3I8MmQB0LwsR8XmcrgmpmQEo3c1oTzJfvU59gzhnSCj5rfjcznC-etWY1V3JaoIa9orlTZ6cVFkY4E31lBVqJBtEGMuqpd3MCkPgt4f88oX4w7PEZJcSyk1m78M2XD1SJcaFQ8Os-m64pRqhhqZ7qExTmxqbquw9UnnpyKVMOxWkGX37wO5jmGCkM9lcUi1et3UworKGYIRwA9lNp19K1jfTOpD-kMQ8zlQldBRl_0wdXU4BjXuO_VTwQxZLnf9r7VR-aMMJRC8bEWsyDNVlkL1a-qvOEg3ysxV0r8w_Czuh3Svxw0KfuWuqtc_Quyz9Decv4QT0dAr6ESbSEM5q3XiAuR0tbiynQFQaTZNptydfRBQETJSo2D5GJyqY_VSAvHYLeDCwNtuEv-QX4etkUmf_RulY58rnTCnayXBM-6eAXl3dGvQ1MiemUX0TuIojQ69oZYlaXTM_c32SNLMhiSi6nTY3mVISBhSmz499cAQcddMp8JxLGAJmIreGvxCZlr4BziNx2NT2Rqg1DlGV10O6U-LsCxgeo8bYy_OTNnqkVJ7hGipJvthKvC8p_PzFZmTMTeom9kbVPl78JmnK2VZILPwaQzabSlbIE-gseG6O5LYlwLjdloFEBp6eWpA6v43_lxQj5G8";

// export const getOrders = async () => {
//   const query = gql`
//     query getOrders{
//     }
//     `;
// };

export const submitOrder = async (orderDetails) => {
  const graphQLCLient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphCMSToken}`,
    },
  });
  const query = gql`
    mutation MyMutation(
      $orderId: Int!
      $pickup: String!
      $drop: String!
      $when: String!
      $departTime: String!
      $departDate: String!
      $pickupCoordinates: String!
      $dropCoordinates: String!
      $phoneNumber: String!
    ) {
      createBooking(
        data: {
          orderId: $orderId
          pickup: $pickup
          drop: $drop
          when: $when
          pickupCoordinates: $pickupCoordinates
          dropCoordinates: $dropCoordinates
          departDate: $departDate
          departTime: $departTime
          phoneNumber: $phoneNumber
        }
      ) {
        id
      }
    }
  `;
  const publishQuery = gql`
    mutation MyMutation($orderId: Int!) {
      publishBooking(where: { orderId: $orderId }) {
        departDate
        departTime
        drop
        dropCoordinates
        orderId
        pickup
        pickupCoordinates
        phoneNumber
        when
      }
    }
  `;
  //   const result = await graphQLCLient.request(query, orderDetails);
  //   return result;
  try {
    const result = await graphQLCLient.request(query, orderDetails);
    // setTimeout(() => {
    //   const pubRes = graphQLCLient.request(publishQuery, orderDetails);
    //   console.log("publishing");
    // }, 100);
    //   return res.status(200).send(result);
  } catch (err) {
    console.log({ err });
    try {
      const pubRes = graphQLCLient.request(publishQuery, orderDetails);
    } catch (err) {
      console.log(err);
    }

    //   return res.status(500).send(err);
  }
};
