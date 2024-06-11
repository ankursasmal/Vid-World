    import React, { createContext, useContext, useEffect, useState } from 'react';
    // import VedioRunpage from './VedioRunpage';
    import style from './ClickVedioSearchImg.module.css'
     import {Link} from 'react-router-dom'
     const ClickSearchID = createContext();
     const Clickurl = createContext();

    //  props resive korla app a sab likta hoba tai redux toolkit use kora value asba
    function FrontimgSearch({clickvalue}) {
         let [ClickResults, setClickResults] =useState([]);
        const [cliclVideoId, setClickVideoId] = useState('');
    let[show,setshow]=useState(false); 
       let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyCuQrip2LNCteALTv7_BLsrykbuawoIBMk&maxResults=5';

        async function searchVideos() {
            try {
                const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${clickvalue}&key=AIzaSyBH13omGAg4EhFKIM56okxYCXW89FxvHUI`);
                const data = await res.json();
                const { items } = data;
                setClickResults(items);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        }
    
        useEffect(() => {
            searchVideos();
        }, [context]);
    
        return (
            <ClickSearchID.Provider value={cliclVideoId}>
                <Clickurl.Provider value={ClickResults}>
                   <div className={`${style.textsize} my-3 flex items-center justify-between flex-wrap`}>
                    {ClickResults.map((video, index) => (
                            <div key={index} className="flex flex-col w-[85vw] h-[53vw] my-[5px] mx-4 rounded-lg md:w-[18vw] md:h-[13vw] md:[27vw]">
                           <Link to="vedios"> 
                                 <img
                                    className="w-[85vw] h-[50vw] p-[3px] rounded-lg md:w-[18vw] md:h-[10vw] md:[27vw] object-cover"
                                    src={video.snippet.thumbnails.default.url}
                                    alt=""
                                    onClick={() => {
                                       setClickVideoId(video.id.videoId);
                                        setshow(true);
                                    }}
                                /></Link> 
                                <div className="flex flex-col">
                                    <a>{video.snippet.title}</a>
                                    <a>{video.snippet.channelTitle}</a>
                                    <a>{video.snippet.publishTime}</a>
                                </div>
                            </div>
                        ))}
                        </div>
    
                 </Clickurl.Provider>
            </ClickSearchID.Provider>
        );
    }
    
    export default FrontimgSearch;
    export { ClickSearchID, Clickurl };