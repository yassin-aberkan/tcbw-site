import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function carousel({}) {
  const infos = [
    {
      name: "Chauffagiste",
      description:
        "Installation & réparation de chaudières, de circuits de chauffages, boilers, convecteurs, poêles à pellet. Installations, rénovations et mise aux normes.",
      image: "/images/chauffage.jpg",
    },
    {
      name: "Plomberie",
      description:
        "Intallations & remplacement de robinetteries, WC, douches standards, douches à l’italiennes, baignoires. Débouchages et réparations des fuites d’eau.",
      image: "/images/plomberie.jpg",
    },
    {
      name: "Dépannage",
      description:
        "TCBW vous dépanne dans des cas d’urgence les plus extrêmes. Vous êtes en panne à l’instant? Appelez-nous en urgence au 0485 777 809",
      image: "/images/depannage.jpg",
    },
  ];

  return (
    <div className="">
    <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={6000}>
    {infos.map((info) => (
            <div key={info.name} className="pt-2">
              <img
                className="image sm:rounded-2xl"
                src={info.image}
                alt={info.image + "image"}
              />
              <div className="centered">
                <h3 className="text-2xl  leading-8 font-extrabold text-white uppercase lg:text-3xl">{info.name}</h3>
                <p className="text-sm  text-white mt-2">
                {info.description}
                </p>
              </div>
            </div>
        ))}
        </Carousel>

      <style jsx>{`
        .image {
          height: 500px;
          object-fit: cover;
          filter: brightness(70%);
        }

        .centered {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
}
