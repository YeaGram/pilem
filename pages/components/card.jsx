import { useState, useEffect } from "react";

export default function Card(props) {
   const [topAnime, setTopAnime] = useState([]);
   const GetTopAnime = async () => {
      const temp = await fetch(
         `https://api.jikan.moe/v3/top/anime/1/bypopularity`
      ).then((res) => res.json());
      setTopAnime(temp.top.slice(0, props.much));
      console.log(props.much);
   };
   useEffect(() => {
      GetTopAnime();
   }, [props.much]);
   /////
   return (
      <>
         {topAnime.map((anime) => (
            <div className="w-[60vw] h-[70vh] min-h-[400px] max-h-[500px] p-4 shadow-md my-4 bg-transparent bg-rose-800 border-2 border-rose-600">
               <div className="flex flex-col items-center w-full h-full">
                  <a
                     target="_blank"
                     rel="noreferrer"
                     href={anime.url}
                     className={`Image
                     bg-[url('/img/hero-pattern.svg')]
                     box-content border-2 border-gray-400 bg-cover bg-center w-[80%] h-80  grid place-items-center  hover:scale-125 hover:-translate-y-9 hover:drop-shadow-myDrop1 transition-all`}
                  >
                     <img
                        className="w-full h-full"
                        src={anime.image_url}
                        alt="gambarAnime"
                     />
                     {/* disini poster */}
                  </a>
                  <div className="Description font-poppins mt-2">
                     <h4
                        key={anime.mal_id}
                        className="font-medium text-lg text-rose-100 hover:text-xl transition-all"
                     >
                        {anime.title}
                     </h4>

                     <p className="text-md leading-5 text-rose-300">
                        score : {anime.score}, rank :{" "}
                        <span className="font-bold">{anime.rank}</span>
                     </p>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
}
