import React from 'react'
import './Descricao.css'
import Voltar from '../../components/Voltar/voltar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { IMovie } from '../../resources/index'

export const Descricao: React.FC = () => {

    const { id } = useParams()
    const [posts, setPosts] = useState<IMovie | null>(null)
    const [loading, setLoading] = useState<boolean>(true)


    const PATH: string = `https://api.themoviedb.org/3/movie/${id}?api_key=0c70d0600937fa6b2433c507fd200985`

    const fetchPosts = async () => {
        const res = await axios.get(PATH)
        const movieData:IMovie = res.data;
        setPosts(movieData)
        setLoading(false)
    }

    useEffect(() => {
        fetchPosts()
    })

    return (
        <>
            {!loading && posts ? (
                <div className="entirePage-Descricao" >
                    <header className="header-Descricao">
                        <h1 className="title-Dscricao">
                            {posts.title}
                        </h1>
                    </header>
                    <body className="body-Descricao">
                        <section className="secaoImg-Descricao">
                            <img
                                src={`https://image.tmdb.org/t/p/original/${posts.poster_path}`}
                                alt="Poster"
                                className="imagem-Descricao"
                            />
                        </section>
                        <section className="secaoTextos-Descricao">
                            <p className="texto-Descricao">
                                Lançamento: {posts.release_date}
                            </p>
                            <p className="texto-Descricao">
                                {posts.overview}
                            </p>
                        </section>
                    </body>
                    <Voltar />
                </div>
            )
                : (
                    <div className="entirePage-Descricao">
                        <div className="spinner-border text-light" role="status" style={{ margin: "2rem 0" }} />
                    </div>
                )

            }
        </>

    )
}

export default Descricao