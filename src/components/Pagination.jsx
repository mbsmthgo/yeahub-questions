import '../styles/pagination.css'
import {generatePagesRange} from "../utils/generatePagesRange.js";

export default function Pagination({totalPages, currentPage, handlePageClick, handleNextPage, handlePreviousPage}) {
    const pages = generatePagesRange(totalPages, currentPage)
    return (
        <div className='pagination'>
            <button onClick={handlePreviousPage} disabled={currentPage <= 1}
                className='page-arrow'>
                <img src='src/assets/arrow-left.svg' alt='Arrow Left'/>
            </button>
            <div className='page-list'>
                {pages.map((page, index) => {
                    if (page === '...') {
                        return <span style={{color: '#474747'}}
                            key={`dots-${index}`}>...</span>
                    }
                    return <button onClick={() => handlePageClick(page)}
                                   disabled={currentPage === page}
                                   style={{background: currentPage === page ? '#6A0BFF' : 'transparent',
                                   color: currentPage === page ? 'white' : '#474747'}}
                        key={page} className='page-number'>{page}</button>
                })}
            </div>
            <button onClick={handleNextPage} disabled={currentPage >= totalPages}
                className='page-arrow'>
                <img style={{transform: 'rotate(180deg)'}}
                    src='src/assets/arrow-left.svg' alt='Arrow Right'/>
            </button>
        </div>
    )
}