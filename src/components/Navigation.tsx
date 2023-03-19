import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="font-bold">Genesis School Task</span>
            <span>
                <Link to="/" className="mr-2">Courses</Link>

                <Button
                    onClick={() => console.log('Auth')}
                    variant="contained"
                    color="secondary"
                >Auth</Button>

            </span>
        </nav>
    )
}