"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaDev, FaGithub, FaEnvelope } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { IoLogoWhatsapp } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { useRouter } from 'next/navigation'

export default function AboutMe() {
  const imageBlur = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8XwMAAoABfYJLKisAAAAASUVORK5CYII='
  const router = useRouter()

  //LISTENER DEL LOCALSTORAGE
  useEffect(() => {
    const handleItemChange = () => {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
      const storedTone = localStorage.getItem('tone');
      if (storedTone) {
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
      title_1: "Full Stack Developer ",
      title_2: "MAIN frontend",
      text_1: "I am a FULL-STACK developer of both web and mobile applications. I like working in the FRONT-END area because I am able to understand user requirements and, in turn, achieve a good user experience.",
      text_2_part_1: "Likewise, I can work in any area. As seen in the section",
      text_link_1: "projects",
      text_2_part_2: ", I have two fully functional FULL-STACK developed applications.",
      text_3_part_1: "I am interested in continuing to improve my knowledge with the",
      text_link_2: "technologies",
      text_3_part_2: "that I usually use as good practices that every developer should have.",
    },
    spa: {
      title_1: "Desarrollador Full Stack ",
      title_2: "MAIN frontend",
      text_1: "Soy un desarrollador FULL-STACK de aplicaciones tanto web como móviles. Me gusta trabajar en el área de FRONT-END porque soy capaz de entender los requerimientos del usuario y, a su vez, lograr una buena experiencia de usuario.",
      text_2_part_1: "Igualmente, puedo trabajar en cualquier área. Como se ve en la sección de",
      text_link_1: "proyectos",
      text_2_part_2: ", cuento con dos aplicaciones desarrolladas FULL-STACK completamente funcionales.",
      text_3_part_1: "Estoy interesado en seguir mejorando mi conocimiento tanto con las",
      text_link_2: "tecnologías",
      text_3_part_2: "que suelo utilizar como en las buenas prácticas que debe tener todo desarrollador.",
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
      let textMainColor = '';
      let textLinkColor = '';
      let hoverTextLinkColor = '';
      let borderColorImage = '';
      let decorationColor = '';

      switch (colorMain) {
        case 'emerald':
          textMainColor = tone === 'dark' ? "text-emerald-600" : "text-emerald-600";
          textLinkColor = tone === 'dark' ? "text-emerald-500" : "text-emerald-500";
          hoverTextLinkColor = tone === 'dark' ? "hover:text-emerald-400" : "hover:text-emerald-400";
          borderColorImage = tone === 'dark' ? "border-emerald-600" : "border-emerald-600";
          decorationColor = tone === 'dark' ? "decoration-emerald-600" : "decoration-emerald-600";

          break;
        case 'rose':
          textMainColor = tone === 'dark' ? "text-rose-600" : "text-rose-600";
          textLinkColor = tone === 'dark' ? "text-rose-500" : "text-rose-500";
          hoverTextLinkColor = tone === 'dark' ? "hover:text-rose-400" : "hover:text-rose-400";
          borderColorImage = tone === 'dark' ? "border-rose-600" : "border-rose-600";
          decorationColor = tone === 'dark' ? "decoration-rose-600" : "decoration-rose-600";

          break;
        case 'blue':
          textMainColor = tone === 'dark' ? "text-blue-600" : "text-blue-600";
          textLinkColor = tone === 'dark' ? "text-blue-500" : "text-blue-500";
          hoverTextLinkColor = tone === 'dark' ? "hover:text-blue-400" : "hover:text-blue-400";
          borderColorImage = tone === 'dark' ? "border-blue-600" : "border-blue-600";
          decorationColor = tone === 'dark' ? "decoration-blue-600" : "decoration-blue-600";

          break;
        case 'yellow':
          textMainColor = tone === 'dark' ? "text-yellow-600" : "text-yellow-600";
          textLinkColor = tone === 'dark' ? "text-yellow-500" : "text-yellow-500";
          hoverTextLinkColor = tone === 'dark' ? "hover:text-yellow-400" : "hover:text-yellow-400";
          borderColorImage = tone === 'dark' ? "border-yellow-600" : "border-yellow-600";
          decorationColor = tone === 'dark' ? "decoration-yellow-600" : "decoration-yellow-600";

          break;
        default:
          break;
      }

      setClassesTones({
        dark: {
          textMainColor: textMainColor,
          bgOpacityMain: "bg-opacity-10",
          textColorMain: "text-white",
          bgTextInfo: "bg-white",
          bgOpacityTextInfo: "bg-opacity-10",
          textOpacity: "text-opacity-100",
          hoverBgColor: "hover:bg-white",
          hoverBgOpacity: "hover:bg-opacity-10",
          textLinkColor: textLinkColor,
          hoverTextLinkColor: hoverTextLinkColor,
          borderColorImage: borderColorImage,
          decorationColor: decorationColor,
        },
        light: {
          textMainColor: textMainColor,
          bgOpacityMain: "bg-opacity-100",
          textColorMain: "text-black",
          bgTextInfo: "bg-black",
          bgOpacityTextInfo: "bg-opacity-5",
          textOpacity: "text-opacity-60",
          hoverBgColor: "hover:bg-black",
          hoverBgOpacity: "hover:bg-opacity-10",
          textLinkColor: textLinkColor,
          hoverTextLinkColor: hoverTextLinkColor,
          borderColorImage: borderColorImage,
          decorationColor: decorationColor,
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

  //USER ITERACTION
  const [openSocial, setOpenSocial] = useState(false)

  function whatsAppContact() {
    const phoneNumber = '+543413466408';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    window.open(whatsappUrl, '_blank');
  }

  function emailContact() {
    const emailAddress = 'pablo7kamp@gmail.com';
    window.open('mailto:' + emailAddress);
  }

  function gitHubContact() {

    window.open("https://github.com/pablodKampmann", '_blank');
  }

  return (
    <div className={`${classes?.textColorMain} flex flex-col justify-center items-center h-full pb-[6%]`}>
      <div className={`w-[50%] h-[65%] flex flex-col justify-start  p-8 relative bg-white ${classes?.bgOpacityMain} rounded-2xl shadow-2xl`}>
        <div className=''>
          <h2 className='uppercase flex items-center  laptop:text-lg desktop:text-xl text-opacity-80'>{texts?.title_1}(  <span className={` underline ${classes?.decorationColor}`}> {texts?.title_2}</span>) <FaDev className={`ml-4 ${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} p-1 rounded ${classes?.textMainColor}`} size={28} /></h2>
          <h1 className={`${classes?.textMainColor} font-semibold laptop:text-3xl desktop:text-4xl `}>Pablo Kampmann</h1>
        </div>
        <div className='w-[70%] space-y-4  laptop:text-sm desktop:text-lg  mt-4'>
          <p className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2 rounded-md`}>{texts?.text_1}</p>
          <p className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo}  py-1 px-2  rounded-md`}>{texts?.text_2_part_1} <a onClick={() => router.push('/work')} className={`${classes?.textLinkColor} ${classes?.hoverTextLinkColor} hover:cursor-pointer transition duration-150`}>{texts?.text_link_1}</a>{texts?.text_2_part_2}</p>
          <p className={`${classes?.bgTextInfo} ${classes?.bgOpacityTextInfo} py-1 px-2  rounded-md`}>{texts?.text_3_part_1} <a onClick={() => router.push('/tech')} className={`${classes?.textLinkColor} ${classes?.hoverTextLinkColor} hover:cursor-pointer transition duration-150`}>{texts?.text_link_2} </a>{texts?.text_3_part_2}</p>
        </div>
        <div className='absolute -top-10 -right-10'>
          <Image placeholder='blur' blurDataURL={imageBlur} className={`rounded-full border-4  ${classes?.borderColorImage}  shadow-2xl object-cover w-[200px] h-[200px]`} quality={100} width={959} height={1280} priority={true} src='/me-image.jpg' alt="me-image" />
          {openSocial && (
            <div className=''>
              <button onClick={whatsAppContact} className={`absolute animate-move-whatsapp cursor-pointer  ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full -left-12 top-[45%]`}>
                <IoLogoWhatsapp size={28} className={`${classes?.textColorMain} ${classes?.textOpacity} `} />
              </button>
              <button onClick={emailContact} className={`absolute animate-move-email cursor-pointer  ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full -left-8 top-[70%]`}>
                <FaEnvelope size={24} className={`${classes?.textColorMain} ${classes?.textOpacity} `} />
              </button>
              <button onClick={gitHubContact} className={`absolute animate-move-gitHub cursor-pointer  ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full left-0 top-[90%]`}>
                <FaGithub size={28} className={`${classes?.textColorMain} ${classes?.textOpacity} `} />
              </button>
            </div>
          )}
          <button onClick={() => setOpenSocial(!openSocial)} className={`absolute cursor-pointer transition duration-150 ${classes?.hoverBgColor} ${classes?.hoverBgOpacity} p-2 rounded-full  top-[110%] right-[40%] `}>
            {openSocial ? (
              <CgClose size={20} className={`${classes?.textColorMain} ${classes?.textOpacity} `} />
            ) : (
              <SlOptionsVertical size={20} className={`${classes?.textColorMain} ${classes?.textOpacity}  animate-[spin_5s_ease-in-out_infinite]`} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}