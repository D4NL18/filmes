import Styles from './busca.module.css'
import { useState } from 'react'

export default function Catalogo(props) {

    const [filter, setFilter] = useState("")

    function doFilter() {
        props.setSearchTerm(filter)
    }

    function handleSubmit() {
        setTimeout(doFilter, 2000)
    }

    return (
        <div className={Styles.busca} >
            <input
                type="text"
                placeholder="Digite o filme que você está procurando..."
                className={Styles.input}
                onKeyUp={() => {
                    handleSubmit()
                }}
                onChange={(event) => {
                    setFilter(event.target.value)
                }}
            />
        </div>
    )
}