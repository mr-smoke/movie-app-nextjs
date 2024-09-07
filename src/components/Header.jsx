import { SiThemoviedatabase } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import Theme from "./Theme";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center sticky sm:gap-10 m-4">
      <Link href="/">
        <div className="flex flex-col items-center">
          <SiThemoviedatabase className="w-10" size={30} />
          <h1 className="font-extrabold font-mono text-xl">Movie App</h1>
        </div>
      </Link>
      <div className="flex items-center border rounded h-13 flex-1">
        <IoSearch className="m-4 text-xl" />
        <input
          className="outline-none flex-1 h-full text-lg"
          type="text"
          placeholder="Search"
        />
      </div>
      <Theme />
    </header>
  );
};

export default Header;
