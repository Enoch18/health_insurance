import React from "react";
const Breadcrumbs = ({title}: {title:any}) => {
    return (
        <h4 className="text-sm md:text-lg font-semibold">{title}</h4>
    )
}

export default Breadcrumbs;