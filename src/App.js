import React from 'react';
import './App.css';
import Pdf from './Tahmid_Imran_Resume.pdf'
import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';
function App() {
  return (
    <React.Fragment>
      <a id="button-right" className="cursor-pointer mr-12 mt-7 transition duration-200 ease-in-out bg-white border-2 border-black py-2 px-4 rounded-xl float-right hover:bg-black hover:text-white hover:border-black-500" href={Pdf} target="_blank" >Resume</a>
      <iframe id="button-left" className="rounded-xl mr-12 mb-7" src="https://open.spotify.com/embed/playlist/0m9pe4Sl6Oz5S7ECaoPsV6?utm_source=generator&theme=0" width="15%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      <div className="flex h-screen font-serif">
        <div className="m-auto">
          <div className="text-center">
            <h1 className="font-bold text-6xl mb-2">Tahmid Imran</h1>
            <h2 className="text-lg">Master's Computer Science @ UT Dallas</h2>
            <h2 className="text-lg mb-4">Incoming Software Engineer @ Microsoft</h2>
            <div className="inline-flex text-2xl">
              <a href="https://github.com/Tahmid2000" target="_blank"><FaGithub className="mr-4 ml-4"/></a>
              <a href="https://www.linkedin.com/in/tahmidimran/" target="_blank"><FaLinkedin className="mr-4 ml-4"/></a>
              <a href="https://open.spotify.com/user/tahmidimran2?si=e5d18fb90ed14920" target="_blank"><FaSpotify className="mr-4 ml-4"/></a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default App;
