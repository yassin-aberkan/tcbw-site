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
    <div className="fire-bg">
      <Layout className="landingOther" page="TCBW - Accueil">
        <div className="">
        <div className="lg:mx-12 md:mt-12 sm:mb-10 lg:mb-12">
        <div className="container mx-auto lg:flex lg:flex-row">
          <div className="my-20 md:text-left basis-1/2 w-11/12 md:mr-12">
            <h2 className="tracking-tight text-white ml-2">
              <span className="block text-5xl sm:text-6xl mb-2 font-bold text-yellow-500">Chauffagiste</span>
              <span className="block text-5xl sm:text-6xl mb-2 font-bold text-yellow-500">Plomberie</span>
              <span className="block text-gray-300 text-md sm:text-lg font-light mt-4">TC BW, c’est une équipe de techniciens diplômés et spécialisés en plomberie-chauffage.</span>
            </h2>
            <div className="mt-6">
              <div className="inline-flex rounded-md shadow transform hover:scale-110 duration-300">
                <a
                  href="#contact_section"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-600"
                >
                  Contactez-Nous
                </a>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow transform hover:scale-110 duration-300">
                <a
                  href="#service_section"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-indigo-50"
                >
                  Information
                </a>
              </div>
            </div>
          </div>
          <Carousel className="basis-1/2"></Carousel>
        </div>
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
