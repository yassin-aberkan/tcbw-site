// component next
import Head from "next/head";
import Navigation from "./navigation";
import MyFooter from "./footer";

export default function Layout({ children, page }) {
  return (
    <div className=" text-center">
      <Head>
        <title>{page}</title>
        <link rel="icon" href="/images/icon-tcbw.png" />
      </Head>

      <div className="z-50 w-full container-lg space-y-10">
        <Navigation></Navigation>
      </div>

      <main className="">
      <div >{children}</div>
      
      </main>

      <footer className=""><MyFooter ></MyFooter></footer>
    </div>
  );
}
