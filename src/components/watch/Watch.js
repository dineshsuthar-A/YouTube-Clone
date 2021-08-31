import { Avatar, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './watch.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import Videocomp from './Videocomp';
import Axios from 'axios';

export default function Watch(props) {
    const [List, setList] = useState([]);
    const [title, setTitle] = useState("");
    const [channelTitle, setchannelTitle] = useState("");
    const [description, setdescription] = useState("");
    const [views, setViews] = useState("");
    const [likes, setLikes] = useState("");
    const [dislikes, setDislikes] = useState("");


    const getdata = () => {
        Axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                key: "AIzaSyBPPdwjl4eyXIKfLIWvHc74CcoDYvunNk4",
                part: "snippet",
                type: "video",
                relatedToVideoId: props.match.params.id

            }
        }).then((Response) => {
            setList(Response.data.items);
        });
    }
    const getStatistics = () => {
        Axios.get("https://www.googleapis.com/youtube/v3/videos", {
            params: {
                key: "AIzaSyBPPdwjl4eyXIKfLIWvHc74CcoDYvunNk4",
                part: "statistics",
                id: props.match.params.id

            }
        }).then((Response) => {
            setViews(Response.data.items[0].statistics.viewCount);
            setLikes(Response.data.items[0].statistics.likeCount);
            setDislikes(Response.data.items[0].statistics.dislikeCount);


        });
    }
    const getVideoData = () => {
        Axios.get("https://www.googleapis.com/youtube/v3/videos", {
            params: {
                key: "AIzaSyBPPdwjl4eyXIKfLIWvHc74CcoDYvunNk4",
                part: "snippet",
                id: props.match.params.id
            }
        }).then((response) => {
            setTitle(response.data.items[0].snippet.title);
            setchannelTitle(response.data.items[0].snippet.channelTitle);
            setdescription(response.data.items[0].snippet.description);
        })
    }
    useEffect(() => {
        getdata();
        getVideoData();
        getStatistics();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.id]);

    return (
        <div className="watch">
            <div className="videoPlayer">
                <iframe src={"https://www.youtube.com/embed/" + props.match.params.id} title="videoplay" className="video" />
                <div className="videoInfo">
                    <p className="videoTitle"> {title} </p>
                    <p style={{
                        display: "flex",
                        color: "gray",
                        justifyContent: "space-between"
                    }}>{views + " Views"} <span className="likes"><ThumbUpIcon style={{ marginLeft: "10px", marginRight: "4px" }} /> {likes}  <ThumbDownIcon style={{ marginLeft: "10px", marginRight: "4px", marginTop: "6px" }} /> {dislikes}
                            <ShareIcon style={{ marginLeft: "10px", marginRight: "4px" }} />Share</span></p>
                    <hr />
                    <div className="channelDetail">
                        <div className="channel">
                            <Avatar />
                            <h4 style={{ marginLeft: "10px" }}>{channelTitle}</h4>
                        </div>
                        <Button style={{
                            backgroundColor: "red",
                            color: "white",
                            width: "100px",
                            height: "40px",
                            borderRadius: "0px"
                        }}>SUBSCRIBE</Button>
                    </div>
                    <div className="Discription" style={{ paddingTop: "40px" }}>
                        {description}
                    </div>
                    <hr />

                </div>
            </div>
            <div className="suggestions">
                <h3 style={{ color: "gray", fontSize: "14px", fontWeight: "bold", marginTop: "-6px" }}>More Next</h3>
                {
                    List.map((video, index) =>
                        <Videocomp
                            source={video.snippet.thumbnails.medium.url}
                            title={video.snippet.title}
                            id={video.id}
                            channelname={video.snippet.channelTitle} />
                    )
                }
            </div>

        </div >
    )
}
