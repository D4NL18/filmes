import React from 'react'
import Item from '../Item/item'
import './posts.css'
import { IMovie } from '../../resources/index'

interface IProps {
    posts: IMovie[];
    searchTerm: string;
}

export const Posts:React.FC <IProps> = (props) => {
    return (
        <div className="entirePosts">
            {props.posts.map((val, key) => {
                return (
                    <Item
                        id={val.id}
                        poster_path={val.poster_path}
                        title={val.title}
                        key={key}
                        />
                )
            })}
        </div>
    )
}

export default Posts