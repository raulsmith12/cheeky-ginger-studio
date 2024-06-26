import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const HomeSlider = () => {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://backend.cheekygingerstudios.com/public/api/home-sliders'
        })
        .then(result => {
            setSliders(result.data.data)
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div id="carouselExampleControls" className="carousel slide px-0" data-bs-ride="carousel">
            <div className="carousel-inner">
                {sliders.map(i => (
                    <div className={"carousel-item " + (i.id === 1 && 'active')} key={i.id}>
                        <Image src={i.img_url} className="d-block w-100" alt={i.title} width={0} height={0} style={{ width: '100%', height: 'auto' }} />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className="display-2 text-center text-white caption-text">{i.title}</h2>
                            <h5 className="text-center text-white caption-text">{i.description}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default HomeSlider;