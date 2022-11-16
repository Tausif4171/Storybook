import React from "react";
import Input from "./Input";

export default {
    title: "Form/Input",
    component: Input
}

export const Small = () => {
    return <Input size="small" placeholder="Small" />
}


export const Medium = () => {
    return <Input size="medium" placeholder="Medium" />
}

export const Large = () => {
    return <Input size="large" placeholder="Large" />
}