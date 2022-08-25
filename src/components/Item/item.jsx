import Styles from './item.module.css'

export default function Item(props) {
    return (
        <a className={Styles.item} href="/descricao" >
            <img
                className={Styles.ItemBox}
                src={`https://image.tmdb.org/t/p/original/${props.path}`}
            />
            <h3 className={Styles.title}>
                {props.text}
            </h3>
        </a>
    )
}