import { Cart, Logo } from "./icons";
import { FaUser } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="flex justify-around bg-black">
      <div className="flex justify-between max-w-[1110px] w-full pb-9 pt-9 border-b border-solid border-white border-opacity-50">
        <Logo />
        <nav>
          <ul className="flex items-center gap-[34px]">
            <li className="uppercase subtitle hover:text-orange text-white cursor-pointer">
              Home
            </li>
            <li className="uppercase subtitle hover:text-orange text-white cursor-pointer">
              Headphones
            </li>
            <li className="uppercase subtitle hover:text-orange text-white cursor-pointer">
              speakers
            </li>
            <li className="uppercase subtitle hover:text-orange text-white cursor-pointer">
              earphones
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-8">
          <div className="cursor-pointer">
            <Cart />
          </div>
          <FaUser color="white" className="cursor-pointer" fontSize={18} />
        </div>
      </div>
    </header>
  );
};
