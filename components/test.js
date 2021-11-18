import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function galerie({}) {
  const infos = [
    {
      name: "01",
      image: "/images/galerie/01.jpg",
    },
    {
      name: "02",
      image: "/images/galerie/02.jpg",
    },
    {
      name: "03",
      image: "/images/galerie/03.jpg",
    },
    {
      name: "04",
      image: "/images/galerie/04.jpg",
    },
    {
      name: "05",
      image: "/images/galerie/05.jpg",
    },
    {
      name: "06",
      image: "/images/galerie/06.jpg",
    },
  ];

  return (
    <div className="">
    <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={4000}>
    {infos.map((info) => (
            <div key={info.name} className="pt-2">
              <img
                className="image sm:rounded-2xl"
                src={info.image}
                alt={info.image + "image"}
              />
            </div>
        ))}
        </Carousel>

      <style jsx>{`
        .image {
          height: 50vh;
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