import React, { useState, useEffect } from "react";
// import Script from "react-load-script";
import axios from "axios";

const apiKey = "553b89f8b0fa4d209a2641bc8afb2cda";
const SearchSuggestions = () => {
  const [location, setLocation] = useState("");
  const [SearchResults, setSearchResults] = useState([]);
  let apiurl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&filter=countrycode:in&bias=rect:73.80570861581259,12.752096535565045,80.00854776441497,16.139057832106985|countrycode:none&format=json&apiKey=553b89f8b0fa4d209a2641bc8afb2cda`;
  useEffect(() => {
    var config = {
      method: "get",
      url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=553b89f8b0fa4d209a2641bc8afb2cda`,
      headers: {},
    };

    if (location.trim() !== "") {
      axios(config)
        .then(function (response) {
          setSearchResults(response.data.features);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setSearchResults([]);
    }
  }, [location]);

  return (
    <div className="w-1/2 container mx-auto mt-5">
      {/* <Script
        url="https://maps.googleapis.com/maps/api/js?                               key=your_api_key&libraries=places"
         onLoad={handleScriptLoad}
      /> */}
      <form className=" shadow-md shadow-white rounded px-8 pt-6 pb-8 mb-4 self-center">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="location"
        >
          Location
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Location"
        />
        <button className="mt-4 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
          Search
        </button>
        <div className="mx-auto text-center">{}</div>
      </form>
      <div className="text-white">
        {SearchResults.length > 0 ? (
          SearchResults.map((result) => {
            let res = result.properties;
            if (res.state_code == "KA")
              return (
                <div>
                  <div className="flex  space-around">
                    <h1>{res.name}</h1>
                    <h2 className="mx-1"> | {res.address_line2}</h2>
                  </div>
                </div>
              );
          })
        ) : (
          <div className="text-white">No such place found!</div>
        )}
      </div>
    </div>
  );
};

export default SearchSuggestions;
