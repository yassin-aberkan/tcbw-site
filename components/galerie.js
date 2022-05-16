import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
      <span className="sm:text-5xl text-3xl font-extrabold text-gray-100 text-center">
        Voyez par vous-même !
      </span>

      <section className="overflow-hidden text-gray-700 ">
  <div className="container px-5 py-2 mx-auto pt-8 lg:pt-12 lg:px-32 pb-8 lg:pb-12">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2 md:w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={infos[0].image}></img>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 md:w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={infos[1].image}></img>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 md:w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={infos[2].image}></img>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 md:w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={infos[3].image}></img>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2 md:w-1/3">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src={infos[4].image}></img>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        swipeable={false}
      >
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
      `}</style> */}
    </div>
  );
}
