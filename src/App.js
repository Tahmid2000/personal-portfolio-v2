import React from "react";
import "./App.css";
import Pdf from "./Tahmid_Imran_Resume.pdf";
import { FaGithub, FaLinkedin, FaSpotify, FaEnvelope } from "react-icons/fa";
import AgeCounter from "./AgeCounter";

function App() {
  //WaveText();
  return (
    <React.Fragment>
      {/*
        <a
          id="button-right"
          className="hidden lg:block md:block cursor-pointer mr-12 mt-7 transition duration-200 ease-in-out bg-white border-2 border-black py-2 px-4 rounded-xl float-right hover:bg-black hover:text-white hover:border-black-500 "
          href={Pdf}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
  */}
      <a
        id="button-right"
        className="cursor-pointer mr-12 mt-7 transition lg:block md:block"
        href="mailto:tahmidimran1@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        @
      </a>

      <div className="flex h-screen font-serif mt-16">
        <div className="m-auto">
          <div className="text-center">
            <h1 className="font-bold text-6xl mb-2" id="main-name">
              Tahmid Imran
            </h1>
            <h2 className="text-lg mb-4">Software Engineer at Microsoft</h2>

            {/*<div className="inline-flex text-2xl">
              <a
                href="https://github.com/Tahmid2000"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="mr-4 ml-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/tahmidimran/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="mr-4 ml-4" />
              </a>
              <a
                href="mailto:tahmidimran1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope className="mr-4 ml-4" />
              </a>
              <a
                href="https://open.spotify.com/user/tahmidimran2?si=e5d18fb90ed14920"
                target="_blank"
                rel="noreferrer"
              >
                <FaSpotify className="mr-4 ml-4" />
              </a>
  </div>*/}
            <div class="flex justify-center">
              {/*
              <a
                className="cursor-pointer mt-4 transition duration-200 ease-in-out bg-white border-2 border-black py-2 px-4 w-32 rounded-xl hover:bg-black hover:text-white hover:border-black-500 block lg:hidden md:hidden"
                href={Pdf}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <a
                className="cursor-pointer mt-4 block lg:hidden md:hidden"
                href="mailto:tahmidimran1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                @
              </a>
              */}
            </div>
            <div className="mt-32" id="age">
              <AgeCounter />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
// <h2 className="text-lg mb-4">Incoming Software Engineer @ <span class="">Microsoft</span></h2>
export default App;

// <iframe
//   title="Spotify Player"
//   id="button-left"
//   className="rounded-xl mr-12 mb-7 invisible lg:visible md:visible"
//   src="https://open.spotify.com/embed/playlist/0m9pe4Sl6Oz5S7ECaoPsV6?utm_source=generator&theme=0"
//   width="15%"
//   height="80"
//   frameBorder="0"
//   allowfullscreen=""
//   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
// ></iframe>;
