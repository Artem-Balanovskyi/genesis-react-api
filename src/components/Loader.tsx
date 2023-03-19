import React, { CSSProperties } from "react";
import { ClockLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

interface LoaderProps {
    loading: boolean
}

export function Loader({loading}: LoaderProps) {
    return (
        <ClockLoader
                color='red'
                loading={loading}
                cssOverride={override}
                size={500}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
    )
}