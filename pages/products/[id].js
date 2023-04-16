import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PayPalId } from '../../components/PayPalId';
import PayPalButtonContainer from '../../components/PayPalButtonContainer';

const Product = () => {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    const router = useRouter();
    const { id } = router.query;
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [pictures, setPictures] = useState([]);
    const [prints, setPrints] = useState([]);
    const [tags, setTags] = useState([]);
    const [price, setPrice] = useState();
    const [sku, setSku] = useState();
    const [size, setSize] = useState();
    const [mainPic, setMainPic] = useState();
    const [sizes, setSizes] = useState([]);
    const [print, setPrint] = useState('');

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://backend.cheekygingerstudios.com/public/api/products/${id}`
        })
        .then(result => {
            setTitle(result.data.data.title),
            setDescription(result.data.data.description),
            setPictures(result.data.data.pictures),
            setPrints(result.data.data.prints),
            setTags(result.data.data.tags),
            setMainPic(result.data.data.pictures[0].url)
        })
        .catch(error => console.log(error))
    }, [])

    const changePrints = e => {
        if (e.target.value !== 'Please select a print') {
            axios({
                method: 'GET',
                url: `https://backend.cheekygingerstudios.com/public/api/products/prints/${e.target.value}`
            })
            .then(result => {
                setSizes(result.data.data.sizes),
                setPrint(e.target.value);
                setPrice()
            })
            .catch(error => console.log(error))
        }
    }

    const changeSize = e => {
        if (e.target.value !== 'Please select a size') {
            axios({
                method: 'GET',
                url: `https://backend.cheekygingerstudios.com/public/api/products/sizes/${e.target.value}`
            })
            .then(result => {
                setPrice(result.data.data.price),
                setSku(result.data.data.sku),
                setSize(result.data.data.print_size)
            })
            .catch(error => console.log(error))
        }
    }

    const createCheckOutSession = async () => {
        const stripe = await stripePromise;
        const checkoutSession = await axios.post('/api/create-stripe-session', {
          item: {
            picture: mainPic,
            price: Math.ceil(price * 100),
            title: sku + ' - ' + title + ' / ' + size,
          }
        });
        const result = await stripe.redirectToCheckout({
          sessionId: checkoutSession.data.id,
        });
        if (result.error) {
          alert(result.error.message);
        }
    };

    return (
        <>
            <Head>
                <title>Products - Cheeky Ginger Studios - One of a Kind Homemade Printed Art</title>
                <meta name="title" content="Products - Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
                <meta name="description" content="Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://cheekygingerstudios.com/products/prints" />
                <meta property="og:title" content="Products - Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
                <meta property="og:description" content="Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings." />
                <meta property="og:image" content="https://cheekygingerstudios.com/img/Kiss-1-Cheeky-Ginger-Studio.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://cheekygingerstudios.com/products/prints" />
                <meta property="twitter:title" content="Products - Cheeky Ginger Studios - One of a Kind Homemade Printed Art" />
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
                    <div className="container-fluid">
                        <h1 className="display-2 text-center text-black">{title}</h1>
                        <div className="row mx-0 mb-4">
                            <div className="col-lg-4 offset-lg-2 col-md-6 col-sm-12">
                                <img src={mainPic} width="85%" alt={title} />
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                {price ? (
                                    <>
                                        <h3 className="text-black">${price}&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{sku}&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{size}</h3>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="text-black">Please select a print and size</h3>
                                    </>
                                )}
                                <div className="container-fluid">
                                    <div className="row mx-0">
                                        <div className="col-md-6 col-sm-12">
                                            <h4 className="text-black">Print</h4>
                                            <select className="form-select" defaultValue="" onChange={e => changePrints(e)}>
                                                <option value="">Please select a print</option>
                                                {prints.map(i => (
                                                    <option key={i.id} value={i.id}>{i.print_type}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            {sizes.length > 0 && (
                                                <>
                                                    <h4 className="text-black">Size</h4>
                                                    <select className="form-select" defaultValue="" onChange={changeSize}>
                                                        <option value="">Please select a size</option>
                                                        {sizes.map(i => (
                                                            <option key={i.id} value={i.id}>{i.print_size}</option>
                                                        ))}
                                                    </select>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="row mx-0 mt-5">
                                        <div className="col">
                                            <p className="text-black">{description}</p>
                                        </div>
                                    </div>
                                    <div className="row mx-0 mt-5">
                                        <div className="col-12 px-0">
                                            <h6 className="text-black">Tags</h6>
                                            <p className="text-black">
                                                {tags.map(i => (
                                                    <span key={i.id}>{i.tag}&nbsp;|&nbsp;</span>
                                                ))}
                                            </p>
                                        </div>
                                        <div className="col-12 px-0">
                                            <h6 className="text-black">Additional Pictures</h6>
                                            <p>
                                                {pictures.map(i => (
                                                    <a key={i.id} onClick={() => setMainPic(i.url)}>
                                                        <img src={i.url} height="50" className="float-start" />
                                                    </a>
                                                ))}
                                            </p>
                                        </div>
                                        {price && (
                                            <div className="col-12 px-0 pt-2 d-grid gap-2">
                                                {/* <PayPalScriptProvider
                                                    options={{
                                                        "client-id": PayPalId,
                                                        components: "buttons",
                                                        currency: "USD"
                                                    }}
                                                >
                                                    <PayPalButtonContainer currency="USD" showSpinner={false} price={price} />
                                                </PayPalScriptProvider> */}
                                                <button className="btn btn-lg btn-success" type="button" onClick={createCheckOutSession}>
                                                    Buy with Stripe at {price}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;