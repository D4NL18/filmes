import Styles from './busca.module.css'

export default function Catalogo(props) {

    return (
        <div className={Styles.busca} >
            <input
                type="text"
                placeholder="Digite o filme que você está procurando..."
                className={Styles.input}
                onChange={(event) => {
                    props.setSearchTerm(event.target.value)
                }} />
        </div>
    )
}