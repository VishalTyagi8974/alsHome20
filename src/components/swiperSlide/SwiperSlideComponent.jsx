import { Link } from "react-router-dom";
import "./SwiperSlideComponent.css"

const SwiperSlideComponent = ({ img, heading, money, para, viewLink, btnColor, gradColor }) => {
  return (

    <div className="slide-container position-relative rounded-4 overflow-hidden " >
      <img
        src={img}
        alt={heading}
        className="w-100 h-100 p-0 m-0"

        style={{ objectFit: "cover" }} // for responsiveness
      />
      <div className=" position-absolute top-0 start-0 h-100 w-100 " style={{ zIndex: 10, background: gradColor }}></div>
      <div
        className="slide-content text-white position-absolute bottom-0 start-0 p-4"
        style={{ zIndex: 20 }}
      >
        <h1 className="fw-bold crousalHeading mb-2">
          {heading} <br /><span className="money ">₹{money}/-</span>
        </h1>
        <p className="crousalPara mb-3">{para}</p>
        <Link
          to={viewLink}
          style={{ color: btnColor }}
          className="btn btn-sm px-4 rounded-pill mb-2 mb-md-4 swiperSlideButton   fw-semibold"
        >
          View More
        </Link>
      </div>
    </div>

  );
};

export default SwiperSlideComponent;
