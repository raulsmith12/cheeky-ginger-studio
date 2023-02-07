import { useEffect } from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/owl.css';
import Transition from '../components/Transition';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Socials from '../components/Socials';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>Cheeky Ginger Studio</title>
        <meta name="description" content="Custom prints for your art decor" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="container-fluid px-0">
        <Header />
        <Transition>
          <Component {...pageProps} />
          <Socials />
          <Footer />
        </Transition>
        <div className="alert alert-success alert-dismissible fade show fixed-bottom" role="alert">
          <p>Cheeky Ginger Studio uses cookies to better the web experience for everyone. We have a strict privacy policy that prohibits us from selling user information to third party advertisers.</p>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
        </div>
      </div>
    </>
  )
}

export default MyApp;
