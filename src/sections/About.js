import React from "react";
import { Nav, HeaderAnnouncement, Team } from "../components/";

const About = () => {
  const Tab = () => <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>;
  return (
    <div className="overflow-x-clip">
      {/* nav */}
      <div class="py-4 font-extrabold bg-white text-4xl w-screen flex lg:hidden justify-center items-center ">
        60 Cars
      </div>
      <div className="fixed bottom-0 lg:sticky  lg:top-0 z-10">
        <HeaderAnnouncement />
        <div class=" mx-auto bg-white lg:bg-opacity-50 lg:backdrop-blur-sm w-full">
          <Nav current="about" />
        </div>
      </div>

      <div class="lg:px-0 mx-auto ">
        <div class="px-3 lg:px-20 mx-auto w-full  relative">
          {/* landing section */}
          <div class="h-auto lg:h-90vh flex flex-col justify-between   py-6 lg:py-20 w-full relative">
            <div class="text-xl lg:text-9xl font-bold w-1/2 font-leagueSpartan ">
              About Us
            </div>

            <div class="flex justify-between w-full">
              <div class="lg:w-1/3  h-full  p-5">
                <div
                  class="w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
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
          <div class=" h-auto lg:h-screen   flex flex-col justify-between py-6 lg:py-20 w-full relative">
            <div class=" font-leagueSpartan text-xl lg:text-9xl font-bold w-full text-right ">
              Why We Do <br />
              What We Do
            </div>
            <div class="flex justify-between w-full">
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
              <div class="lg:w-1/3  h-full  p-5">
                <div
                  class="w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/images/about/key-exchange.jpg")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* section 3 :tech */}
          <div class="h-auto lg:h-screen flex flex-col justify-between py-6 lg:py-20 w-full relative">
            <div class=" font-leagueSpartan text-xl lg:text-9xl font-bold w-full ">
              Payments
            </div>
            <div class="w-full flex items-center justify-between">
              <div class="lg:w-1/3  h-full  p-5 my-6 ">
                <div
                  class="w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/images/about/keyboard.jpg")`,
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
          <div class="h-auto lg:h-screen flex flex-col justify-between py-6 lg:py-20 w-full relative">
            <div class="text-xl lg:text-9xl font-bold w-full text-right ">
              What We Beleive In
            </div>
            <div class="flex justify-between">
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
              <div class="lg:w-1/3  h-full  p-5">
                <div
                  class="w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/images/about/dart-target.jpg")`,
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* south network */}
          <div class="h-auto  flex flex-col justify-between py-6 lg:py-20 w-full relative">
            <div class="text-xl lg:text-9xl font-bold w-full ">Our Network</div>
            <div class="w-full flex items-center justify-between">
              <div class="lg:w-1/3  h-full  p-5 my-6 ">
                <div
                  class="w-full h-full rounded-md bg-cover bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url("/images/about/keyboard.jpg")`,
                  }}
                ></div>
              </div>

              <div className="  text-xs pl-5 lg:pl-0 lg:text-xl w-full lg:w-3/5 self-end lg:my-8 text-justify py-10 border-t-2 border-black">
                <span class="font-bold">South Indian Region</span>
                <br />
                <br />
                Bengaluru, Chennai, Hyderabad, Cochin, Coimbatore, Vizag,
                Kakinada, Vellore, Puducherry, Thanjavur, Thiruchirapalli,
                Tirunelveli, Madurai, Gulbarga, Belgaum, Hubli, Hospet,
                Davangere, Dharwad, Trivandrum, Kasaragod, Salem, Mangalore,
                Mysore, Tuti corin, Hosur, Vijayawada, Tirupathi and Karimnagar.
              </div>
            </div>
          </div>
        </div>
        {/* team section */}
        <div class="bg-black">
          <Team />
        </div>
      </div>
    </div>
  );
};

export default About;
