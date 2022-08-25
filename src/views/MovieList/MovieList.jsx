import Styles from './MovieList.module.css'
import Catalogo from '../../components/Catalogo/catalogo'

export default function App() {
    return (
        <div className={Styles.entirePage}>
            <header className={Styles.header}>
                <h1 className={Styles.pageTitle}>Startapp Filmes</h1>
            </header>
            <body className={Styles.body}>
                <Catalogo className={Styles.catalogo} />
            </body>
        </div>
    );
}
