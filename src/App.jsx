import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FcGoogle } from "react-icons/fc";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);

  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  return (
    <>
      <div class="bg-[#3C3D37]
       w-[100vw] h-fit grid grid-cols-1 px-10 py-10 lg:px-35 lg:py-20" >
       
        <div class="bg-[#3C3D37] text-white lg:bg-black md:px-10 md:rounded-2xl  lg:py-10 md:flex md:flex-col">
        <FcGoogle  class="w-12 h-12 mb-5"/>

        <div class="md: grid  md:grid-cols-2 md:gap-20">
        <div class=" grid grid-cols-1 mb-10 md:flex md:flex-col  ">
        <h2 class="text-[30px] font-light ">Sign in</h2>
        <h3 class="font-light ">with your Google Account. This account will be available to other Google apps in the browser.</h3>
        </div>


        <div class="grid grid-cols-1 gap-3">
       <input type="text " class="border px-5 py-3 w-full focus:outline-none" placeholder='Email or phone' />
       <a href="#" target='_blank' class="  mb-7 !text-sky-200 w-fit hover:bg-sky-100/10 transition-all ease-in-out duration-300 rounded-2xl px-1" >Forget email?</a>
       <h2 class="mb-6">Not your computer? Use Guest mode to sign in privately. <a href="" class="!text-sky-200 hover:!underline">Learn more about using Guest mode</a></h2>

      <div class="grid grid-cols-2 items-center  ">
        <a href='#' class="!text-sky-200 w-fit hover:bg-sky-100/10 transition-all ease-in-out duration-300 rounded-4xl px-1">Create Account</a>
        <button class="!bg-sky-200 w-30 text-black justify-self-end !rounded-3xl  cursor-pointer
         focus:!outline-none hover:!border-transparent">Next</button>
      </div>

        </div>
        
         </div>
      
       
      
       </div>

       <div class="grid grid-cols-2   items-center "> 
       
       <section class="w-50 h-10 ">
          <select name="language" id="language"  class="w-26 sm:w-fit h-full border-0 rounded-md px-3 text-white bg-transparent appearance-auto focus:outline-none focus:ring-0 justify-self-start">
          <option class="bg-black text-white" value="en-US">English (United States)</option>
    <option class="bg-black text-white " value="es-ES">Spanish (Spain)</option>
    <option class="bg-black text-white" value="fr-FR">French (France)</option>
    <option class="bg-black text-white" value="de-DE">German (Germany)</option>
    <option class="bg-black text-white" value="zh-CN">Chinese (China)</option>
          </select>
        </section>


        <div class="grid grid-cols-3 gap-2 text-white justify-self-end font-light cursor-pointer" >
          <h2 class="hover:bg-sky-100/10 transition-all ease-in-out duration-300 rounded px-2 w-13">Help</h2>
          <h2 class="hover:bg-sky-100/10 transition-all ease-in-out duration-300 rounded px-2 w-16">Privacy</h2>
          <h2 class="hover:bg-sky-100/10 transition-all ease-in-out duration-300 rounded px-3 w-15">Terms</h2>
        </div>
       </div>
      
        
        



      </div>
    </>
  )
}

export default App
