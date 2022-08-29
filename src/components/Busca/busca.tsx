import React from 'react'
import'./busca.css'
import { useState } from 'react'

interface IProps {
    setSearchTerm: (searchTerm: string) => void;
}

export const Busca: React.FC <IProps> = (props) => {

    const [filter, setFilter] = useState<string>("")

    function doFilter() {
        props.setSearchTerm(filter)
    }

    function handleSubmit() {
        setTimeout(doFilter, 2000)
    }

    return (
        <div className="entireBusca" >
            <input
                type="text"
                placeholder="Digite o filme que você está procurando..."
                className="input-Busca"
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

export default Busca;