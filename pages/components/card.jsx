import Image from "next/image";
export default function Card() {
   return (
      <div className="w-[60vw] h-[70vh] min-h-[400px] max-h-[500px] p-4 shadow-md my-4 bg-transparent bg-rose-800">
         <div className="flex flex-col items-center w-full h-full">
            <div className="Image bg-Random bg-cover bg-center w-[80%] h-80 outline grid place-items-center  hover:scale-125 hover:-translate-y-9 hover:drop-shadow-myDrop1 transition-all">
               {/* disini poster */}
            </div>
            <div className="Description font-poppins mt-2">
               <h4 className="font-medium text-lg text-rose-100 hover:text-xl transition-all">
                  Judul Film
               </h4>
               <p className="text-md leading-5 text-rose-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  eligendi?
               </p>
            </div>
         </div>
      </div>
   );
}
