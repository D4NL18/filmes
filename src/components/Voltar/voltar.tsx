import React from 'react'
import './voltar.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Voltar: React.FC = () => {
    return (
        <a className="entireVoltar" href="/">
            <ArrowBackIcon color="inherit"/>
        </a>
    )
}

export default Voltar

