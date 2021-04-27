import { useState, useEffect } from "react";

import axios from "../axios.config";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const SelectedVideo = ({ video, select }) => {
    const src=`https://www.youtube.com/embed/${video.id.videoId}`;
    const [ relatedVideo, setRelatedVideo ] = useState([]);

    useEffect(() => {
        const list = video.snippet.title
        const slicedList = list.slice(0, 14);

        (async () => {
          const result = await axios
                                .get("/search",{
                                    params:{
                                        q: slicedList
                                    }
                                })
        setRelatedVideo(result.data.items)
        })();
        
    },[video.snippet.title])

    return (
        <div>
            <button onClick={() => select(null)}
                className="border-2 border-red-500 text-red-500 font-semibold rounded-lg px-6 mb-8"
            >
                <KeyboardBackspaceIcon />
            </button>
            <div className="sm:grid sm:grid-cols-2 sm:gap-8 sm:divide-x-2 sm:divide-red-500">
              
              <div className="sm:col-start-1 sm:col-end-5 mb-10">
                <iframe
                    className="w-11/12 h-2/4"
                    title={video.id.videoId}
                    src={src}>
                </iframe> 
                <p className="text-3xl font-semibold">{video.snippet.title}</p> 
                <p className="text-sm text-gray-500">{video.snippet.channelTitle}</p>
                <p className="text-lg pt-3">{video.snippet.description}</p>
              </div>
              
              <div className="sm:col-start-6 pl-5">
                {
                    relatedVideo && 
                                    relatedVideo.map(video => {
                                        return(
                                            <div key={video.id.videoId} onClick={() => select(video)} className="mb-4" >
                                            <img className="cursor-pointer hover:scale-105 transition transform" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                                            <p className="font-semibold">{video.snippet.title}</p>
                                            <p className="text-sm text-gray-500">{video.snippet.channelTitle}</p>
                                            </div>
                                    )})
                }  
              </div>
            </div>
        </div>
    )
}

export default SelectedVideo;