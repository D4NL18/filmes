import Item from '../Item/item'
import Styles from './posts.module.css'

export default function Posts({ posts, searchTerm }) {
    return (
        <div className={Styles.posts}>
            {posts.map((val, key) => {
                return (
                    <Item
                        text={val.title}
                        key={key}
                        path={val.poster_path} />
                )
            })}
        </div>
    )
}