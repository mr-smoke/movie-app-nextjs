import { SiThemoviedatabase } from "react-icons/si";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex items-center sticky gap-10 m-4">
      <div className="flex flex-col items-center">
        <SiThemoviedatabase className="w-10" size={30} />
        <h1 className="font-extrabold font-mono text-xl">Movie App</h1>
      </div>
      <div className="flex items-center border rounded h-13 flex-1">
        <IoSearch className="m-4 text-xl" />
        <input
          className="outline-none flex-1 h-full text-lg"
          type="text"
          placeholder="Search"
        />
      </div>
    </header>
  );
};

export default Header;
