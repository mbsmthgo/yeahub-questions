import '../styles/main.css'
import Questions from "./Questions.jsx";
import FilteredSearch from "./FilteredSearch.jsx";
import {useCallback, useEffect, useState} from "react";
import {getQuestions} from "../api/apiQuestions.js";

export default function MainContent() {
    const [questions, setQuestions] = useState([])
    const [error, setError] = useState(null)
    const [open, setOpen] = useState([])

    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 10
    const totalPages = questions?.total !== undefined ? Math.ceil(questions?.total / pageSize) : 1

    const [filters, setFilters] = useState({
        search: '',
        specialization: null,
        skills: [],
        complexity: [],
        rate: []
    })

    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const data = await getQuestions(currentPage, pageSize, filters)
                setQuestions(data)
            } catch (error) {
                setError(error.message)
            }
        }
        fetchQuestions()
    }, [currentPage, filters])

    const handleQuestionToggle = useCallback((questionId) => {
        setOpen(prev => {
            return prev.includes(questionId) ? prev.filter(question => question !== questionId)
                : [...prev, questionId]
        })
    }, [])

    const handleNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }, [currentPage, totalPages])
    const handlePreviousPage = useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }, [currentPage])
    const handlePageClick = useCallback((pageNumber) => {
        setCurrentPage(pageNumber)
    }, [])

    return (
        <main className='main'>
            <Questions questions={questions} totalPages={totalPages} currentPage={currentPage} error={error} open={open}
                       handleQuestionToggle={handleQuestionToggle} handleNextPage={handleNextPage}
                       handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}
                       setMenuOpen={setMenuOpen}/>
            <FilteredSearch setFilters={setFilters} filters={filters}
                            menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </main>
    )
}