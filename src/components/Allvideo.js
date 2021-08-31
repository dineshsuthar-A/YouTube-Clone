import React, { useState, useEffect } from 'react'
import Videocard from './Videocard'
import './allvideo.css'
import Axios from 'axios'

export default function Allvideo() {

    const [list, setList] = useState([]);

    useEffect(() => {
        getdata();
    }, []);



    const getdata = () => {
        Axios.get("https://www.googleapis.com/youtube/v3/videos", {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 20,
                key: 'AIzaSyBPPdwjl4eyXIKfLIWvHc74CcoDYvunNk4'
            }
        }).then((response) => {
            setList(response.data.items);
        });
    };



    return (

        <div className="videospace" >

            {
                list.map((video, index) =>

                    <Videocard
                        Avatarsource="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"
                        key={index}
                        Source={video.snippet.thumbnails.medium.url}
                        Title={video.snippet.title}
                        Channel={video.snippet.channelTitle}
                        id={video.id}
                        Views="3.5 M Views"
                        Timestamp="3 days ago" />
                )
            }

        </div>
    )
}
