import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bold">Genesis School Task</span>
            <span>
                <Link to="/" className="mr-2">Main</Link>
                <Link to="/courses" className="mr-2">Courses</Link>
                <Link to="/courses/some-id" className="mr-2">Single Course Page</Link>
            </span>
        </nav>
    )
}