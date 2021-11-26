import {
  FaToolbox,
  FaWrench,
  FaFaucet,
  FaBroom,
  FaFire
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function services() {
  
    const infos = [
      {
        name: "Chaudière",
        description:
          "Nous installons ou remplaçons vos anciennes chaudières par des nouvelles. De même, nous opérons les changements de système mazout vers des systèmes de chaudière à gaz.",
        image: FaFire,
      },
      {
        name: "Dépannage",
        description:
          "Chez TCBW, nous avons en permanence des techniciens alloués au dépannage d'urgence. Lorsque vous appelez notre centrale téléphonique, vous recevez immédiatement un temps d'intervention.",
        image: FaToolbox,
      },
      {
          name: "Entretien",
          description:
            "TCBW c'est la tranquillité d'esprit ! Grâce à nos contrats de maintenance et nos entretiens périodiques, vos appareils restent en bonne santé.",
          image: FaWrench,
        },

        {
          name: "Douches / WC ",
          description:
            "Chez TCBW, nous donnons une attention particulière à vos pièces d'eau: remplacement des WC (suspendus ou standards), installations de douches et adaptation des sorties d'appareils électroménagers.",
          image: FaFaucet,
        },

        {
          name: "Rénovations",
          description:
            "Installation ou rénovation d'anciennes tuyauterie de gaz et d'eau. Remplacement des décharges en plomb. Nouvelles constructions.",
          image: FaBroom,
        },

    ];

    useEffect(() => {
      Aos.init({duration:2000});
    }, []);
  
    return (
      <div id="service_section" className="">
        <section className="pt-10">
          <div className="max-w-5xl mx-auto">
            <div className="">
              <h2 className="sm:text-5xl text-4xl font-extrabold text-gray-100 text-center">
              Nos Services

              </h2>
            </div>
            <div className="grid gap-6 mt-10 md:grid-cols-3 lg:grid-cols-{{in}} mb-24 justify-center">
            {infos.map((info) => (
              
              <div key={info.name} data-aos="fade-up"  className="px-6 py-8 overflow-hidden color-bg-gris rounded-md shadow-md">
              
                <h2 className="text-xl font-medium text-white flex justify-center space-x-3">
                <info.image
                className="flex-shrink-0 h-6 w-6 text-whitehover:text-gray-300"
                aria-hidden="true"></info.image>
                <span>{info.name}</span></h2>
                <p className="max-w-md mt-4 text-gray-300">
                  {info.description}
                </p>
              </div>
            ))}
            </div>
          </div>
        </section>
  
        <style jsx>{``}</style>
      </div>
    );
  }
  