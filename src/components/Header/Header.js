import React from 'react'
import logo from "./../../assets/5977585.png"
const Header = () => {
    return (
        <div className='d-flex justify-content-center  border-bottom fixed-top bg-white'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ maxWidth: "1100px", width: "1100px" }}>
                <div class="container-fluid justify-content-between px-3 px-md-5">
                    <div className='d-flex align-items-center'>

                        <a class="navbar-brand fw-bold " href="/">
                        <img src={logo} alt='Main_logo' className='me-2' width='50px' />
                        </a>
                    </div>

                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-dark fw-bold" aria-current="page" href="/">
                            <i class="bi bi-house-door fs-5"></i>
                            </a>
                        </li>

                    </ul>


                </div>
            </nav>

        </div>
    )
}

export default Header
