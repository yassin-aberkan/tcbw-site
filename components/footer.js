import Link from "next/link";
export default function footer({}) {
  return (
    <div className="text-center z-50">
      <div className=" footer-height flex justify-center px-4 text-gray-100 bg-black bg-opacity-75 ">
        <div className="container py-6">

        

          <div className="flex flex-col items-center justify-between  md:flex-row">
            <div>
              <a href="#" className="font-bold text-white">
                <span  className="text-xl">T.C. </span><span className="text-md">Bruxelles - Wallonie</span>
              </a>
            </div>
            <span className="text-gray-400">TCBW © 2021</span>
            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                <Link href="/">
                  <a href="#" className="px-4 text-sm text-white">
                    Accueil
                  </a>
                </Link>

                <Link href="/abi=uut">
                  <a className="px-4 text-sm text-white">
                  À propos
                  </a>
                </Link>

                <Link href="/contact">
                  <a className="px-4 text-sm text-white">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg {
          background-image: linear-gradient(to top, #000000, #0b0303, #130704, #180c02, #1a1100);
        }
      `}</style>
    </div>
  );
}
