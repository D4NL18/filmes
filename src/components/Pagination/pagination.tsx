import React from 'react'
import'./pagination.css'
import Pagination from '@mui/material/Pagination';

interface IProps {
    setPage: (page: number) => void;
    totalPages: number;
    page: number;
}

export const PaginationComponent:React.FC<IProps> = (props) =>  {

    const handleChange = (page: number) => {
        props.setPage(page)
        window.scroll(0, 0)
    }


    return (
        <Pagination
            count={props.totalPages}
            shape="rounded"
            onChange={(e) => {
                const target = (e.target as HTMLButtonElement)
                if(target && target.textContent) handleChange(parseInt(target.textContent))
            }} 
            className="entirePagination"
            />
    )
}

export default PaginationComponent