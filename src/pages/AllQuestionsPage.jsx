import '../styles/allQuestionsPage.css'
import Questions from "../components/Questions.jsx";
import FilteredSearch from "../components/FilteredSearch.jsx";
import {useCallback, useEffect, useMemo, useState} from "react";
import {getQuestions} from "../api/apiQuestions.js";
import {useSearchParams} from "react-router-dom";

export default function AllQuestionsPage() {
    const [questions, setQuestions] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const pageSize = 10
    const totalPages = questions?.total !== undefined ? Math.ceil(questions?.total / pageSize) : 1

    const filters = useMemo(() => {
        return {
            search: searchParams.get('search') || '',
            specialization: searchParams.get('specialization') || null,
            skills: searchParams.get('skills') ? searchParams.get('skills').split(',') : [],
            complexity: searchParams.get('complexity') ? searchParams.get('complexity').split(',') : [],
            rate: searchParams.get('rate') ? searchParams.get('rate').split(',') : []
        }
    }, [searchParams])

    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const fetchQuestions = async () => {
            setError(null)
            setLoading(true)
            try {
                const data = await getQuestions(currentPage, pageSize, filters)
                setQuestions(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
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
            const newParams = new URLSearchParams(searchParams)
            newParams.set('page', currentPage + 1)
            setSearchParams(newParams)
        }
    }, [currentPage, totalPages, searchParams, setSearchParams])
    const handlePreviousPage = useCallback(() => {
        if (currentPage > 1) {
            const newParams = new URLSearchParams(searchParams)
            newParams.set('page', currentPage - 1)
            setSearchParams(newParams)
        }
    }, [currentPage, searchParams, setSearchParams])
    const handlePageClick = useCallback((pageNumber) => {
        const newParams = new URLSearchParams(searchParams)
        newParams.set('page', pageNumber)
        setSearchParams(newParams)
    }, [searchParams, setSearchParams])

    return (
        <main className='main'>
            <Questions questions={questions} totalPages={totalPages} currentPage={currentPage} error={error}
                       loading={loading} open={open} handleQuestionToggle={handleQuestionToggle}
                       handleNextPage={handleNextPage} handlePreviousPage={handlePreviousPage}
                       handlePageClick={handlePageClick} setMenuOpen={setMenuOpen}/>
            <FilteredSearch filters={filters}
                            menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        </main>
    )
}