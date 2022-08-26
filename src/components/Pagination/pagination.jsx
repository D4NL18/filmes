import Styles from './pagination.module.css'
import Pagination from '@mui/material/Pagination';


export default function PaginationComponent({ setPage, totalPages }) {

    const handleChange = (page) => {
        setPage(page)
        window.scroll(0, 0)
    }


    return (
        <Pagination
            count={totalPages}
            shape="rounded"
            onChange={(e) => handleChange(e.target.textContent)}
            className={Styles.pagination}
            color="primary"
            />
    )
}