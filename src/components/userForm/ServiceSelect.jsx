// ServiceSelect.jsx
import React from 'react';
import Select from 'react-select';

const groupedOptions = [
    {
        label: "INCOME TAX",
        options: [
            {
                value: "itr-filing",
                label: (
                    <>
                        <i className="bi bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i>{" "}
                        Income Tax Return (ITR) Filing
                    </>
                ),
            },
            {
                value: "itr-appeal",
                label: (
                    <>
                        <i className="bi bi-exclamation-circle-fill thirdMainColor dropDownIcons"></i>{" "}
                        ITR Notice/Appeal
                    </>
                ),
            },
            {
                value: "tax-planning",
                label: (
                    <>
                        <i className="bi bi-lightbulb-fill thirdMainColor dropDownIcons"></i>{" "}
                        Income Tax Planning
                    </>
                ),
            },
        ],
    },
    {
        label: "GST",
        options: [
            {
                value: "gst-registration",
                label: (
                    <>
                        <i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i>{" "}
                        GST Registration
                    </>
                ),
            },
            {
                value: "gst-return",
                label: (
                    <>
                        <i className="bi bi-file-earmark-check-fill thirdMainColor dropDownIcons"></i>{" "}
                        GST Return Filing
                    </>
                ),
            },
        ],
    },
    {
        label: "TRADEMARK",
        options: [
            {
                value: "trademark-reg",
                label: (
                    <>
                        <i className="bi bi-pen-fill thirdMainColor dropDownIcons"></i>{" "}
                        Trademark Registration
                    </>
                ),
            },
            {
                value: "trademark-renewal",
                label: (
                    <>
                        <i className="bi bi-disc-fill thirdMainColor dropDownIcons"></i>{" "}
                        Trademark Renewal
                    </>
                ),
            },
        ],
    },
    {
        label: "COPYRIGHT",
        options: [
            {
                value: "copyright-reg",
                label: (
                    <>
                        <i className="bi bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i>{" "}
                        Copyright Registration
                    </>
                ),
            },
        ],
    },
    {
        label: "LICENSES",
        options: [
            {
                value: "fssai-reg",
                label: (
                    <>
                        <i className="bi bi-file-earmark-text-fill thirdMainColor dropDownIcons"></i>{" "}
                        FSSAI Registration
                    </>
                ),
            },
            {
                value: "fssai-renewal",
                label: (
                    <>
                        <i className="bi bi-disc-fill thirdMainColor dropDownIcons"></i>{" "}
                        FSSAI Renewal
                    </>
                ),
            },
        ],
    },
    {
        label: "OTHERS",
        options: [
            {
                value: "iso",
                label: (
                    <>
                        <i className="bi bi-check2-circle thirdMainColor dropDownIcons"></i>{" "}
                        ISO Certification
                    </>
                ),
            },
        ],
    },
];


const customStyles = {
    control: (provided) => ({
        ...provided,
        padding: "5px",
        fontSize: "0.9rem",
        borderRadius: "30px",
        borderColor: "#ced4da",
        boxShadow: "none",
        '&:hover': { borderColor: '#86b7fe' }
    }),
    option: (provided, state) => ({
        ...provided,
        fontSize: "0.9rem",
        padding: "10px 15px",
        backgroundColor: state.isFocused ? "#f1f1f1" : "white",
        color: "black",
        cursor: "pointer",
    }),
};

function ServiceSelect({ value, onChange }) {
    return (
        <Select
            options={groupedOptions}
            styles={customStyles}
            placeholder="-- Choose a Service --"
            isSearchable
            value={value}
            onChange={onChange}
            menuPlacement="top"
        />
    );
}

export default ServiceSelect;
