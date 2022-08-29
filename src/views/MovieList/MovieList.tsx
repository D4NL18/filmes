import React from 'react'
import './MovieList.css'
import Catalogo from '../../components/Catalogo/catalogo'

export const MovieList: React.FC = () => {
    return (
        <div className="entirePage-MovieList">
            <header className="header-MovieList">
                <h1 className="pageTitle-MovieList">Startapp Filmes</h1>
            </header>
            <body className="body-MovieList">
                <Catalogo />
            </body>
        </div>
    );
}

export default MovieList