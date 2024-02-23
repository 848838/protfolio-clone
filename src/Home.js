import React from 'react'
import logo from '../src/components/gh.jpg'
import './App.css'
import { NavLink } from 'react-router-dom';
import content from './components/content';
import { useState } from 'react';
function Home() {
    const [card, setcard] = useState(content)
    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg '  >
                    <div className='row pt-5 my-4'>
                        <div className='col-10 mx-auto'>
                            <div className='row '>
                                <div className='col-md-6 pt-5 pt-lg-0  order-2 order-lg-1 d-flex justify-content-center flex-column' >
                                    <h1 className='mx-auto' >
                                        My name is <strong style={{ color: " rgb(230, 0, 255) " }}> SHUBHAM </strong>
                                    </h1>
                                    <h3 className=' my-4 mx-3'>
                                        we are the team of Developers and Designers
                                    </h3>
                                    <div className='mt-3 mx-auto'>
                                        <NavLink to='/Work' style={{ color: " black" }} className='btn-get-started'>
                                            Go-to works
                                        </NavLink>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1  order-lg-2 header-img'>
                                    <img className='img-fluid' style={{ borderRadius: 10 }} src={logo} alt='logo'></img>
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* cards starts here */}
                    {/* col-md-6 pt-5 pt-lg-0   order-2 order-lg-1 d-flex */}
                    <div className='heading_work '>
                        <h1 className='d-flex justify-content-center '> Works  </h1>



                        <div className="container-fluid  " >
                            {
                                content.map((e) => {
                                    const { id, caption, url, price, discription } = e;
                                    return (


                                        <div key={e.id}>
                                            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                                <span className="visually-hidden">New alerts</span>
                                            </span>
                                            <div className='col-lg-6 order-1 my-5  mx-auto   order-lg-2 header-img'>
                                                <img className='img-fluid ' style={{ borderRadius: 10 }} src={e.url} alt='logo'></img>
                                                <button type="button" className="btn btn-primary position-relative">
                                                    New work

                                                </button>
                                            </div>

                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </section>



        </>
    );
}





export default Home;
