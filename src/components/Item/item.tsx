import React from 'react'
import'./item.css'

interface IProps {
    id: number;
    poster_path: string;
    title: string;
}

export const Item:React.FC<IProps> = (props) => {
    return (
        <a className="entireItem" href={`/descricao/${props.id}`} >
            <img
                className="itemBox-Item"
                src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
                alt="Poster"
            />
            <h3 className="title-Item">
                {props.title}
            </h3>
        </a >
    )
}

export default Item;