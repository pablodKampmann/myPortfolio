"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MdDesignServices } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";

export default function Work() {

  //LISTENER DEL LOCALSTORAGE
  useEffect(() => {
    const handleItemChange = () => {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
      const storedTone = localStorage.getItem('tone');
      if (storedTone) {
        console.log(storedTone);

        setTone(storedTone);
      }
      const storedColorMain = localStorage.getItem('colorMain');
      if (storedColorMain) {
        setColorMain(storedColorMain);
      }
    };

    window.addEventListener('storage', handleItemChange);

    return () => {
      window.removeEventListener('storage', handleItemChange);
    };
  }, []);

  //LANGUAGE
  const [language, setLanguage] = useState<string>('eng')

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  const languageTexts = {
    eng: {
      title: "Projects",
      info_1: "Administrative application for a health clinic, especially oriented to the area of ​​dentistry. This tool provides a comprehensive solution for managing patients, shifts, medical records, treatments, finances, among others.",
      info_2: "Social mobile application that helps you find a roommate. It offers various forms of interaction, such as 'matches', likes, chats and user profiles, thus facilitating the search and choice of the ideal partner.",
      info_3: "YouTube Music clone with responsive design for all devices. The clone has been created manually, replicating the original design without copying code.",
      info_4: "Completely responsive template that includes a login page, a registration page and its two mobile versions.",
      category_1: "Desktop",
      category_2: "Mobile",
    },
    spa: {
      title: "Proyectos",
      info_1: "Aplicación administrativa para una clínica de salud, especialmente orientada al área de odontología. Esta herramienta proporciona una solución integral para la gestión de pacientes, turnos, historias clínicas, tratamientos, finanzas, entre otras.",
      info_2: "Aplicación móvil social que te ayuda a conseguir compañero de piso. Ofrece diversas formas de interacción, como 'matches', likes, chats y perfiles de usuarios, facilitando así la búsqueda y elección del compañero ideal.",
      info_3: "Clon de YouTube Music con diseño adaptable para todos los dispositivos. El clon ha sido creado manualmente, replicando el diseño original sin copiar código.",
      info_4: "Template completamente responsive que incluye una página de inicio de sesión, otra de registro y sus dos versiones móviles.",
      category_1: "Escritorio",
      category_2: "Móvil",
    }
  };

  let texts;
  if (language === "eng") {
    texts = languageTexts.eng;
  } else if (language === "spa") {
    texts = languageTexts.spa;
  }

  //TONE
  const [tone, setTone] = useState<string>('dark')
  const [classesTones, setClassesTones] = useState<any>(null);
  const [colorMain, setColorMain] = useState<string>('emerald');

  useEffect(() => {
    const storedTone = localStorage.getItem('tone');
    if (storedTone) {
      setTone(storedTone);
    }
  }, []);

  useEffect(() => {
    const updateClassesTones = () => {
      let bgColorTitle = '';
      let textColorSubTitle = '';
      let textColorLinks = '';
      let textColorHoverLinks = '';

      switch (colorMain) {
        case 'emerald':
          document.documentElement.style.setProperty('--scrollbar-color', '#059669');
          bgColorTitle = tone === 'dark' ? "bg-emerald-600" : "bg-emerald-600";
          textColorSubTitle = tone === 'dark' ? "text-emerald-800" : "text-emerald-800";
          textColorLinks = tone === 'dark' ? "text-emerald-500" : "text-emerald-500";
          textColorHoverLinks = tone === 'dark' ? "hover:text-emerald-400" : "hover:text-emerald-400";

          break;
        case 'rose':
          document.documentElement.style.setProperty('--scrollbar-color', '#e11d48');
          bgColorTitle = tone === 'dark' ? "bg-rose-600" : "bg-rose-600";
          textColorSubTitle = tone === 'dark' ? "text-rose-800" : "text-rose-800";
          textColorLinks = tone === 'dark' ? "text-rose-500" : "text-rose-500";
          textColorHoverLinks = tone === 'dark' ? "hover:text-rose-400" : "hover:text-rose-400";

          break;
        case 'blue':
          document.documentElement.style.setProperty('--scrollbar-color', '#2563eb');
          bgColorTitle = tone === 'dark' ? "bg-blue-600" : "bg-blue-600";
          textColorSubTitle = tone === 'dark' ? "text-blue-800" : "text-blue-800";
          textColorLinks = tone === 'dark' ? "text-blue-500" : "text-blue-500";
          textColorHoverLinks = tone === 'dark' ? "hover:text-blue-400" : "hover:text-blue-400";

          break;
        case 'yellow':
          document.documentElement.style.setProperty('--scrollbar-color', '#eab308');
          bgColorTitle = tone === 'dark' ? "bg-yellow-600" : "bg-yellow-600";
          textColorSubTitle = tone === 'dark' ? "text-yellow-800" : "text-yellow-800";
          textColorLinks = tone === 'dark' ? "text-yellow-500" : "text-yellow-500";
          textColorHoverLinks = tone === 'dark' ? "hover:text-yellow-400" : "hover:text-yellow-400";

          break;
        default:
          break;
      }

      setClassesTones({
        dark: {
          textColorMain: "text-white",
          borderColorProjectsCont: "border-gray-900",
          bgColorProjectsCont: "bg-blue-950",
          bgOpacityProjectsCont: "bg-opacity-20",
          bgHoverColorProject: "hover:bg-blue-950",
          bgHoverOpacityProject: "hover:bg-opacity-20",
          borderHoverColorProject: "hover:border-white",
          borderHoverOpacityProject: "hover:border-opacity-10",
          bgOpacityTitle: "bg-opacity-40",
          bgOpacityLinks: "bg-opacity-10",
          opacityImages: "opacity-50",
          bgOpacityLoaderImage: "bg-opacity-10",
          textColorLinks: textColorLinks,
          textColorHoverLinks: textColorHoverLinks,
          bgColorTitle: bgColorTitle,
          textColorSubTitle: textColorSubTitle,
        },
        light: {
          textColorMain: "text-black",
          borderColorProjectsCont: "border-gray-400",
          bgColorProjectsCont: "bg-white",
          bgOpacityProjectsCont: "bg-opacity-90",
          bgHoverColorProject: "hover:bg-gray-300",
          bgHoverOpacityProject: "hover:bg-opacity-30",
          borderHoverColorProject: "hover:border-gray-950",
          borderHoverOpacityProject: "hover:border-opacity-30",
          bgOpacityTitle: "bg-opacity-80",
          bgOpacityLinks: "bg-opacity-100",
          opacityImages: "opacity-70",
          bgOpacityLoaderImage: "bg-opacity-100",
          textColorLinks: textColorLinks,
          textColorHoverLinks: textColorHoverLinks,
          bgColorTitle: bgColorTitle,
          textColorSubTitle: textColorSubTitle,

        }
      });
    };

    updateClassesTones();
  }, [colorMain, tone]);

  let classes;
  if (tone === "dark") {
    classes = classesTones?.dark;
  } else if (tone === "light") {
    classes = classesTones?.light;
  }

  //COLOR MAIN
  useEffect(() => {
    const storedTone = localStorage.getItem('colorMain');
    if (storedTone) {
      setColorMain(storedTone);
    }
  }, []);

  //IMAGES HANDLER LOADING
  const [imageIsLoad, setImageIsLoad] = useState(false);
  const imageBlur = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8XwMAAoABfYJLKisAAAAASUVORK5CYII='

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setImageIsLoad(true);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`${classes?.textColorMain} flex flex-col justify-center items-center h-full pb-[4%]`}>
      <div className={`${classes?.bgColorTitle} ${classes?.bgOpacityTitle} font-normal border-r-4 border-b-4 border-blue-950  flex  ${classes?.borderColorProjectsCont} justify-center px-2 py-1.5 rounded shadow-2xl mb-8 items-center text-left text-4xl   `}>
        {texts?.title} <MdDesignServices className={`ml-4 bg-white bg-opacity-90 p-1 rounded-full`} />
      </div>
      <div className={`flex h-[75%] relative  ${classes?.bgColorProjectsCont} ${classes?.bgOpacityProjectsCont} rounded-lg w-[70%]  shadow-2xl text-lg justify-center items-center `}>
        <div className='overflow-y-auto bg-transparent  overflow-x-hidden flex flex-col h-full '>

          <div className=''>

            <div className={`flex relative group ${classes?.bgHoverOpacityProject} ${classes?.bgHoverColorProject} transition duration-100 justify-center hover:py-10 border-transparent hover:border-b-2  ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject} p-8  transition-all transform duration-500 items-center`}>

              <div className='font-bold desktop:text-xl w-[30%] '>
                My RoomMate App <span className={`${classes?.textColorSubTitle}`}>({texts?.category_1})</span>
                <p className='w-full laptop:text-sm desktop:text-lg  text-balance font-normal text-left'>{texts?.info_1}</p>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center '>Deploy <GrDeploy className='ml-2' /></h2>
                  <button onClick={() => window.open("https://dental-agenda.vercel.app/", "_blank")} className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}>https://dental-agenda.vercel.app/</button>
                </div>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center'>Repo <FaGithub className='ml-2' /></h2>
                  <button onClick={() => window.open("https://github.com/pablodKampmann/dental-agenda", "_blank")} className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}>https://github.com/pablodKampmann/dental-agenda</button>
                </div>
              </div>

              <Image placeholder='blur' blurDataURL={imageBlur} onLoad={() => setImageIsLoad(true)} className={`${classes?.opacityImages} ml-auto rounded-lg group-hover:opacity-100 shadow-2xl object-cover group-hover:h-[320px] group-hover:w-[68%]  trasform transition-all duration-700 w-[60%] h-[285px]`} quality={100} width={1919} height={917} priority={true} src='/dentalAgenda-image.png' alt="dentalAgenda-image" />
            </div>


            <div className={`flex group ${classes?.bgHoverOpacityProject} ${classes?.bgHoverColorProject} transition  duration-100 justify-center hover:py-10 border-transparent hover:border-b-2 hover:border-t-2 ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject} p-8 transition-all transform duration-500  items-center`}>
              {!imageIsLoad ? (
                <div className={`bg-white flex justify-center items-center ${classes?.bgOpacityLoaderImage} w-[60%] h-[280px] mr-auto rounded-lg shadow-2xl`}>
                  <ClipLoader color='#10b981' size={50} />
                </div>
              ) : (
                <Image placeholder='blur' blurDataURL={imageBlur} onLoad={() => setImageIsLoad(true)} className={`${classes?.opacityImages} rounded-lg shadow-2xl opacity-50 group-hover:opacity-100 object-cover group-hover:h-[380px] group-hover:w-[68%] mr-auto trasform transition-all duration-700 w-[60%] h-[335px]`} quality={100} width={1920} height={1080} priority={true} src='/MyRoomMate-image.png' alt="MyRoomMate-image" />
              )}

              <div className='font-bold desktop:text-xl w-[30%]'>
                My RoomMate App <br /> <span className={`${classes?.textColorSubTitle}`}>({texts?.category_1} & {texts?.category_2})</span>
                <p className='w-full laptop:text-sm desktop:text-lg text-balance font-normal text-left'>{texts?.info_2}</p>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center '>Deploy <GrDeploy className='ml-2' /></h2>
                  <button onClick={() => window.open("https://myroommate.vercel.app/", "_blank")} className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}>https://myroommate.vercel.app/</button>
                </div>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center'>Repo <FaGithub className='ml-2' /></h2>
                  <button onClick={() => window.open("https://github.com/pablodKampmann/myRoomMate-Copy", "_blank")} className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}>https://github.com/pablodKampmann/myRoomMate-Copy</button>
                </div>
              </div>

            </div>


            <div className={`flex group ${classes?.bgHoverOpacityProject} ${classes?.bgHoverColorProject} transition  duration-500 justify-center hover:py-10 border-transparent hover:border-b-2 hover:border-t-2 ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject}  p-8 transition-all transform duration-500 items-center`}>

              <div className='font-bold desktop:text-xl w-[30%]'>
                YouTube Music CLONE <br /><span className={`${classes?.textColorSubTitle}`}>({texts?.category_1} & {texts?.category_2})</span>
                <p className='w-full laptop:text-sm desktop:text-lg text-balance font-normal text-left'>{texts?.info_3}</p>
                <div className={`bg-white w-[80%] px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center '>Deploy <GrDeploy className='ml-2' /></h2>
                  <button onClick={() => window.open("https://youtubemusic-clone.vercel.app/", "_blank")} className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}>https://youtubemusic-clone.vercel.app/</button>
                </div>
                <div className={`bg-white w-[80%] px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center'>Repo <FaGithub className='ml-2' /></h2>
                  <button onClick={() => window.open("https://github.com/pablodKampmann/youTubeMusic-Clone", "_blank")} className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}>https://github.com/pablodKampmann/-youTubeMusic-Clone</button>
                </div>
              </div>

              {!imageIsLoad ? (
                <div className={`bg-white flex justify-center items-center ${classes?.bgOpacityLoaderImage} w-[60%] h-[250px] ml-10 rounded-lg shadow-2xl`}>
                  <ClipLoader color='#10b981' size={50} />
                </div>
              ) : (
                <Image placeholder='blur' blurDataURL={imageBlur} onLoad={() => setImageIsLoad(true)} className={`${classes?.opacityImages} rounded-lg ml-auto flex shadow-2xl opacity-50 group-hover:opacity-100 object-cover group-hover:h-[340px] group-hover:w-[70%] trasform transition-all duration-700 w-[60%] h-[290px]`} quality={100} width={1919} height={914} priority={true} src='/youtubeMusic-image.png' alt="youtubeMusic-image" />
              )}
            </div>



            <div className={`flex group ${classes?.bgHoverOpacityProject} ${classes?.bgHoverColorProject} transition  duration-100 justify-center hover:py-10 border-transparent hover:border-t-2 ${classes?.borderHoverColorProject} ${classes?.borderHoverOpacityProject} p-8 transition-all transform duration-500  items-center`}>
              {!imageIsLoad ? (
                <div className={`bg-white flex justify-center items-center ${classes?.bgOpacityLoaderImage} w-[60%] h-[280px] mr-auto rounded-lg shadow-2xl`}>
                  <ClipLoader color='#10b981' size={50} />
                </div>
              ) : (
                <Image placeholder='blur' blurDataURL={imageBlur} onLoad={() => setImageIsLoad(true)} className={`${classes?.opacityImages} rounded-lg mr-auto flex shadow-2xl opacity-50 group-hover:opacity-100 object-cover group-hover:h-[340px] group-hover:w-[70%] trasform transition-all duration-700 w-[60%] h-[290px]`} quality={100} width={1919} height={918} priority={true} src='/loginAndRegister-image.png' alt="loginAndRegister-image" />
              )}

              <div className='font-bold desktop:text-xl w-[25%]'>
                Login & Register Template <br /><span className={`${classes?.textColorSubTitle}`}>({texts?.category_1} & {texts?.category_2})</span>
                <p className='w-full laptop:text-sm desktop:text-lg text-balance font-normal text-left'>{texts?.info_4}</p>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center '>Deploy <GrDeploy className='ml-2' /></h2>
                  <button onClick={() => window.open("https://login-register-template.vercel.app/login", "_blank")} className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}>https://login-register-template.vercel.app/login</button>
                </div>
                <div className={`bg-white w-fit px-3 py-2 mt-4 rounded-lg shadow-2xl ${classes?.bgOpacityLinks}`}>
                  <h2 className='flex justify-start items-center'>Repo <FaGithub className='ml-2' /></h2>
                  <button onClick={() => window.open("https://github.com/pablodKampmann/login-register-template", "_blank")} className={`${classes?.textColorLinks} ${classes?.textColorHoverLinks} text-xs cursor-pointer tracking-tighter	break-normal text-left transition duration-300 `}>https://github.com/pablodKampmann/login-register-template</button>
                </div>
              </div>

            </div>



          </div>
        </div>
      </div>
    </div>
  );
}