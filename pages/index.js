import { useState, useEffect } from 'react';
import HomeSlider from "../components/HomeSlider";
import axios from "axios";

const Home = () => {
  const [field, setField] = useState();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://galacticblue.net/cheekyginger/backend/public/api/home-sections'
    })
    .then(result => {
      setSections(result.data.data)
    })
    .catch(error => console.log(error));
    axios({
      method: 'get',
      url: 'https://galacticblue.net/cheekyginger/backend/public/api/home-fields'
    })
    .then(result => {
      setField(result.data.data[0].description)
    })
    .catch(error => console.log(error))
  }, []);

  return (
    <div className="row mx-0">
      <div className="col px-0">
        <HomeSlider />
        <div className="container shadow p-3 my-5 bg-body rounded">
          <div className="row mx-0">
            <div dangerouslySetInnerHTML={{__html: field}} className="col px-0 py-3 text-black" />
          </div>
          <div className="row mx-0 justify-content-center">
            {sections.map(i => (
              <div className="col-3 p-2 m-2 text-center" key={i.id}>
                <h2 className="text-primary">{i.title}</h2>
                <h6 className="text-secondary">{i.description}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
