import React from "react";

const Brands = () => {
  const bransd = [
    {
      name: "Audi",
      image: "/images/carBrands/audi.png",
    },
    {
      name: "BMW",
      image: "/images/carBrands/bmw.png",
    },
    {
      name: "Mercedes",
      image: "/images/carBrands/mercedes.png",
    },
    {
      name: "Toyota",
      image: "/images/carBrands/toyota.png",
    },
    {
      name: "Suzuki",
      image: "/images/carBrands/suzuki.png",
    },
    {
      name: "KIA",
      image: "/images/carBrands/kia.png",
    },
    {
      name: "Honda",
      image: "/images/carBrands/honda.png",
    },
    {
      name: "Nissan",
      image: "/images/carBrands/nissan.png",
    },
  ];

  return (
    <div className="hidden  lg:flex lg:items-center justify-center w-full mt-10 lg:my-8  ">
      {bransd.map((brand) => {
        return (
          <div
            key={brand.name}
            id={brand.name}
            className=" h-10 lg:h-16 my-2 lg:my-0  w-10 lg:w-16 px-10 py-5 lg:px-20 lg:py-8  bg-contain bg-center bg-no-repeat col-span-1"
            style={{ backgroundImage: `url('${brand.image}')` }}
          />
        );
      })}
    </div>
  );
};

export default Brands;
