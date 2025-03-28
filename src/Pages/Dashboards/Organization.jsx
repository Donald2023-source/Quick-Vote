import React from "react";
import { useParams } from "react-router-dom";

const Organization = () => {
    const params = useParams()
    console.log(params);
    return <div>This is {params.name}</div>;
};

export default Organization;
