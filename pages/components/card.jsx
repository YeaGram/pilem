import Image from "next/image";

export default function Card({ anime }) {
   return (
      <div className="w-[60vw] h-[70vh] min-h-[400px] max-h-[500px] p-4 shadow-md my-4 bg-transparent bg-rose-800 border-2 border-rose-200">
         <div className="flex flex-col items-center w-full h-full">
            <div
               className={`Image outline bg-cover bg-center w-[80%] h-80  grid place-items-center  hover:scale-125 hover:-translate-y-9 hover:drop-shadow-myDrop1 transition-all`}
            >
               <img src={anime.image_url} alt="anime Images" />
               {/* disini poster */}
            </div>
            <div className="Description font-poppins mt-2 w-full text-left">
               <h4 className="font-medium text-lg text-rose-100 hover:text-xl transition-all">
                  {anime.title}
               </h4>
               <p className="text-md leading-5 text-rose-300">
                  Score : {anime.score}
               </p>
            </div>
         </div>
      </div>
   );
}
