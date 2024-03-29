/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Socials = () => {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://backend.cheekygingerstudios.com/public/api/socials'
        })
        .then(result => {
            setSocials(result.data.data)
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="row mx-0">
            <div className="col px-0">
                <div className="container-fluid pb-4 text-center border-top border-light pt-2 bg-secondary text-white">
                    <div className="row mx-0 justify-content-center">
                        {socials.map(i => (
                            <div className="col-md-1 col-sm-4" key={i.id}>
                                <Link href={i.url} target="_blank">
                                    <img src={i.img_url} width="80%" alt="Visit Cheeky Ginger on Social Media" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials;