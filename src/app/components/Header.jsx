import Link from "next/link";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import DarkModeSwitch from "./DarkModeSwitch";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
      <div className="flex gap-2">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="flex gap-4 items-center">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 mr-1 py-1 px-2 rounded-lg">
              IMDB
            </span>
            <span className="text-xl hidden md:inline">byStelios</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
