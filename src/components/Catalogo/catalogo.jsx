import Styles from './catalogo.module.css'
import Posts from '../../components/Posts/posts';
import Busca from '../../components/Busca/busca'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../../components/Pagination/pagination'

export default function Catalogo() {

    const [searchTerm, setSearchTerm] = useState("")
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const PATH = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c70d0600937fa6b2433c507fd200985&page=${page}`
    const SEARCH = `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=0c70d0600937fa6b2433c507fd200985&query=${searchTerm}&page=${page}`


    useEffect(() => {

        const fetchPosts = async () => {
            const res = await axios.get((searchTerm) ? SEARCH : PATH)
            setPosts(res.data.results)
            setTotalPages(res.data.total_pages)
        }

        fetchPosts()
    })

    return (
        <div className={Styles.catalogo}>
            <Busca
                setSearchTerm={setSearchTerm}
            />
            <Posts
                posts={posts}
                searchTerm={searchTerm}
            />
            <Pagination
                setPage={setPage}
                page={page}
                totalPages={totalPages} />
        </div>


    )
}
