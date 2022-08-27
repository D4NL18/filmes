import Styles from './item.module.css'

export default function Item(props) {
    return (
        <a className={Styles.item} href={`/descricao/${props.properties.id}`} >
            <img
                className={Styles.ItemBox}
                src={`https://image.tmdb.org/t/p/original/${props.properties.poster_path}`}
                alt="Poster"
            />
            <h3 className={Styles.title}>
                {props.properties.title}
            </h3>
        </a >
    )
}