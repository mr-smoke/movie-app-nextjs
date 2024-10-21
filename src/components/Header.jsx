import Theme from "./Theme";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center sticky sm:gap-10 m-4">
      <Link href="/">
        <div className="flex flex-col items-center">
          <Image src="/logo.png" width={40} height={40} alt="Logo" />
          <h1 className="font-extrabold font-mono text-xl text-center">
            Movie Mania
          </h1>
        </div>
      </Link>
      <SearchBar />
      <Theme />
    </header>
  );
};

export default Header;
