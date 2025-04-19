import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperSlideComponent from '../../components/swiperSlide/SwiperSlideComponent';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const HomeCrousal = () => {
    return (
        <div className=" my-3 my-md-5">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className=" rounded-4 shadow " // Bootstrap classes: rounded = border-radius, shadow = box-shadow
            >
                <SwiperSlide >
                    <SwiperSlideComponent
                        img={"homePage/homeCrousal/ITRfiling.jpg"}
                        heading={"ITR Filing"}
                        money={"449"}
                        para={"Seamless tax filing experience with professionals"}
                        viewLink={"/"}
                        btnColor={"#3a0ca3"}
                        gradColor={"linear-gradient(to top, rgba(58, 12, 163, 0.9), rgba(126, 88, 242, 0.3))"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperSlideComponent
                        img={"homePage/homeCrousal/GSTregistration.jpg"}
                        heading={"GST Registration"}
                        money={"899"}
                        para={"Simplify your business with hassle-free GST registration"}
                        viewLink={"/"}
                        btnColor={"#0a2540"}
                        gradColor={"linear-gradient(to top, rgba(10, 37, 64, 0.9), rgba(100, 132, 168, 0.5))"}
                    />
                </SwiperSlide>
                <SwiperSlide >
                    <SwiperSlideComponent
                        img={"homePage/homeCrousal/TrademarkRegistration.jpg"}
                        heading={"Trademark Registration"}
                        money={"599"}
                        para={
                            <>
                                +govt. fee <br />
                                Start your own brand with confidence
                            </>
                        }
                        viewLink={"/"}
                        btnColor={"#0466c8"}
                        gradColor={"linear-gradient(to top, rgba(7, 42, 200, 0.8), rgba(141, 180, 255, 0.4))"}>
                    </SwiperSlideComponent>
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperSlideComponent
                        img={"homePage/homeCrousal/GSTfiling.jpg"}
                        heading={"GST Return Filing"}
                        money={"299"}
                        para={"Your GST, our expertise–Apka Legal Salahkar has you covered."}
                        viewLink={"/"}
                        btnColor={" #4f0147"}
                        gradColor={"linear-gradient(to top, rgba(79, 1, 71, 0.85), rgba(59, 7, 35, 0.79), rgba(210, 59, 119, 0.6), rgba(248, 187, 208, 0.4))"}
                    />
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default HomeCrousal;
