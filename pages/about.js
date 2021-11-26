import Layout from "../components/layout";
import Description from "../components/description";


export default function About() {
  return (
    <div className="">
      <Layout className="landingOther" page="Be Formation - Accueil">
        <div className="">
          <div className="">
          <section className="text-gry-300 my-20">
    <div className="container flex flex-col items-center px-5 mx-auto md:flex-row lg:px-28">
        <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-gray-300 uppercase title-font"> TCBW </h2>
            <h1 className="mb-8 text-2xl font-black tracking-tighter text-white md:text-5xl title-font uppercase"> À propos de nous ... </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-300 "> Chez TC-BW, nous mettons à votr disposition notre expérience, notre savoir-faire et notre professionnalisme. </p>
            
        </div>
        <div className="w-full lg:w-1/2 lg:max-w-lg md:w-1/2">
            <img className="object-cover object-center rounded-lg " alt="hero" src="/images/tcbw_wp.jpg"></img>
        </div>
    </div>
</section>
           
          </div>
          <div className="color-bg-noir px-1"><Description></Description></div>
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
