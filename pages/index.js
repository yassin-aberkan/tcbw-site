import Layout from "../components/layout";
import Carousel from "../components/carousel";
import Services from "../components/services";
import Galerie from "../components/galerie";
import SendMail from "../components/send-mail";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
  return (
    <div className="">
      <Layout className="landingOther" page="TCBW - Accueil">
        <div className="">
        <div className="lg:flex lg:justify-between md:mx-20 md:mt-10 md:mb-10 lg:mb-16">
        <div className="">
        <div className="max-w-7xl py-50 lg:py-40 text-left lg:items-center lg:justify-between min-w-100 md:mx-0 mx-5 mb-10 lg:mb-0 mt-10 sm:mt-0 widths">
        <h2 className="text-3xl font-extrabold font-semibold tracking-tight text-white ml-2">
          <span className="block sm:text-5xl mb-2">TCBW</span>
          <span className="block text-yellow-500 sm:text-4xl">Votre comfort, Notre priorité</span>
        </h2>
        <div className=" flex lg:mt-0 lg:flex-shrink-0 pt-5">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#contact_section"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-600"
            >
              Contactez-Nous
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#service_section"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-indigo-50"
            >
              Information
            </a>
          </div>
        </div>
      </div>
        </div>
        <Carousel className=""></Carousel>
        </div>
        <div className="color-bg-noir px-1">
        <Services></Services>
        <Galerie></Galerie>
        <SendMail></SendMail>
        </div>
        
        </div>
      </Layout>
      <style jsx>{`
      @media only screen and (min-width: 600px) {
        .widths {
          width: 600px;
        }
      }
     
        
      `}</style>
    </div>
  )
}
