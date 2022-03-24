import React from "react";
import { Nav, HeaderAnnouncement, Team } from "../components/";

const About = () => {
  const Tab = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;
  const Header = () => (
    <>
      <div className="fixed z-50 lg:hidden">
        <div className="   lg:hidden ">
          <HeaderAnnouncement />
        </div>
        <div className="  py-2 font-leagueSpartan  font-extrabold bg-gray-400 bg-opacity-40 backdrop-blur-md   text-4xl w-screen flex lg:hidden justify-center items-center ">
          60 Cars
        </div>
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        <div className="hidden lg:block">
          <HeaderAnnouncement />
        </div>

        <div className=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="about" />
        </div>
      </div>
    </>
  );
  return (
    <div className="overflow-x-clip">
      {/* nav */}
      {Header()}

      <div className="lg:px-0 mx-auto ">
        <div className="px-3 lg:px-20 pt-32 lg:pt-0  mx-auto w-full  relative">
          {/* landing section */}
          <div className="h-auto lg:h-90vh flex flex-col justify-between   py-6 lg:py-20 w-full relative">
            <div className="text-xl lg:text-8xl items-center flex justify-between font-bold w-fulllg:w-1/2 font-leagueSpartan ">
              <div className="w-1/2">About</div>
              <div
                className="w-32 h-32 rounded-md bg-cover bg-no-repeat bg-center lg:hidden"
                style={{
                  backgroundImage: `url("/images/about/car-transport.png")`,
                }}
              ></div>
            </div>

            <div className="flex justify-between w-full">
              <div className="lg:w-1/3  h-full  p-5">
                <div
                  className="w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/images/about/car-transport.png")`,
                  }}
                ></div>
              </div>
              <div className=" text-xs lg:text-xl self-end pl-5  lg:pl-0 w-full lg:w-3/5  right-0 bottom-20 text-justify my-6 py-10 border-t-2 border-black">
                {Tab()}60 Cars is a premier car rental company founded with a
                vision of becoming a leader in <b>Ground Transportation</b> for
                both personal and corporate travel. 60 Cars is backed by panel
                of experienced Industry experts who have collective experience
                of more than 20 years. The company had started operations with
                the fleet size of 60 cars in Bangalore and South Indian Region
                during December 2021.
                <br />
                <br />
                {Tab()}60 Cars has grown from strength to strength since the
                inception, and today the company operates a fleet of about 800+
                cars in Bangalore and South Indian Region servicing over 80
                corporate houses and many luxury hotels, recognized as one of
                the preferred car rental supplier.
              </div>
            </div>
          </div>
          {/* section 2 */}
          <div className=" h-auto lg:h-screen   flex flex-col justify-between py-6 lg:py-20 w-full relative">
            <div className=" justify-between flex items-center lg:block font-leagueSpartan text-xl lg:text-8xl font-bold w-full text-right ">
              <div
                className="w-32 h-32 rounded-md bg-cover bg-no-repeat bg-center lg:hidden"
                style={{
                  backgroundImage: `url("/images/about/key-exchange.jpg")`,
                }}
              ></div>
              <div className="w-1/2 lg:w-full">
                Why We Do <br />
                What We Do
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="my-6 text-xs pr-5 lg:pr-0 lg:text-xl w-full lg:w-3/5 self-start text-justify py-10 border-t-2 border-black">
                {Tab()}60 Cars has set up multiple car dispatching facilities in
                Bangalore and South Indian Region to reach the customer faster
                and in the process cut down idle time & mileage. In Bangalore
                and South Indian Region where 60 Cars services are available, it
                has set up 4 operating locations which are operational 24X7.
                <br />
                <br />
                {Tab()}60 Cars offer chauffeur driven car rental services to its
                customers across Bangalore and South Indian Region through its
                wide range of brand new fleet of cars. The fleet of cars
                includes entry level Economy cars, multi-utility vans, sedans
                and SUVs.
              </div>
              <div className="lg:w-1/3  h-full  p-5">
                <div
                  className="w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/images/about/key-exchange.jpg")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* section 3 :tech */}
          <div className="h-auto lg:h-screen flex flex-col justify-between py-6 lg:py-20 w-full relative">
            <div className="flex lg:block justify-between items-center font-leagueSpartan text-xl lg:text-8xl font-bold w-full my-3 lg:my-0 ">
              <div>Payments</div>
              <div
                className=" lg:hidden w-32 h-32 rounded-md bg-cover bg-no-repeat bg-left"
                style={{
                  backgroundImage: `url("/images/about/about-payments.jpg")`,
                }}
              ></div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="lg:w-1/3  h-full  p-5 my-6 ">
                <div
                  className="w-full h-full rounded-md bg-cover bg-no-repeat bg-left"
                  style={{
                    backgroundImage: `url("/images/about/about-payments.jpg")`,
                  }}
                ></div>
              </div>
              <div className="  text-xs pl-5 lg:pl-0 lg:text-xl w-full lg:w-3/5 self-end text-justify py-10 border-t-2 border-black">
                {Tab()}60 Cars accepts UPI and all the credit cards including
                Master, Visa , and American Express through its secured payment
                gateway. The invoicing process is 100% accurate with complete
                transparency on charges. 60 Cars offers special deals during
                weekend on chauffeur drive rentals.
                <br />
                <br />
                {Tab()}On the technology front, 60 Cars will soon launch mobile
                app for both customers and chauffeurs. The salient features of
                mobile app for the customers enables, ease of reservations,
                tracking of vehicles, data on route taken during the rental
                along with time & mileage details. At the stroke of the button
                customers can reserve, modify, cancel the reservations at their
                ease. The chauffeurs will be provided with the mobile app to cut
                down on idle time & mileage while reporting to the customers.
              </div>
            </div>
          </div>
          {/* section 4 : mission and vision */}
          <div className="h-auto lg:h-screen flex flex-col justify-between py-6 lg:py-20 w-full relative">
            <div className="text-xl lg:text-8xl flex lg:block items-center justify-between font-bold w-full text-right ">
              <div
                className="w-32 h-32 lg:hidden rounded-md bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url("/images/about/dart-target.jpg")`,
                }}
              ></div>
              <div className="lg:w-full">What We Beleive In</div>
            </div>
            <div className="flex justify-between">
              <div className="my-6 text-xs lg:text-xl w-full lg:w-3/5 pr-5  lg:pr-0 self-start text-justify py-10 border-t-2 border-black">
                {Tab()}60 Cars aims to expand its network to over 150+ cities in
                India by 2023-25 thus by investing on fleet, infrastructure and
                technology.
                <br />
                <br />
                {Tab()}We will establish ourselves as a leader in Ground
                Transportation Business, through wide network, state of art
                technology, strict quality assurance processes, highly motivated
                and experienced manpower, to achieve the larger market share,
                higher revenues, higher profitability and most reliable service
                delivery status thus creating value for our Customers,
                Shareholders and Employees.
              </div>
              <div className="lg:w-1/3  h-full  p-5">
                <div
                  className="w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/images/about/dart-target.jpg")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* south network */}
          <div className="h-auto lg:h-screen  flex flex-col justify-between py-6 lg:py-20 w-full relative">
            <div className="text-xl lg:text-8xl font-bold w-full lg:block flex items-center justify-between my-3 ">
              <div>Our Network</div>
              <div
                className="w-32 h-32 lg:hidden rounded-md bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url("/images/about/about-network.jpg")`,
                }}
              ></div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="lg:w-1/3  h-full  p-5 my-6 ">
                <div
                  className="w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/images/about/about-network.jpg")`,
                  }}
                ></div>
              </div>

              <div className="  text-xs pl-5 lg:pl-0 lg:text-xl w-full lg:w-3/5 self-end lg:my-8 text-justify py-10 border-t-2 border-black">
                <span className="font-bold">South Indian Region</span>
                <br />
                Bengaluru, Chennai, Hyderabad, Cochin, Coimbatore, Vizag,
                Kakinada, Vellore, Puducherry, Thanjavur, Thiruchirapalli,
                Tirunelveli, Madurai, Gulbarga, Belgaum, Hubli, Hospet,
                Davangere, Dharwad, Trivandrum, Kasaragod, Salem, Mangalore,
                Mysore, Tuti corin, Hosur, Vijayawada, Tirupathi and Karimnagar.
                <br />
                <div className="w-full flex flex-col lg:flex-row  lg:justify-between lg:items-center">
                  <div className="mt-2">
                    <span className="font-bold">Nort Indian Region</span>
                    <br />
                    Delhi
                  </div>

                  <div className="mt-2">
                    <span className="font-bold">East Indian Region</span>
                    <br />
                    Kolkata
                  </div>
                  <div className="mt-2">
                    <span className="font-bold">West Indian Region</span>
                    <br />
                    Mumbai , pune
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* head offices */}
          <div className="h-auto lg:h-80vh  flex flex-col justify-between py-6  w-full relative">
            <div className="text-xl lg:text-8xl font-bold w-full text-right flex lg:block items-center justify-between  ">
              <div
                className="w-32 h-32 lg:hidden rounded-md bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url("/images/about/about-location.jpg")`,
                }}
              ></div>
              <div className="lg:w-full"> Our Head Offices</div>
            </div>
            <div className="flex justify-between">
              <div className="my-6 text-xs lg:text-xl w-full lg:w-3/5 pr-5  lg:pr-0 self-start text-justify py-10 border-t-2 border-black">
                <span className="font-bold font-leagueSpartan mr-2">1 </span>
                YESH 60 CARS Private Limited, 22 Bagaluru Cross, Near BSF, Uday
                Nagar, Yelahanka, Bangalore (N), Karnataka - 560064, India
                <br />
                <br />
                <span className="font-bold font-leagueSpartan mr-2">2 </span>
                #940/103/1612, Marutinagar,Kogilu Main Road,Opp. indian Oil
                Petrol Bunk, Yelehanka, Bengaluru -560064
                <br />
                <br />
                <a
                  href="#940/103/1612, Marutinagar,Kogilu Main Road,Opp. indian Oil
                Petrol Bunk, Yelehanka, Bengaluru -560064"
                  target="_blank"
                  noopener="true"
                  rel="noopener noreferrer"
                  className="font-bold font-leagueSpartan mr-2"
                >
                  3
                </a>
                Chikkanahalli, Begur Airport road (kempegowda international
                airport,BLR)
              </div>
              <div className="lg:w-1/3  h-full  p-5">
                <div
                  className="w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/images/about/about-location.jpg")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        {/* team section */}
        <div className="px-3 lg:px-20 pb-20 lg:pb-0 mx-auto w-full  relative bg-gray-800">
          <Team />
        </div>

        {/* <div className="bg-black">
          <Contact />
        </div> */}
      </div>
    </div>
  );
};

export default About;
