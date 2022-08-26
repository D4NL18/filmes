import Item from '../Item/item'
import Styles from './posts.module.css'

export default function Posts({ posts }) {
    return (
        <div className={Styles.posts}>
            {posts.map((val, key) => {
                return (
                    <Item
                        properties={val}
                        key={key}
                        />
                )
            })}
        </div>
    )
}