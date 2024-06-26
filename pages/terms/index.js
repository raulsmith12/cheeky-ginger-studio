import { useState, useEffect } from 'react';
import axios from "axios";
import MetaHeader from '../../components/MetaHeader';

const Terms = () => {
    const [content, setContent] = useState();

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://backend.cheekygingerstudios.com/public/api/terms-pages'
        })
        .then(result => {
            setContent(result.data.data[0].text)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <MetaHeader
                metatitle = "Terms of Service - Cheeky Ginger Studios - One of a Kind Homemade Printed Art"
                metadesc = "Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings."
                metakeys = "Cheeky Ginger Studios, custom art, homemade art, printed art"
                metaurl = "https://cheekygingerstudios.com/terms/"
            />
            <div className="row mx-0">
                <div className="col px-0">
                    <h1 className="display-2 text-center text-black">Terms of Service</h1>
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

export default Terms;