import Link from "next/link";

function Navbar() {
    return (
        <nav role='navigation' aria-label='Mobile navigation menu' className="hidden @4xl:block">
            <ul className="flex gap-6 items-center font-medium text-[1rem]">
                <li><Link href='#home'>Home</Link></li>
                <li><Link href='#about'>About</Link></li>
                <li><Link href='#howitworks'>How it works</Link></li>
                <li><Link href='#contactus'>Contact us</Link></li>
            </ul>
        </nav >
    );
}

export default Navbar;
