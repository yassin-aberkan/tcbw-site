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
  ];

  return (
    <div className="pt-10 color-bg-mid">
<span className="sm:text-5xl text-4xl font-extrabold text-gray-100 text-center">Voyez par vous-même !</span>
    <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={4000} swipeable={false}>
    {infos.map((info) => (
            <div key={info.name} className="pt-2">
              <img
                className="image mt-2 md:mt-10"
                src={info.image}
                alt={info.image + "image"}
              />
            </div>
        ))}
        </Carousel>

      <style jsx>{`
        .image {
          height: 80vh;
          object-fit: contain;
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