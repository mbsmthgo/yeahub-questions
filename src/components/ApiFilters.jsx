import {memo, useEffect, useState} from "react";
import FilterSection from "./FilterSection.jsx";
import {getCategories} from "../api/apiQuestions.js";

const ApiFilters = memo(function ApiFilters({title, query, filterKey, onToggle, filters}) {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        const fetchCategories = async () => {
            setError(null)
            setLoading(true)
            try {
                const data = await getCategories(query)
                setCategories(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchCategories()
    }, [query])
    const visibleCategories = showAll ? categories.data : categories.data?.slice(0, 5)
    return (
            <div>
                <FilterSection title={title} dataArr={visibleCategories} error={error} loading={loading}
                               filterKey={filterKey} onToggle={onToggle} filters={filters} />
                <button onClick={() => setShowAll(prev => !prev)}
                    className='showAll-btn'>{showAll ? 'Скрыть' : 'Посмотреть все'}</button>
            </div>
    )
})

export default ApiFilters