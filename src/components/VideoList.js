import { useState, useEffect } from "react";
import axios from "../axios.config";

const VideoList = ({list, select}) => {
    const [ videoList, setVideoList ] = useState([])
    useEffect(() => {
        (async () => {
            const result = await axios
                                    .get("/search", {
                                        params: {
                                            q: list
                                        }
                                    })
            setVideoList(result.data.items)
        })();
    }, [list])
    return(
        <div className="divide-y-2 divide-red-500">
            {
               videoList &&  
                            videoList.map(video => {
                                return(
                                      <div 
                                        key={video.id.videoId} 
                                        onClick={() => select(video)} 
                                        className="flex my-6 pt-4"
                                      >
                                        <img className="cursor-pointer hover:scale-105 transition transform" src={video.snippet.thumbnails.high.url} alt={video.snippet.title}/>
                                        <div className="pl-7">
                                            <p className="text-2xl font-semibold">{video.snippet.title}</p>
                                            <p className="text-sm text-gray-500">{video.snippet.channelTitle}</p>
                                        </div>
                                      </div>
                )
            })
            }
        </div>
    )
}

export default VideoList;