
import React, { useState, useEffect } from 'react'
import './search.css'
import Searchitem from './Searchitem'
import Axios from 'axios'
import { useParams } from "react-router-dom"


export default function Search(props) {
    const [list, setlist] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const routeParams = useParams();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getdata = () => {
        console.log(props.location);
        Axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                part: "snippet",
                key: "AIzaSyBPPdwjl4eyXIKfLIWvHc74CcoDYvunNk4",
                type: "video",
                q: props.location.state.query
            }
        }).then((response) => {
            setlist(response.data.items);
        });


    }
    useEffect(() => {
        getdata();
    }, [getdata, props.location.state.query]);

    return (
        <div>{
            list.map((video, index) =>
                <Searchitem
                    key={index}
                    source={video.snippet.thumbnails.medium.url}
                    channel={video.snippet.channelTitle}
                    title={video.snippet.title}
                    id={video.id}
                    discription={video.snippet.description} />
            )
        }

        </div>
    )
}
