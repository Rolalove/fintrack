import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 mb-6 px-4 sm:px-8 lg:px-12">
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
        <IoMenuSharp size={24} />
        <Image
          src="/fintrack.svg"
          width="112"
          height="32"
          alt="Fintrack Logo"
          className="hidden sm:block"
        />
      </div>

      <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
        <FiSearch size={24} />
        <IoGridOutline size={24} />
        <Image
          src="/userprofile.png"
          width="40"
          height="40"
          alt="Fintrack Logo"
          quality={100}
        />
      </div>
    </nav>
  );
};
