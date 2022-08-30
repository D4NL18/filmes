import React from 'react'
import'./catalogo.css'
import Posts from '../Posts/posts';
import Busca from '../Busca/busca'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Pagination from '../Pagination/pagination'
import { IMovie } from '../../resources/index'

export const Catalogo: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState<string>("")
    const [posts, setPosts] = useState<IMovie[]>([]);
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)
    const PATH = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0c70d0600937fa6b2433c507fd200985&page=${page}`
    const SEARCH = `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=0c70d0600937fa6b2433c507fd200985&query=${searchTerm}&page=${page}`




    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get((searchTerm) ? SEARCH : PATH)
            setPosts(res.data.results)
            setTotalPages(res.data.total_pages)
            setLoading(true)
        }
        fetchPosts()
    }, [PATH, SEARCH, searchTerm])

    return (
        <div className="entireCatalogo">
            <Busca
                setSearchTerm={setSearchTerm}
            />
            {loading ? (
                <Posts
                    posts={posts}
                    searchTerm={searchTerm}
                />
            ) : (
                <div className="spinner-border text-light" role="status" style={{margin: "2rem 0"}} />
            )}
            <Pagination
                setPage={setPage}
                page={page}
                totalPages={totalPages} />
        </div>


    )
}

export default Catalogo