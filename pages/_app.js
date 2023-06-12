import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/owl.css';
import CookieConsent from "react-cookie-consent";
import Transition from '../components/Transition';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Socials from '../components/Socials';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="container-fluid px-0">
      <Header />
      <Transition>
        <Component {...pageProps} />
        <Socials />
        <Footer />
      </Transition>
      <CookieConsent
        location="bottom"
        buttonText="Okay"
        buttonStyle={{ backgroundColor: "#232323", color: "white" }}
        style={{ backgroundColor: "#993300", zIndex: 9999, border: "3px groove #767676" }}
      >
        Cheeky Ginger Studios uses cookies to better the web experience for everyone. We have a strict privacy policy that prohibits us from selling user information to third party advertisers. Please see our privacy policy for more information.
      </CookieConsent>
    </div>
  )
}

export default MyApp;
