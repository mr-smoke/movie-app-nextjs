import { SiThemoviedatabase } from "react-icons/si";
import Theme from "./Theme";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="flex items-center sticky sm:gap-10 m-4">
      <Link href="/">
        <div className="flex flex-col items-center">
          <SiThemoviedatabase className="w-10" size={30} />
          <h1 className="font-extrabold font-mono text-xl">Movie App</h1>
        </div>
      </Link>
      <SearchBar />
      <Theme />
    </header>
  );
};

export default Header;
