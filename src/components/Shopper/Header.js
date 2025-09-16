import Image from "next/image";
import { FaRegBell } from "react-icons/fa";

const Header = ({ title, subtitle, hasNotifications }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-normal">{title}</h1>
        <p className=" mt-1">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-3">
        {hasNotifications && <FaRegBell className="w-8 h-8 text-[##4B0561]" />}
        <div className="flex items- gap-3 px-3 py-2 rounded-[20px] bg-gray-200/30">
          <Image
            src="/profilepic.svg"
            alt="User Avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
          <span>Alex Sandra</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
