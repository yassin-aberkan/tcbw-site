import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from 'next/router';
import {
  FaFacebookSquare,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const router = useRouter();
  return (
    <Popover className="w-full z-10">
      <div className="max-w-9xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 items-center space-x-5">
            <a href="#">
            <span className="sr-only">Workflow</span>
            <div className="text-base font-medium text-white hover:text-white">
            <span  className="text-xl">TC </span><span className="text-md">Bruxelles - Wallonie</span>
              </div>
            </a>
              
          </div>
          <div className="-mr-2 -my-2 md:hidden 2xl:visible">
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Link href="/">
              <a className={`text-base font-medium ${router.pathname == "/" ? "text-white" : "text-gray-500"} hover:text-white`}>
                Accueil
              </a>
            </Link>
            <Link href="/about">
              <a className={`text-base font-medium ${router.pathname == "/about" ? "text-white" : "text-gray-500"} hover:text-white`}>
                À propos
              </a>
            </Link>
            
            <Link href="/contact">
              <a className={`text-base font-medium  ${router.pathname == "/contact" ? "text-white" : "text-gray-500"} hover:text-white`}>
                Contact
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden md:flex items-center space-x-5 justify-end md:flex-1 lg:w-0">
            <a
              href="tel:+32485777809"
              className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300"
              target="_blank" rel="noopener noreferrer"
            >
              +32 485 777 809
            </a>
            <a
              href="mailto:asblbeformation@gmail.com"
              className="whitespace-nowrap text-base font-medium text-white hover:text-gray-300"
            >
              <FaEnvelope
                className="flex-shrink-0 h-6 w-7 text-white hover:text-gray-300"
                aria-hidden="true"
              ></FaEnvelope>
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>

                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900 no-underline">
                    Accueil
                  </a>
                </Link>
                <Link href="/a-propos">
                <a
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  À propos
                </a>
                </Link>
                <Link href="/contact">
                  <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
