import React from 'react'
import HomeCrousal from './HomeCrousal'
import "./Home.css";
import HomeSection from "./HomeSection"
import HomeNavbar from '../../header/HomeNavbar';
import TaxCalculator from '../../components/taxCalculator/TaxCalculator';
import WhyUs from './WhyUs';
import ItemCard from "../../components/itemCard/ItemCard";
import UserForm from '../../components/userForm/UserForm';
const Home = () => {
  return (
    <>
      <div className='w-100 '>
        <div className='gradBg'></div>
        <HomeNavbar />
        <HomeSection />
        <div className='d-flex justify-content-center flex-wrap'>
          <section className="hero-section position-relative my-3 my-md-4  " >
            <div className="gradient-wrapper">
              <canvas id="gradient-canvas" className="gradient-canvas"></canvas>
            </div>

            <div className=" text-start  position-relative mx-auto py-2 z-1 row  mainContainer" >
              <div className='col-md-7 px-0'>
                <h1 className="secondMainColor display-1 fw-bold  mb-3 ">
                  Simplifying <br /> Legal & Financial Solutions for Every Indian
                </h1>
                <p className="para fs-5  mt-4 ">
                  We offer transparent, high-quality legal and financial services for individuals and businesses — simplifying ITR filing, GST registration, Trademark applications, ISO certification, FSSAI licensing, and more.            </p>
                <UserForm />
              </div>
              <div className='col-md-5 px-0 '>
                <TaxCalculator />
              </div>
            </div>
          </section >


          <div className='bg-white py-5 w-100'>
            <section className=' mainContainer mx-auto'>
              <h2 className='display-5  fw-bold text-start'>Popular Services</h2>
              <HomeCrousal />
            </section>
          </div>


          <div className='my-4 my-md-5 py-3 py-md-5 w-100  '>
            <section className='mx-auto mainContainer '>
              <h2 className='fw-bold display-5  mb-4'>Our Services</h2>
            </section>

            <section className='row  mx-auto  mainContainer'>


              <ItemCard className={"col-md-6 col-xl-4  mx-0"} heading={"ITR Filing"} paragraph={"Stay tax-compliant and avoid penalties with hassle-free Income Tax Return (ITR) filing."}
                body={<img src="homePage/cards/ITR_compressed.jpg" width={"100%"} alt="" />}
              />
              <ItemCard className={"col-md-6 col-xl-4  mx-0"} heading={"GST Registration"} paragraph={"Get GST registration to legally sell products/services and claim input tax credit."}
                body={<img src="homePage/cards/GST_compressed.jpg" width={"100%"} alt="" />}

              />
              <ItemCard className={"col-md-6 col-xl-4  mx-0"} heading={"Trademark Registration"} paragraph={"Trademark registration gives your brand legal protection and exclusive rights."}
                body={<img src="homePage/cards/TradeMark_compressed.jpg" width={"100%"} alt="" />}

              />
              <ItemCard className={"col-md-6 col-xl-4  mx-0"} heading={"Copyright Registration"} paragraph={"Protect your content like music, art, writing and more with copyright registration."}
                body={<img src="homePage/cards/CopyRight_compressed.jpg" width={"100%"} alt="" />}

              />

              <ItemCard className={"col-md-6 col-xl-4  mx-0"} heading={"FSSAI Registration"} paragraph={"Get your FSSAI registration for legal food business compliance and safety."}
                body={<img src="homePage/cards/FSSAI_compressed.jpg" width={"100%"} alt="" />}

              />

              <ItemCard className={"col-md-6 col-xl-4  mx-0"} heading={"ISO Certification"} paragraph={"Enhance your brand’s credibility with ISO certification for quality and compliance."}
                body={<img src="homePage/cards/ISO_compressed.jpg" width={"100%"} alt="" />}

              />


            </section >
          </div >

          <WhyUs />

        </div>
      </div>
    </>
  )
}

export default Home
