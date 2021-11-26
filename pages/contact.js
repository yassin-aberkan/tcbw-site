import Layout from "../components/layout";
import GoogleMaps from "../components/google-maps.js";
import SendMail from "../components/send-mail.js";
import Information from "../components/information.js";

export default function Contact() {
  return (
    <div className="">
      <Layout className="landingOther" page="Be Formation - Accueil">
        <div className="">
          <section className="text-gry-300 my-20">
            <div className="container flex flex-col items-center px-5 mx-auto md:flex-row lg:px-28">
              <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                <h2 className="mb-8 text-xs font-semibold tracking-widest text-gray-300 uppercase title-font">
                  {" "}
                  TCBW{" "}
                </h2>
                <h1 className="mb-8 text-2xl font-black tracking-tighter text-white md:text-5xl title-font uppercase">
                  {" "}
                  Nos Contacts{" "}
                </h1>
                <p className="mb-8 text-base leading-relaxed text-left text-gray-300 ">
                  {" "}
                  Voici tous nos contacts possible pour que vous puissiez nous contactez.{" "}
                </p>
                <Information></Information>
              </div>
              <div className="w-full lg:w-1/2 lg:max-w-lg md:w-1/2">
                <GoogleMaps className="rounded"></GoogleMaps>
              </div>
            </div>
          </section>
          
          <SendMail></SendMail>
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
  );
}
