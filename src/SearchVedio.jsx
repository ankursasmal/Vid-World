import React, { useEffect, useState } from 'react'

function SearchVedio({seavchval}) {
    let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyBVT5-sJgmeNByN7a8o7spPyxGU371keMQ&maxResults=4';
 let [arr,setarr]=useState([]);
   
    //***  below use effect hook under kora kaj korala hoto
     async function seachh(){
  
       let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${seavchval}&key=AIzaSyBLlZL-IEq1I8eDpxfFXg6sxLaJ64hCYa8`);
       let data=await res.json();
    let {items}=data;
         setarr(items);
}
// for all vedio use Effect dependency none only 1 time work But in seacch  case {seavchval}
// janno bara bar api valu render so useEffect->last moment work and disply change
useEffect(()=>{
     seachh();
},[seavchval]);
  return (
       <div className='my-3 flex items-center justify-between flex-wrap'>
       {/* ifream disply korar media  src="https://www.youtube.com/embed/as ->it is only add (vedioId)" */}
       {arr.map((e,i) => {
          let {id}=e;
 
  return (
       <iframe key={i} className='	 w-[85vw] h-[50vw]  m-4 rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={`https://www.youtube.com/embed/${id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen"  ></iframe>  
   )
 
})  
}
     </div>
  )
}

export default SearchVedio
