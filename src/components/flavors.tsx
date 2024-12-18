import { useEffect, useState } from "react";
type flavorList = string[];
// const cutPoint = Astro.url.pathname.indexOf("/", 2);
// const title = Astro.url.pathname.slice(cutPoint + 1);

const flavors: flavorList = [];

export function Flavors({ flavors }: { flavors: flavorList }) {
  const [currentFlavor, setCurrentFlavor] = useState("");
  const [currentUrl, setCurrentUrl] = useState("");
  const colors = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
  ];
  const randNum = Math.floor(Math.random() * colors.length);
  console.log(colors[randNum]);
  useEffect(() => {
    const cutPoint = window.location.pathname.indexOf("/", 2);
    const title = window.location.pathname.slice(cutPoint + 1).replaceAll(
      "-",
      " ",
    );
    setCurrentUrl(title.slice(0, -1));
  }, []);

  return (
    <section className=" flex ml-10 text-5xl">
      <div>
        <h1 className="text-center underline mb-5 decoration-indigo-400 underline-offset-8  mx-auto capitalize">
          {currentUrl}
        </h1>
        <ul>
          {flavors.map((flavor) => (
           <li
           key={flavor}
           className={`cursor-pointer ${
             currentFlavor === flavor
               ? `underline decoration-fuchsia-400 `
               : ""
           }`}
           onClick={() => setCurrentFlavor(flavor)}
         >
           {flavor}
         </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
