import Item from '../Item/item'
import Styles from './posts.module.css'

export default function Posts({ posts, searchTerm }) {
    return (
        <div className={Styles.posts}>
            {posts.filter((val) => {
                if (searchTerm === "") {
                    return val
                }
                else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                } else {
                    return null
                }
            }).map((val, key) => {
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