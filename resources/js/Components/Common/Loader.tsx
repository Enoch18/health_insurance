import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = ({width, color} : any) => {
    return (
        <RotatingLines
            visible={true}
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            strokeColor={color ?? "gray"}
            width={width ?? "20"}
        />
    )
}

export default Loader;