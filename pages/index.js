import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import HomeSlider from "../components/HomeSlider";
import axios from "axios";

const Home = () => {
  const [field, setField] = useState();
  const [sections, setSections] = useState([]);

  const router = useRouter();
  const { status } = router.query;

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://backend.cheekygingerstudios.com/public/api/home-sections'
    })
    .then(result => {
      setSections(result.data.data)
    })
    .catch(error => console.log(error));
    axios({
      method: 'get',
      url: 'https://backend.cheekygingerstudios.com/public/api/home-fields'
    })
    .then(result => {
      setField(result.data.data[0].description)
    })
    .catch(error => console.log(error))
  }, []);

  return (
    <>
      <Head>
        <title>Cheeky Ginger Studios - One of a Kind Homemade Printed Art</title>
        <meta name="title" content="Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
        <meta name="description" content="Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cheekygingerstudios.com/" />
        <meta property="og:title" content="Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
        <meta property="og:description" content="Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings." />
        <meta property="og:image" content="https://cheekygingerstudios.com/img/Kiss-1-Cheeky-Ginger-Studio.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cheekygingerstudios.com/" />
        <meta property="twitter:title" content="Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
        <meta property="twitter:description" content="Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings." />
        <meta property="twitter:image" content="https://cheekygingerstudios.com/img/Kiss-1-Cheeky-Ginger-Studio.png" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L5WHL6DG61"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L5WHL6DG61', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <div className="row mx-0">
        {status && status === 'success' && (
          <div className='bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700'>
            Payment Successful
          </div>
        )}
        {status && status === 'cancel' && (
          <div className='bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700'>
            Payment Unsuccessful
          </div>
        )}
        <div className="col px-0">
          <HomeSlider />
          <div className="container shadow p-3 my-5 bg-body rounded">
            <div className="row mx-0">
              <div dangerouslySetInnerHTML={{__html: field}} className="col px-0 py-3 text-black" />
            </div>
            <div className="row mx-0 justify-content-center">
              {sections.map(i => (
                <div className="col-md-3 col-sm-12 p-2 m-2 text-center" key={i.id}>
                  <h2 className="text-primary">{i.title}</h2>
                  <h6 className="text-secondary">{i.description}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
