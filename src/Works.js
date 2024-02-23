import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import content from './components/content'
const Works = (props) => {
  const [card, setcard] = useState(content)
  return (

    <>

      <div className="cols-md-1 mx-auto d-flex justify-content-center flex-row" >
        <div className="col mb-3  "  >
          <div className="card row my-2 ">
            {
              content.map((element) => {
                const { id, caption, url, price, discription } = element;
                return (
                  <div key={element.id}>
                    <img src={element.url} className="card-img-top " alt="..." />,
                    <div className="card-body d-flex  mx-1">
                      <h5 className="card-title mx-2">{element.price}</h5>
                      <p className="card-text " >{element.discription}</p>
                    </div>

                  </div>
                )
              })


            }


          </div>
        </div>
      </div>
      <div className='btn-btn-primary'>
       
          <NavLink to='/Home' className='btn-get-started'>
            Go-to Home
          </NavLink>
          <NavLink to='/Contact' className='btn-get-started'>
            Go-to Contact
          </NavLink>
       
       
      </div>

       
       
     
    </>


  )
}

export default Works
