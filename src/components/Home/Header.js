import Link from "next/link";

import Navbar from "@/components/Navbar";
import Button from "@/components/UI/Button";
import Logo from "@/components/UI/Logo";
import HamburgerMenu from "@/components/MenuTrigger";


const Header = () => {
  return (
    <header className="bg-background-color fixed top-0 left-0 w-full py-3 max-xl:py-5">
      <div className="@container flex justify-between items-center  max-w-[var(--container-max-width)] mx-auto px-3">
        <Logo />
        <Navbar />
        <HamburgerMenu />

        <div className="@4xl:flex hidden gap-4 font-medium text-[1rem] ">
          <Button className='py-[0.5rem] px-[2.5rem]'><Link href='/auth/signup'>Sign up</Link></Button>
          <Button className='py-[0.5rem] px-[2.5rem]' variant="secondary"><Link href='/auth/signin'> Login</Link></Button>
        </div>
      </div>


    </header >
  );
};

export default Header;
