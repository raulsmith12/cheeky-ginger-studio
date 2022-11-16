import { useState, useEffect } from 'react';
import axios from "axios";

const Privacy = () => {
    const [content, setContent] = useState();

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://galacticblue.net/cheekyginger/backend/public/api/privacy-pages'
        })
        .then(result => {
            setContent(result.data.data[0].text)
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h1 className="display-2 text-center">Privacy Policy</h1>
            <div className="container shadow p-3 my-5 bg-body rounded">
                <div className="row">
                    <div className="col" dangerouslySetInnerHTML={{__html: content}} />
                </div>
            </div>
        </>
    )
}

export default Privacy;