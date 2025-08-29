'use client';

import { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";



function HamburgerMenu() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#howitworks", label: "How it works" },
        { href: "#contactus", label: "Contact us" },
        { href: "/auth/signup", label: "Sign up" },
        { href: "/auth/signin", label: "Login" },
    ];

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Toggle menu"
                className="flex @4xl:hidden items-center justify-center w-[42px] h-[42px] relative"
            >
                <IoMenu size='3rem' />

            </button>

            {open && <nav
                id="mobile-menu"
                className={`fixed top-0 right-0 w-full sm:w-[60%] h-[305px] bg-background-color 
                    flex flex-col @4xl:hidden items-center gap-4 py-6  
                    transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                `} >

                <button onClick={() => setOpen(false)}>
                    <IoClose size='1.5rem' />
                </button>

                <ul className="flex flex-col items-center gap-4 text-[1rem] font-medium">
                    {navItems.map(({ href, label }) => (
                        <li key={href}>
                            <Link href={href} onClick={() => setOpen(false)}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>}
        </>
    );
}

export default HamburgerMenu;
