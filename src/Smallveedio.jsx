import React, { useEffect, useState } from 'react'

function Smallveedio() {
    let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyBZn5AL6Kq1NVgHeyVGMrIKO7EOeL7kP50&maxResults=2';
    let [values,setval]=useState([]);

   
    //***  below use effect hook under kora kaj korala hoto
function fun(){
    fetch(url).then(res=>res.json()).then(data=>{ 
     let {items}=data;
      setval(items);
    console.log(values);
  
})
}

useEffect(()=>{
fun();
},[]);
  return (
<div className='my-3 flex items-center justify-between flex-wrap'>
       {/* ifream disply korar media  src="https://www.youtube.com/embed/as ->it is only add (vedioId)" */}
       {values.map((e,i) => {
 
  return (
       <iframe key={i} className=' w-[85vw] h-[50vw]  m-4 rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={`https://www.youtube.com/embed/${e.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen ></iframe>  
   )
 
})  
}
    </div>
  )
}

export default Smallveedio
