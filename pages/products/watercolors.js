/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import axios from "axios";
import Link from 'next/link';
import SearchBox from '../../components/SearchBox';

const Watercolors = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://backend.cheekygingerstudios.com/public/api/products'
        })
        .then(result => {
            setProducts(result.data.data.filter(i => i.category === 'watercolors'))
        })
        .catch(error => console.log(error))
    }, [])

    const filteredProducts = products.filter((product) => {
        return product.title.toLocaleLowerCase().includes(search);
    });

    return (
        <>
            <Head>
                <title>Watercolors - Cheeky Ginger Studios - One of a Kind Homemade Printed Art</title>
                <meta name="title" content="Watercolors - Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
                <meta name="description" content="Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings." />
                <meta name="robots" content="all" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cheekygingerstudios.com/products/watercolors" />
                <meta property="og:title" content="Watercolors - Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
                <meta property="og:description" content="Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings." />
                <meta property="og:image" content="https://cheekygingerstudios.com/img/Kiss-1-Cheeky-Ginger-Studio.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://cheekygingerstudios.com/products/watercolors" />
                <meta property="twitter:title" content="Watercolors - Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
                <meta property="twitter:description" content="Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings." />
                <meta property="twitter:image" content="https://cheekygingerstudios.com/img/Kiss-1-Cheeky-Ginger-Studio.png" />
                <link rel="icon" href="favicon.ico" />
                <link rel="manifest" href="manifest.json" />
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
                    <h1 className="display-2 text-center text-black">Watercolors</h1>
                    <div className="container shadow p-3 my-5 bg-body rounded">
                        <div className="row my-2 mx-5 px-5 justify-content-center">
                            <div className="col-12 mx-md-5 px-md-5 mx-sm-0 px-sm-0">
                                <SearchBox category="Watercolors" searchChange={setSearch} />
                            </div>
                        </div>
                        <div className="row mx-0 justify-content-center">
                            {filteredProducts.map(i => (
                                <div className="col-md-4 col-sm-12 my-2" key={i.id}>
                                    <div className="card">
                                        {i.pictures.length > 0 && (
                                            <img src={i.pictures[0].url} className="card-img-top" alt={i.title} />
                                        )}
                                        <div className="card-body">
                                            <h5 className="card-title text-black">{i.title}</h5>
                                            <p className="card-text text-black">{i.description}</p>
                                            <Link href={`/products/${i.id}`}>
                                                <button className="btn btn-primary">See Product</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Watercolors;