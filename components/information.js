import {
    FaMapMarkedAlt,
    FaPhoneAlt,
    FaEnvelope,
  } from "react-icons/fa";

export default function information({}) {
    const infos = [
      {
        name: "Appel",
        description:
          "+32 485 777 809",
        image: FaPhoneAlt,
      },
      {
        name: "Mail",
        description:
          "infos@tcbw.be",
        image: FaEnvelope,
      },
      {
          name: "Localisation",
          description:
            "Terhulpensesteenweg 310, 3090 Overijse",
          image: FaMapMarkedAlt,
        },

    ];
  
    return (
      <div id="service_section" className="">
        <section className="">
          <div className="max-w-5xl mx-auto">

            <div className="pt-4 md:grid-cols-3 lg:grid-cols-{{in}} pb-10 justify-center ">
            {infos.map((info) => (
              
              <div key={info.name}  className="px-6 py-3 mb-3 overflow-hidden blur-bg rounded-md shadow-md">
                <h2 className=" font-medium text-white flex space-x-3 justify-start">
                <info.image
                className="flex-shrink-0 h-6 w-6 text-whitehover:text-gray-300"
                aria-hidden="true"></info.image>
                <span className="">{info.name}</span>
                <p className="max-w-md text-gray-300 text-xs md:text-base md:mt-0 mt-1">
                  {info.description}
                </p>
                </h2>
                
                
              </div>
            ))}
            </div>
          </div>
        </section>
  
        <style jsx>{``}</style>
      </div>
    );
  }
  