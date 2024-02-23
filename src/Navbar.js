import { React, useState } from 'react'
import { NavLink } from 'react-router-dom';

import resume from './components/resume.pdf'
function Navbar() {
    const [name, setName] = useState('Hire-Me   ')
    const change = () => {
        setName("Hiring")
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Stacky_Bhai</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Work">Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                    </ul>


                    <div >
                        <button className='btn btn-primary' onClick={change} >
                            <NavLink to='/Contact ' className='btn btn-primary ' style={{ textDecoration: 'none', listStyle: 'none' }}>
                                {name}
                            </NavLink>
                        </button>
                        <button style={{ width: 100, height: 52, listStyle: 'none', color: 'white', textDecoration: 'none' }} className='btn btn-primary mx-3'>
                            <a style={{color:'white' ,textDecoration:'none'}} href={resume} download='resume'> Resume </a> 
                        </button>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
