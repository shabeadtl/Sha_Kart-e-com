import Head from "next/head";
import './style.css'
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer"
export default function MyApp({ Component, pageProps, router }) {
  const route = router.pathname;

  const pageTitles = {
    "/about": "About | Sha_Kart",
    "/contact": "Contact | Sha_Kart",
  };

  return (
    <>
      <Head>
        <title>{pageTitles[route] || "Sha_Kart"}</title>
      </Head>
      <Navbar/>  
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
