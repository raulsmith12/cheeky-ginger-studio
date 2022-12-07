import { useState, useEffect } from 'react';
import axios from "axios";
import Link from 'next/link';

const Prints = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://galacticblue.net/cheekyginger/backend/public/api/products'
        })
        .then(result => {
            setProducts(result.data.data.filter(i => i.category === 'print'))
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div className="row">
            <div className="col">
                <h1 className="display-2 text-center text-black">Prints</h1>
                <div className="container shadow p-3 my-5 bg-body rounded">
                    <div className="row justify-content-center">
                        {products.map(i => (
                            <div className="col-4 my-2" key={i.id}>
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
    )
}

export default Prints;