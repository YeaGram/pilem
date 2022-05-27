import React from "react";
import Asearch from "./components/aSearch";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import Landing from "./components/landing";
import { useState, useEffect } from "react";

export default function home() {
   const [TopAnime, SetTopAnime] = useState([]);

   const GetTopAnime = async () => {
      const temp = await fetch(
         `https://api.jikan.moe/v3/top/anime/1/bypopularity`
      ).then((res) => res.json());

      SetTopAnime(temp.top.slice(0, 2));
   };

   useEffect(() => {
      GetTopAnime();
   }, []);

   console.log(TopAnime);
   return (
      <>
         <Header />
         <Landing />
         <Content list={TopAnime} />
         <Footer />
      </>
   );
}
