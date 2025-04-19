import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Optional, for additional custom styles
import BankLogosDiv from './BankLogosDiv';

const Footer = () => {
    return (
        <footer className="text-light py-4" >
            {/* <BankLogosDiv /> */}
            <div className="container " style={{ maxWidth: "1350px" }}>
                <div className='ms-1 ms-md-3 ms-lg-5 footerLogo mb-5'>
                    <img src="/logos/ALSlogo.png" width="112" height="40" alt="" />
                    <p className='secondMainColor mt-2 fw-semibold' style={{ fontSize: "0.9rem" }} >Transparency ka vaada, <br /> time par ho har iraada!</p>

                </div>
                <div className="row d-flex justify-content-between text-start fw-normal ms-1 ms-md-3 ms-lg-5">

                    <div className="col-6 col-md-3 mb-4">
                        <h5 className='footerHead'>Tax & Compliance</h5>
                        <ul className="list-unstyled">
                            <li><Link className="" to="/"> Tax Return (ITR) Filing</Link></li>
                            <li><Link className="" to="/"> ITR Notice/Appeal</Link></li>
                            <li><Link className="" to="/"> Income Tax Planning</Link></li>
                            <li><Link className="" to="/"> GST Registration</Link></li>
                            <li><Link className="" to="/"> GST Return Filing</Link></li>
                        </ul>
                    </div>

                    {/* Products Column */}
                    <div className="col-6 col-md-3 mb-4">
                        <h5 className='footerHead'>Trademark</h5>
                        <ul className="list-unstyled">
                            <li><Link className="" to="/"> Trademark Registration</Link></li>
                            <li><Link className="" to="/"> Trademark Renewal</Link></li>
                            <li><Link className="" to="/"> Copyright Registration</Link></li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div className="col-6 col-md-3 mb-4">
                        <h5 className='footerHead'>Licenses</h5>
                        <ul className="list-unstyled">
                            <li><Link className="" to="/">FSSAI Registration</Link></li>
                            <li><Link className="" to="/"> FSSAI Renewal</Link></li>

                        </ul>
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                        <h5 className='footerHead'>About Us</h5>
                        <ul className="list-unstyled">
                            <li className="footerLi"><Link to="/" className="">Home</Link></li>
                            <li className="footerLi "><Link to="/contact" className="">Contact Us</Link></li>
                            <li className="footerLi "><Link to="/about" className="">About Us</Link></li>
                        </ul>
                    </div>
                </div>



                {/* Footer Bottom */}
                <div className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between mt-3 mx-3">
                    <div className='d-flex justify-content-center flex-wrap display-6 fw-normal align-items-center' style={{ fontSize: "0.8rem" }}>
                        <div style={{ color: "#91B5D7" }}>&copy; 2025 ApkaLegalS.</div>
                        <div className='mb-1'><Link to="/policies/user-agreement" className='ms-3 policies'>User Agreement</Link></div>
                        <div className='mb-1'><Link to="/policies/privacy" className='ms-3 policies'>Privacy Policy</Link></div>
                        <div className='mb-1'><Link to="/policies/archival" className='ms-3 policies'>Archival Policy</Link></div>
                        <div className='mb-1'><Link to="/policies/whistleblowerPOSHpolicy" className='ms-3 policies'>Whistleblower & POSH Policy</Link></div>
                        <div className='mb-1'><Link to="/policies/codeofconduct" className='ms-3 policies'>Code of Conduct</Link></div>
                    </div>
                    <div className='py-1'>
                        <a href="https://x.com/POWERCASH15/" target="_blank" rel="noopener noreferrer" className="text-light ">
                            <i className="bi bi-twitter ms-2 policies" style={{ fontSize: "0.9rem" }}></i>
                        </a>
                        <a href="https://www.facebook.com/powercash.co.in/" target="_blank" rel="noopener noreferrer" className="text-light ">
                            <i className="bi bi-facebook ms-2 policies" style={{ fontSize: "0.9rem" }}></i>
                        </a>
                        <a href="https://www.instagram.com/powercash_/?igsh=eGtrZDlrZm50ZG80" target="_blank" rel="noopener noreferrer" className="text-light ">
                            <i className="bi bi-instagram ms-2 policies" style={{ fontSize: "0.9rem" }}></i>
                        </a>
                        <a href="https://www.linkedin.com/company/powercash" target="_blank" rel="noopener noreferrer" className="text-light ">
                            <i className="bi bi-linkedin ms-2 policies" style={{ fontSize: "0.9rem" }}></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
