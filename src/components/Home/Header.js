
import Navbar from "@/components/Navbar";
import Link from "@/components/UI/Link";
import Logo from "@/components/UI/Logo";
import HamburgerMenu from "@/components/MenuTrigger";


const Header = () => {
  return (
    <header className="bg-background-color fixed top-0 left-0 w-full py-3 max-xl:py-5 z-50">
      <div className="@container flex justify-between items-center  max-w-[var(--container-max-width)] mx-auto px-3">
        <Logo />
        <Navbar />
        <HamburgerMenu />

        <div className="@4xl:flex hidden gap-4 font-medium text-[1rem] ">
          <Link className='py-2.5 px-10' href='/auth/signup'>Sign up</Link>
          <Link className='py-2.5 px-10' variant='secondary' href='/auth/signin'> Login</Link>
        </div>
      </div>


    </header >
  );
};

export default Header;
