import { useState } from "react";

import Input from "./Input";
import VideoList from "./VideoList";
import Video from "./SelectedVideo";

let list = "react js";

const Home = () => {
    const [ search, setSearch ] = useState("");
    const [ selectedVideo, setSelectedVideo ] = useState(null);
    
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        list = search;
        setSearch("")
        setSelectedVideo(null);
    }

    return (
        <div className="border-2 mt-2 pt-4 px-6 bg-gray-50">
            <Input value={search} changed={onChangeHandler} submit={onSubmitHandler} />
           
            {
                !selectedVideo ?
                                <VideoList list={list} select={setSelectedVideo} />
                              :
                                <Video video={selectedVideo} select={setSelectedVideo} />
            }
        </div>
    )
}

export default Home;