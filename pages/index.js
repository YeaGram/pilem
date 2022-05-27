import React from "react";
import Asearch from "./components/aSearch";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import Landing from "./components/landing";

export default function home() {
   return (
      <>
         <Header />
         <Landing />
         <Content />
         <Footer />
      </>
   );
}
