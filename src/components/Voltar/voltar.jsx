import Styles from './voltar.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Voltar() {
    return (
        <a className={Styles.voltar} href="/">
            <ArrowBackIcon className={Styles.seta} color="white"/>
        </a>
    )
}



