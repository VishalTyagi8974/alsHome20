import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaxCalculator.css'; // Link to your existing calculator CSS file
import showAverageTax from '../../../utils/taxCalculator'; // Assuming the utility functions are in utils.js

const TaxCalxulator = () => {
  const [income, setIncome] = useState(1200000);
  const [age, setAge] = useState(28);
  const [deductions, setDeductions] = useState(150000);

  const [taxOld, setTaxOld] = useState(0);
  const [taxNew, setTaxNew] = useState(0);
  const [taxAvg, setTaxAvg] = useState(0);

  const [showResults, setShowResults] = useState(false);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleDeductionsChange = (e) => {
    setDeductions(e.target.value);
  };

  const handleCalculateClick = () => {
    if ((parseFloat(income) > 0) && (parseFloat(age) > 0) && (parseFloat(deductions) >= 0)) {
      const { oldTax, newTax, avgTax } = showAverageTax(income, age, deductions);
      setTaxNew(newTax);
      setTaxAvg(avgTax);
      setTaxOld(oldTax);
      setShowResults(true);
    }
  };

  const handleBackClick = () => {
    setShowResults(false);
  };

  return (
    <div className="mobile-screen my-2 mx-auto" >
      <div className="position-relative">
        {showResults && <button className="btn btn-light p-0 m-0 ms-1 position-absolute left-0" style={{ height: "25px", fontSize: "1rem", fontWeight: "500", width: "25px" }} onClick={handleBackClick}>
          <i className="bi bi-chevron-left"></i>
        </button>}

        <div className=' d-flex justify-content-center mt-0'>

          <img src="homePage/calculator/ALS.jpg" className='rounded-4 shadow mb-3 ' width={100} height={100} alt="" />
        </div>
        {!showResults ? (
          <div className="d-flex justify-content-center flex-wrap">
            <h6 className='text-black' >Calculate ITR</h6>
            <div className="mt-2  mb-2">
              <label className='mb-2' >Income</label>
              <div className="input-group text-center ">
                <span className="input-group-text " style={{ fontSize: "1rem", height: "35px" }} id="basic-addon1">&#8377;</span>
                <input type="number "
                  value={income}
                  onChange={handleIncomeChange} className="form-control " style={{ fontSize: "1rem", height: "35px" }} placeholder="Enter Amount" aria-describedby="basic-addon1" />


              </div>

            </div>

            <div className=" mt-3">
              <label className=' mb-2' >Age</label>

              <input type="number"
                value={age}
                onChange={handleAgeChange}
                className="form-control" style={{ height: "35px" }} placeholder="Enter Age" aria-describedby="basic-addon2" />

            </div>

            <div className=" mt-3">
              <label className=' mb-2' >Deductions</label>
              <input type="number"
                value={deductions}
                onChange={handleDeductionsChange}
                className="form-control mb-4" style={{ height: "35px" }} placeholder="Enter Deductions" aria-describedby="basic-addon3"
              />

            </div>


            <button className=" btn btn-light rounded-4 py-1 border-1 text-black" style={{ fontSize: "0.9rem", fontWeight: "500", backgroundColor: "#dee2e6", width: "150px", height: "35px" }} onClick={handleCalculateClick}>
              Calculate
            </button>
          </div>
        ) : (
          <div className="d-flex justify-content-center flex-wrap text-black">
            <h6 className='text-black w-100 text-center' >Estimated Tax</h6>
            <div className='w-100 mt-3 text-center'>
              <p className='calcHeadings mb-0 '>Average Tax</p>
              <p className="fw-bold" style={{ color: "#00990F", fontSize: "1.2rem" }}>₹{taxAvg}</p>
            </div>
            <div className="d-flex mb-2 mt-2 justify-content-center ">
              <div className='m-2 me-3'>
                <h6 className='mb-1 fw-normal' style={{ fontSize: "1rem" }}> ₹{taxNew}</h6>
                <p className='calcHeadings fw-normal text-muted' style={{ fontSize: "0.9rem" }}>New Tax</p>
              </div>
              <div className='m-2 ms-3'>
                <h6 className='mb-1 fw-normal' style={{ fontSize: "1rem" }}> ₹{taxOld}</h6>
                <p className='calcHeadings fw-normal text-muted' style={{ fontSize: "0.9rem" }}>Old Tax </p>
              </div>

            </div>
            <a className=" btn btn-light rounded-pill  border-1 genericButtons  " style={{ fontSize: "0.9rem", fontWeight: "500", width: "150px", height: "35px" }} >
              Apply Now
            </a>

          </div>
        )}
      </div>
    </div >
  );
};

export default TaxCalxulator;