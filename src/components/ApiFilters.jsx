import {memo, useEffect, useState} from "react";
import FilterSection from "./FilterSection.jsx";

const ApiFilters = memo(function ApiFilters({title, query, filterKey, onToggle, filters}) {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        const getCategories = async () => {
            setError(null)
            try {
                const response = await fetch(`https://api.yeatwork.ru/${query}`)
                if (!response.ok) {
                    throw new Error(`Ошибка сервера ${response.status}`)
                }
                const data = await response.json()
                setCategories(data)
            } catch (error) {
                setError(error.message)
            }
        }
        getCategories()
    }, [query])
    const visibleCategories = showAll ? categories.data : categories.data?.slice(0, 5)
    return (
            <div>
                <FilterSection title={title} dataArr={visibleCategories} error={error}
                               filterKey={filterKey} onToggle={onToggle} filters={filters} />
                <button onClick={() => setShowAll(prev => !prev)}
                    className='showAll-btn'>{showAll ? 'Скрыть' : 'Посмотреть все'}</button>
            </div>
    )
})

export default ApiFilters