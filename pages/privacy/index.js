import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import axios from "axios";

const Privacy = () => {
    const [content, setContent] = useState();

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://backend.cheekygingerstudios.com/public/api/privacy-pages'
        })
        .then(result => {
            setContent(result.data.data[0].text)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <Head>
                <title>Privacy Policy - Cheeky Ginger Studios - One of a Kind Homemade Printed Art</title>
                <meta name="title" content="Privacy Policy - Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
                <meta name="description" content="Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings." />
                <meta name="robots" content="all" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cheekygingerstudios.com/privacy/" />
                <meta property="og:title" content="Privacy Policy - Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
                <meta property="og:description" content="Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings." />
                <meta property="og:image" content="https://cheekygingerstudios.com/img/Kiss-1-Cheeky-Ginger-Studio.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://cheekygingerstudios.com/privacy/" />
                <meta property="twitter:title" content="Privacy Policy - Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
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
                <div className="col px-0">
                    <h1 className="display-2 text-center text-black">Privacy Policy</h1>
                    <div className="container shadow p-3 my-5 bg-body rounded">
                        <div className="row mx-0">
                            <div className="col px-0 text-black" dangerouslySetInnerHTML={{__html: content}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Privacy;