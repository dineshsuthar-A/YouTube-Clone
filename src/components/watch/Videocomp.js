import React from 'react'
import { Link } from 'react-router-dom'
import './videocomp.css'

export default function Videocomp(props) {
    console.log(props);
    return (
        <div className="VideoComponent">
            <Link to={{
                pathname: '/watch/' + props.id.videoId
            }}><img className="Image" src={props.source} alt="Not loaded.." /></Link>
            <div className="VideoInfo">
                <h4>{props.title}</h4>
                <p>{props.channelname}</p>
            </div>

        </div>
    )
}
