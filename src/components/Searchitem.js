import { Avatar } from '@material-ui/core'
import React from 'react'
import './searchitem.css'
import { Link } from 'react-router-dom'

export default function Searchitem(props) {
    return (
        <div class="searchitem">
            <Link to={{
                pathname: '/watch/' + props.id.videoId
            }}><img src={props.source} alt="Doesn't load." /></Link>
            <div className="videoinfo">
                <h4>{props.title}</h4>
                <p className="channel">
                    <Avatar />
                    <p style={{
                        marginLeft: '10px'
                    }}>{props.channel}</p></p>
                <p style={{
                    height: '40px',
                    overflow: 'hidden'
                }}>{props.discription}</p>
            </div>
        </div >
    )
}
