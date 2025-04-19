export default function DropDownLink({ imgSrc, heading, para }) {
    return (
        <>
            <div className="d-flex my-0 ps-2 mx-1">
                <div className="h-100">
                    <img className="mt-2 me-3" style={{ width: "20px" }} src={imgSrc} alt="" />
                </div>
                <div className="my-0 pe-md-3">
                    <h6 style={{ fontSize: "0.9rem" }}>{heading}</h6>
                    <p className="p-0 m-0" style={{ fontSize: "0.6rem" }}>{para}</p>
                </div>

            </div>
        </>
    )
}