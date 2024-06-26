import { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/router';
import HomeSlider from "../components/HomeSlider";
import axios from "axios";
import MetaHeader from '../components/MetaHeader';

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
      <MetaHeader
        metatitle = "Cheeky Ginger Studios - One of a Kind Homemade Printed Art"
        metadesc = "Cheeky Ginger Studios offers unique one of a kind homemade printed art for any and every occasion. We also offer sketches and sculptings."
        metakeys = "Cheeky Ginger Studios, custom art, homemade art, printed art"
        metaurl = "https://cheekygingerstudios.com/"
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
          <Suspense fallback={<p>Loading...</p>}>
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
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default Home;
