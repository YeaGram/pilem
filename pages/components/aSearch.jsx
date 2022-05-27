// import { useState, useEffect } from "react";

// const Asearch = () => {
//    const [search, setSearch] = useState([]);
//    const [topAnime, setTopAnime] = useState([]);
//    const GetTopAnime = async () => {
//       const temp = await fetch(
//          `https://api.jikan.moe/v3/top/anime/1/bypopularity`
//       ).then((res) => res.json());

//       setTopAnime(temp.top.slice(0, 5));
//    };

//    useEffect(() => {
//       GetTopAnime();

//       console.log(topAnime);
//    }, []);
// };

// export default Asearch;
