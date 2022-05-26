import Partikel from "./particleBackground";
import Card from "./card";

const Content = () => {
   return (
      <div className="w-full  border-t-2 border-rose-900 flex flex-col items-center ">
         <Card />
         <Card />
         <Card />

         <div className="fixed left-0 right-0 top-0 bottom-0 z-[-1]">
            <div className="bg-gradient-to-b from-rose-900  w-full h-full absolute z-10"></div>
            <Partikel />
         </div>
      </div>
   );
};
export default Content;
