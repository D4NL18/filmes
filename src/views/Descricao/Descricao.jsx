import Styles from './Descricao.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Descricao() {

    const { id } = useParams()
    const [posts, setPosts] = useState([])

    const PATH = `https://api.themoviedb.org/3/movie/${id}?api_key=0c70d0600937fa6b2433c507fd200985`

    useEffect(() => {

        const fetchPosts = async () => {
            const res = await axios.get(PATH)
            setPosts(res.data)
        }

        fetchPosts()
    })

    return (
        <div className={Styles.descricao} >
            <header className={Styles.header}>
                <h1 className={Styles.title}>
                    {posts.title}
                </h1>
            </header>
            <body className={Styles.body}>
                <section className={Styles.secaoImg}>
                    <img
                        src={`https://image.tmdb.org/t/p/original/${posts.poster_path}`}
                        alt="Poster"
                        className={Styles.imagem}
                    />
                </section>
                <section className={Styles.secaoTextos}>
                    <p className={Styles.texto}>
                        Lançamento: {posts.release_date}
                    </p>
                    <p className={Styles.texto}>
                        {posts.overview}
                    </p>
                </section>
            </body>
        </div>
    )
}