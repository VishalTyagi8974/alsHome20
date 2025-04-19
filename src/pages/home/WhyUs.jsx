import React from 'react';
import './WhyUs.css'; // Custom bubble styles
import HoverCard from '../../components/hoverCards/HoverCard';
import affordable from "../../../public/homePage/animations/affordable.json"
import experts from "../../../public/homePage/animations/experts.json"
import data from "../../../public/homePage/animations/data.json"
import fast from "../../../public/homePage/animations/fast.json"
import transparent from "../../../public/homePage/animations/transparent.json"
import allday from "../../../public/homePage/animations/allday.json"
import ontime from "../../../public/homePage/animations/ontime.json"
import quick from "../../../public/homePage/animations/quick.json"

const whyUsData = [

    {
        title: <>Affordable <br /> Pricing</>,
        icon: affordable,
    },

    {
        title: <>Transparent<br /> Environment</>,
        icon: transparent,
    },
    // {
    //     title: "Long Term Relationship",
    //     icon: "/icons/support.svg",
    // },
    {
        title: <>Trusted <br /> Experts</>,
        icon: experts, // replace with your actual icon path or Bootstrap icon
    },
    {
        title: <>Fast &  Simple</>,
        icon: fast,
    },

    {
        title: "On Time Service",
        icon: ontime,
    },
    {
        title: "24/7 Support",
        icon: allday,
    },
    {
        title: <>Data Security <br /> & Trust </>,
        icon: data,
    },
    {
        title: "Quick Response Team",
        icon: quick,
    }
]

const WhyUs = () => {
    return (
        <div className="why-us-section py-5 bg-white text-center w-100">
            <section className="container mx-auto mainContainer">
                <h2 className="mb-5 display-6 fw-bold">Why Choose Us?</h2>
                <div className="row justify-content-center  my-4">
                    {whyUsData.map((item, idx) => (
                        <HoverCard key={idx} title={item.title} hoverColor={"#9966ff"} animation={item.icon}
                        />
                    ))}
                </div>
            </section>

        </div >
    );
};

export default WhyUs;
