const Footer = () => {
   return (
      <div className="w-full h-40 flex flex-col justify-center items-center bg-gray-800 outline text-white">
         <div className="flex flex-col justify-center items-center">
            <h4>
               Made With ❤ Using{" "}
               <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://nextjs.org/"
                  className="hover:text-rose-500 hover:underline"
               >
                  {" "}
                  NextJS
               </a>{" "}
               and{" "}
               <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://tailwindcss.com/"
                  className="hover:text-rose-500 hover:underline"
               >
                  TailwindCSS
               </a>
            </h4>
            <div>
               <h5 className="font-medium font-poppins text-center mt-2">
                  Follow Us!
               </h5>
               <div className="flex justify-evenly w-60 text-center">
                  <ul className="flex flex-col">
                     <li>
                        <a href="">Github</a>
                     </li>
                     <li>
                        <a href="">Twitter</a>
                     </li>
                     <li>
                        <a href="">Reddit</a>
                     </li>
                  </ul>
                  <ul className="flex flex-col">
                     <li>
                        <a href="">Facebook</a>
                     </li>
                     <li>
                        <a href="">Instagram</a>
                     </li>
                     <li>
                        <a href="">Linkedln</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};
export default Footer;
