"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed w-full bg-white shadow-md p-4 z-50">
            <div className="container mx-auto flex justify-center items-center">
                <Link href="/">
                    <img
                        src="https://res.cloudinary.com/dbbukhtz5/image/upload/v1738695404/podoclinic_navbar_landing_page_bcwytb.png"
                        alt="PodoClinic"
                        className="h-10 object-contain"
                    />
                </Link>
            </div>
        </nav>
    );
}

