import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS file for faster animations


const Navbar = () => {
    const location = useLocation(); // Get current location for dynamic active class
    const scrollToTopAndCollapse = () => {
        window.scrollTo(0, 0);  // Scroll to top
    };

    useEffect(() => {
        scrollToTopAndCollapse();
    }, [location]);

    useEffect(() => {
        // Automatically collapse the navbar on route change
        const navbarCollapse = document.getElementById("navbarNav");
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
        }
    }, [location]);


    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid d-flex justify-content-between" style={{ maxWidth: "1565px" }}>

                <Link to="/" className="navbar-brand ps-0  ps-md-3 ps-lg-4 ">
                    <img src="/logos/ALSlogo.png" alt="Bootstrap" width="112" height="40" />
                </Link>

                {/* Toggle button for collapsing the navbar */}
                <button
                    className="navbar-toggler rounded-5 mainColor"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >

                    <i className="bi bi-list mainColor"></i>
                </button>

                <div className="collapse navbar-collapse justify-content-center text-start  " id="navbarNav">
                    <div className=''>
                        <ul className="navbar-nav ms-auto text-start"> {/* Left-align items in collapsed navbar */}
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={`nav-link `}
                                >
                                    Home
                                </Link>
                            </li>

                            {/* Products Dropdown with faster animation */}
                            <li className="nav-item dropdown-start d-none d-lg-inline"  >

                                <Link

                                    to="#"
                                    className="nav-link dropdown-toggle nav-item "
                                    id="navbarDropdownProducts"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Tax & Compilance <i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                </Link>
                                <ul
                                    className="dropdown-menu  animate__animated animate__fadeIn animate__faster " id='navbarDropDownSpace'
                                    aria-labelledby="navbarDropdownProducts"



                                >
                                    <div className="d-flex ">
                                        <div className='p-3'>
                                            <span className=' equalSizing'> INCOME TAX</span>

                                            <li><Link className="dropdown-item" to="/"><i className="bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i> Income Tax Return (ITR) Filing</Link></li>
                                            <li><Link className="dropdown-item" to="/"><i className="bi-exclamation-circle-fill thirdMainColor dropDownIcons"></i> ITR Notice/Appeal</Link></li>
                                            <li><Link className="dropdown-item" to="/"><i className="bi-lightbulb-fill thirdMainColor dropDownIcons"></i> Income Tax Planning</Link></li>
                                        </div>
                                        <div className='p-3'>
                                            <span className=' equalSizing'> GST</span>

                                            <li><Link className="dropdown-item" to="/"><i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i> GST Registration</Link></li>
                                            <li><Link className="dropdown-item" to="/"><i className="bi bi-file-earmark-check-fill thirdMainColor dropDownIcons"></i> GST Return Filing</Link></li>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                            <li className="d-inline d-lg-none text-white text-start">
                                <div className="dropdown ">
                                    <a className=" dropdown-toggle nav-link nav-item " type="button" data-bs-toggle="dropdown" aria-expanded="false"
                                    >
                                        Income Tax <i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                    </a>
                                    <ul className="dropdown-menu p-3 animate__animated animate__fadeIn animate__faster  mb-3">
                                        <span className=' equalSizing'> INCOME TAX</span>

                                        <li><Link className="dropdown-item" to="/"><i className="bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i> Income Tax Return (ITR) Filing</Link></li>
                                        <li><Link className="dropdown-item" to="/"><i className="bi-exclamation-circle-fill thirdMainColor dropDownIcons"></i> ITR Notice/Appeal</Link></li>
                                        <li><Link className="dropdown-item" to="/"><i className="bi-lightbulb-fill thirdMainColor dropDownIcons"></i> Income Tax Planning</Link></li>

                                        <span className=' equalSizing'> GST</span>

                                        <li><Link className="dropdown-item" to="/"><i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i> GST Registration</Link></li>
                                        <li><Link className="dropdown-item" to="/"><i className="bi bi-file-earmark-check-fill thirdMainColor dropDownIcons"></i> GST Return Filing</Link></li>

                                    </ul>
                                </div>
                            </li>


                            <li className="nav-item dropdown-start d-none d-lg-inline"  >

                                <Link

                                    to="#"
                                    className="dropdown-toggle nav-link  nav-item "
                                    id="navbarDropdownProducts"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    TradeMark <i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                </Link>
                                <ul
                                    className="dropdown-menu  animate__animated animate__fadeIn animate__faster " id='navbarDropDownSpace'
                                    aria-labelledby="navbarDropdownProducts"



                                >
                                    <div className="d-flex ">
                                        <div className='p-3'>
                                            <span className=' equalSizing'>TRADEMARK</span>

                                            <li><Link className="dropdown-item" to="/"><i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i> Trademark Registration</Link></li>
                                            <li><Link className="dropdown-item" to="/"><i className="bi bi-disc-fill thirdMainColor dropDownIcons"></i> Trademark Renewal</Link></li>
                                        </div>
                                        <div className='p-3'>
                                            <span className=' equalSizing'>COPYRIGHT</span>

                                            <li><Link className="dropdown-item" to="/"><i className="bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i> Copyright Registration</Link></li>
                                        </div>
                                    </div>
                                </ul>
                            </li>


                            <li className="d-inline d-lg-none  text-start">
                                <div className="dropdown ">
                                    <a className=" dropdown-toggle nav-link nav-item " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        TradeMark <i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                    </a>
                                    <ul className="dropdown-menu p-3 animate__animated animate__fadeIn animate__faster mb-3 ">
                                        <span className=' equalSizing'>TRADEMARK</span>
                                        <li><Link className="dropdown-item" to="/"><i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i> Trademark Registration</Link></li>
                                        <li><Link className="dropdown-item" to="/"><i className="bi bi-disc-fill thirdMainColor dropDownIcons"></i> Trademark Renewal</Link></li>

                                        <span className=' equalSizing'>COPYRIGHT</span>

                                        <li><Link className="dropdown-item" to="/"><i className="bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i> Copyright Registration</Link></li>

                                    </ul>
                                </div>
                            </li>
                            <li className=" text-start">
                                <div className="dropdown ">
                                    <a className=" dropdown-toggle nav-link nav-item " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Licenses <i style={{ fontSize: "0.8rem" }} className="bi bi-chevron-double-down"></i>
                                    </a>
                                    <ul className="dropdown-menu p-3 animate__animated animate__fadeIn animate__faster mb-3">
                                        <span className='equalSizing'>LICENSES</span>
                                        <li><Link className="dropdown-item" to="/"><i className="bi-file-earmark-text-fill dropDownIcons thirdMainColor"></i> FSSAI Registration</Link></li>
                                        <li><Link className="dropdown-item" to="/"><i className="bi bi-disc-fill dropDownIcons thirdMainColor"></i> FSSAI Renewal</Link></li>

                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/ISO"
                                    className={`nav-link `}
                                >
                                    ISO
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className={`nav-link`}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item d-block d-lg-none">
                                <Link
                                    to="/contact"
                                    className={`nav-link `}
                                >
                                    Contact
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
                <Link className='btn text-white  rounded-pill d-none d-lg-block p-1 px-2 me-lg-4 bgMainColor contactButton' style={{ width: "110px", fontSize: "1rem" }} to="/contact">Contact Us</Link>
            </div >
        </nav >
    );
};

export default Navbar;
