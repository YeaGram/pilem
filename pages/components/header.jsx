import Brand from "./brand";
import Navbar from "./navbar";

const Header = () => {
   return (
      <>
         <header>
            <div className="flex justify-between w-full outline px-4 py-3 bg-gray-800 text-gray-300 items-center shadow-lg fixed z-20">
               <Brand />
               <Navbar />
            </div>
         </header>
      </>
   );
};
export default Header;
