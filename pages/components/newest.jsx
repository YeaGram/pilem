import Card from "./card";

export default function Newest() {
   return (
      <div className="w-full  border-t-2 border-rose-900 flex flex-col items-center">
         <div className="">
            <h3 className="font-extrabold font-montserrat text-rose-200 text-4xl text-left">
               Newest!
            </h3>
            <Card links="bg-Random2" />
         </div>
      </div>
   );
}
