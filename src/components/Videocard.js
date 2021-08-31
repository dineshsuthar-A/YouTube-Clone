import { Avatar } from '@material-ui/core'
import React from 'react'
import './videocard.css'
import { Link } from 'react-router-dom'

export default function Videocard(props) {
    return (
        <div className="videocard">
            <Link to={{
                pathname: '/watch/' + props.id
            }}>
                <img src={props.Source} alt="No Internet" className="thumbnail" /> </Link>
            <div className="video_info">

                <Avatar src={props.Avatarsource} alt={props.Channel} />
                <div className="video_detail">
                    <p className="title">{props.Title}</p>
                    <p>{props.Channel}</p>
                    <p>{props.Views} • {props.Timestamp}</p>
                </div>

            </div>


        </div>
    )
}
