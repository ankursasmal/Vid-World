 import React, { createContext, useEffect, useState } from 'react'
 import { VscThreeBars } from "react-icons/vsc";
  import { FaSearch } from "react-icons/fa";
 import { HiMicrophone } from "react-icons/hi2";
 import { MdOutlineVideoCameraBack } from "react-icons/md";
 import { FaRegBell } from "react-icons/fa6";
import Allvedio from './Allvedio';
import './App.css'
{/* grid1 icon */}
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { GoHistory } from "react-icons/go";
import { BiChevronRightSquare } from "react-icons/bi";
import { LuClock } from "react-icons/lu";
import { BiLike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Smallveedio from './Smallveedio';
import { BiBookHeart } from "react-icons/bi";

// serch vedio
import SearchVedio from './SearchVedio';
import Frontimg from './Frontimg';
import VedioRunpage from './VedioRunpage';
import FrontimgSearch from './FrontimgSearch';
import SearchVedioRunImg from './SearchVedioRunImg';
import VedioRunGrid2 from './VedioRunGrid2';
import AllimgVedioRun from './AllimgVedioRun';
// for use context
const Servalue=createContext();

 function App() {
  let [inputval,setinputval]=useState('');
  let [seavchval,setsearchval]=useState('');
let [hidevedio,sethidevedio]=useState(false);
   return (
    <Servalue.Provider value={seavchval}>
      
     <div className='w-full flex items-center  mt-4 justify-between' >
      <div className='flex items-center px-3'> 
<VscThreeBars className='md:mx-5 mx-1  threedots'/>
<img className='w-7 h-7' src="https://www.freeiconspng.com/thumbs/video-icon/blue-video-play-icon-9.jpg" alt="" />
<h1 className='font-bold text-blue-600' >Vid</h1>
<div className='flex flex-col h-7'>
<a className='text-[9px]'>IN</a>
<a></a>
</div>
</div>
<div className='flex items-center w-[50%]'> 
<div className='w-[85%] flex items-center rounded-full border-solid border-black border-[.5px] '>
  <input type="search" name="" id=""  placeholder='search' className='border-solid border-black border-[1px] py-2 rounded-l-full w-[90%] py-[6px] pl-4' value={inputval} onChange={(e)=>{
    e.preventDefault();
    setinputval(e.target.value);

  }}/>
  <FaSearch className=' text-12xl  w-[15%]' onClick={(e)=>{
    e.preventDefault();
    setsearchval(inputval);
     
  }}  />
</div>
<HiMicrophone  className='mx-4'/>

</div>
<div className='flex items-center mr-4 '>
<MdOutlineVideoCameraBack  className='mx-2'/>
<FaRegBell className='mx-2'/>
<div className='flex justify-center m-auto w-7 h-7 border-[.05px] border-solid bg-slate-400 text-white rounded-full'>
<a className='mx-2'>A</a>
</div>
</div>
</div>

 {/* main lay out */}
<div className=' grid grid-cols-12  my-4 mx-2'>

  {/* grrid 1  */}
<div className='col-span-1 lg:col-span-2 mx-[1px] lg:mx-2 '>
  <div className='flex flex-col'> 
  <div className=' lg:hidden block '> 
<div className='flex flex-col items-center  '>
   <div className='flex items-center flex-col p-1 hover:border-[.05px] rounded-lg hover:bg-gray-300 mx-2  py-[6px]'>
  <IoMdHome  className='mb-1'/>
<a className='text-[6px] md:text-[10px]'>Home</a>
 <a></a>
  </div>
  <div className='flex items-center flex-col p-1 hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <SiYoutubeshorts className=' mb-1'/>
<a className='text-[6px] md:text-[10px]'>Shorts</a>
   </div>
     <div className='flex items-center flex-col p-1 hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <MdSubscriptions  className='pl-2 mb-1 '/>
<a className='text-[5px] md:text-[9px]'>Subscriptions</a>
  
  </div>  
<hr className='my-3'/>
<div className='flex items-center flex-col p-1 hover:border-[.05px] rounded-lg hover:bg-gray-300 py-[6px] '>
<BiBookHeart className='mb-1'  />
<a className='text-[6px] md:text-[10px]'>You</a>
</div>
  </div>
  </div>
  </div>
  <div className=' lg:block hidden'> 
   <div className='flex flex-col   '>

  <div className='flex items-center hover:border-[.05px] rounded-lg hover:bg-gray-300 mx-2  py-[6px]'>
  <IoMdHome  className='pl-2 mr-3'/>
<a>Home</a>
 <a></a>
  </div>
  <div className='flex items-center hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <SiYoutubeshorts className=' pl-2 mr-3'/>
<a>Shorts</a>
   </div>
     <div className='flex items-center hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <MdSubscriptions  className='pl-2 mr-3 '/>
<a>Subscriptions</a>
  
  </div>  
<hr className='my-3'/>
<div className='flex items-center mx-2 hover:border-[.05px] rounded-lg hover:bg-gray-300 py-[6px] '>
<a className='pr-3'>You</a>
<IoIosArrowForward   />
</div>
<div className='flex items-center hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <IoMdContact className=' pl-2 mr-3'/>
<a>Your Channel</a>
   </div>
   <div className='flex items-center hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <GoHistory className=' pl-2 mr-3'/>
<a>Histioy</a>
   </div>
   <div className='flex items-center hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <BiChevronRightSquare className=' pl-2 mr-3'/>
<a>Your Vedios</a>
   </div>
   <div className='flex items-center hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <IoMdContact className=' pl-2 mr-3'/>
<a>Your Channel</a>
   </div>
   <div className='flex items-center hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <LuClock className=' pl-2 mr-3'/>
<a>Watch Later</a>
   </div>
   <div className='flex items-center hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <BiLike className=' pl-2 mr-3'/>
<a>Licked Vedios</a>
   </div>
   <div className='flex items-center hover:border-[.05px] rounded-lg hover:bg-gray-300  mx-2 py-[6px]'>
  <IoIosArrowDown className=' pl-2 mr-3'/>
<a>Show more</a>
   </div>

</div>
</div>
 </div>

{/* grid 2 */}
<div className='col-span-10 lg:col-span-9 w-[90vw] md:w-[90vw] lg:w-[82vw]'>
 <div className='flex items-center  overflow-x-scroll scrollbar'>
  <a className='but1 rounded-lg  bg-gray-400   hover:text-white hover:bg-black'>All</a>
  <a className='but3 rounded-lg bg-gray-400 hover:text-white hover:bg-black'>Music</a>
  <a className='but4 rounded-lg  bg-gray-400 hover:text-white hover:bg-black'> Computer Programmming</a>
  <a className='but5 rounded-lg bg-gray-400 hover:text-white hover:bg-black'>Bollywood Music</a>
  <a className='but2 rounded-lg bg-gray-400 hover:text-white hover:bg-black'>Civil Service Exam</a>
  <a className='p-1  rounded-lg  bg-gray-400 hover:text-white hover:bg-black'>Live</a>
  <a className='but6 rounded-lg bg-gray-400 hover:text-white hover:bg-black'>Action Thillers</a>
  <a className='p-1  rounded-lg bg-gray-400 hover:text-white hover:bg-black'>Mantras</a>
  <a className='p-1 mx-3 rounded-lg bg-gray-400 hover:text-white hover:bg-black'>Rituals</a>
  <a className='but7 rounded-lg  bg-gray-400 hover:text-white hover:bg-black' >Tamil Cinema</a>
  <a className='p-1 mx-3 rounded-lg bg-gray-400 hover:text-white hover:bg-black'>Dramedy</a>
  <a className='but8 rounded-lg bg-gray-400 hover:text-white hover:bg-black'>Indian Pop Music</a>
  <a className='p-1 mx-3 rounded-lg bg-gray-400 hover:text-white hover:bg-black'>Stocks</a>
  <a className='p-1 last-of-type: rounded-lg bg-gray-400' hover:text-white hover:bg-black>Seals</a>

  <button className='p-1 mx-3 rounded-lg bg-gray-400 hover:text-white hover:bg-black'>Watched</button>
  <a className='but9 rounded-lg bg-gray-400 hover:text-white hover:bg-black'>New For You</a>
</div>



{/* for serch vedios direct vedio */}
{/* <SearchVedio seavchval={seavchval} /> */}



{/* for alll small vedio direct vedio */}
{/* <Smallveedio/> */}

{/* a page thaka props o pass holo display hoba na mainpaga */}

  {/* <div className='block hidden'> 
<VedioRunpage seavchval={seavchval} />
</div>   */}
{/*
  <div className='block hidden'> 
<SearchVedioRunImg seavchval={seavchval}/>
</div>   */}
   

 {/*  1.  insteed of vedio i want to display image of vedio secarch or all */}
{/* {seavchval===''?
<div> <div style={{display:'none' }}> 
<SearchVedio seavchval={seavchval} />
</div>
<div style={{display:'block',visibility:'visible'}}>
     <Smallveedio/>
     
     </div>
</div>
  :<div>
  <div style={{display:'none',visibility:'hidden'}}> 
      <Smallveedio/>
 </div>
 <div style={{display:'block',visibility:'visible'}}>

 <SearchVedio seavchval={seavchval} />
 </div>
</div>
 
} */}


{/* 2. only image show on click redirect on new page main for project*/}
{seavchval===''?
<div> <div style={{display:'none' }}> 
<FrontimgSearch seavchval={seavchval} />
</div>
<div style={{display:'block',visibility:'visible'}}>
     <Frontimg/>
     
     </div>
</div>
  :<div>
  <div style={{display:'none',visibility:'hidden'}}> 
      <Frontimg/>
 </div>
 <div style={{display:'block',visibility:'visible'}}>

 <FrontimgSearch seavchval={seavchval} />
 </div>
</div>
 
} 
 {/* using img on click new page vedio run */}
{/* <FrontimgSearch/> */}
{/* hole project a jakhana use korbo sakanai props pass kor ta hoba na hola a sasa vedio asbana
  so use usecontext hook  */}
   </div>


</div>
</Servalue.Provider>
  
   )
 }
 
 export default App
 
export {Servalue}