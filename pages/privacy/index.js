import { useState, useEffect } from 'react';
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
    )
}

export default Privacy;