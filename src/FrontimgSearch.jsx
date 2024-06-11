import React, { createContext, useContext, useEffect, useState } from 'react';
 import style from './FrontimgSearch.module.css';
import { Servalue } from './App';
import {Link} from 'react-router-dom'
const SearchUrl = createContext();
const FrontimgSearchID = createContext();

function FrontimgSearch() {
    let apikey='AIzaSyAa6ZYHs9CZx3AEwZiqmoOjRqei5Gt3sFY';
    const context = useContext(Servalue);
    let [searchResults, setSearchResults] =useState([]);
    const [selectedVideoId, setSelectedVideoId] = useState('');
let[show,setshow]=useState(false);
    async function searchVideos() {
        try {
            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${context}&key=AIzaSyCuQrip2LNCteALTv7_BLsrykbuawoIBMk`);
            const data = await res.json();
            const { items } = data;
            setSearchResults(items);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    }

    useEffect(() => {
        searchVideos();
    }, [context]);

    return (
        <FrontimgSearchID.Provider value={selectedVideoId}>
            <SearchUrl.Provider value={searchResults}>
               <div className={`${style.textsize} my-3 flex items-center justify-between flex-wrap`}>
                {searchResults.map((video, index) => (
                        <div key={index} className="flex flex-col w-[85vw] h-[53vw] my-[5px] mx-4 rounded-lg md:w-[18vw] md:h-[13vw] md:[27vw]">
                       <Link to="vedio"> 
                             <img
                                className="w-[85vw] h-[50vw] p-[3px] rounded-lg md:w-[18vw] md:h-[10vw] md:[27vw] object-cover"
                                src={video.snippet.thumbnails.default.url}
                                alt=""
                                onClick={() => {
                                     setSelectedVideoId(video.id.videoId);
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

             </SearchUrl.Provider>
        </FrontimgSearchID.Provider>
    );
}

export default FrontimgSearch;
export { FrontimgSearchID, SearchUrl };
