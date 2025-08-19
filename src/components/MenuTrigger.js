'use client';

import { useState } from "react";
import Link from "next/link";

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
                <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.3335 10.25H35.521M7.3335 20.5H35.521M7.3335 30.75H35.521" stroke="#020202" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            {open && <nav
                id="mobile-menu"
                className={`fixed top-0 right-0 w-full sm:w-[60%] h-[305px] bg-background-color 
                    flex flex-col @4xl:hidden items-center gap-4 py-6  
                    transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                `} >

                <button onClick={() => setOpen(false)}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8332 4.16675L4.1665 15.8334M4.1665 4.16675L15.8332 15.8334" stroke="#020202" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
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
