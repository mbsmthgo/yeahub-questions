import '../styles/filteredSearch.css'
import ApiFilters from "./ApiFilters.jsx";
import FilterSection from "./FilterSection.jsx";
import {useCallback, useEffect, useState} from "react";
import {useDebounce} from "../hooks/useDebounce.js";

const complexityLevels = ['1-3', '4-6', '7-8', '9-10']
const rate = ['1', '2', '3', '4', '5']
const statuses = ['Изученные', 'Не изученные', 'Все']

export default function FilteredSearch({setFilters, filters, menuOpen, setMenuOpen}) {

    const [searchValue, setSearchValue] = useState('')
    const debouncedSearch = useDebounce(searchValue)
    useEffect(() => {
        setFilters(prev => {
            if (prev.search === debouncedSearch) return prev
            return {...prev, search: debouncedSearch}
        })
    }, [debouncedSearch, setFilters])

    const handleSetFilter = useCallback((filterKey, value) => {
        setFilters(prev => {
            const current = prev[filterKey]
            let nextValue;
            if (Array.isArray(current)) {
                nextValue = current.includes(value)
                ? current.filter(item => item !== value)
                    : [...current, value]
            } else {
                nextValue = current === value ? null : value
            }
            return {...prev, [filterKey]: nextValue}
        })
    }, [setFilters])

    return (
        <section className={`search-container ${menuOpen ? 'open' : ''}`}>
            {menuOpen && <button className='close-btn' onClick={() => setMenuOpen(false)}>
                <img src='src/assets/close.svg' alt='Close Icon' />
            </button>}
            <div className='search-bar'>
                <img className='search-icon' src='src/assets/search.svg' alt='Search Icon'/>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                    className='search-input' type='text' placeholder='Введите запрос...'/>
            </div>
            <ApiFilters title='Специализация' query='specializations' filterKey='specialization'
                        onToggle={handleSetFilter}
                        filters={filters.specialization} />
            <ApiFilters title='Навыки' query='skills' filterKey='skills'
                        onToggle={handleSetFilter}
                        filters={filters.skills} />
            <FilterSection title='Уровень сложности' dataArr={complexityLevels}
                           filterKey='complexity' onToggle={handleSetFilter}
                           filters={filters.complexity} />
            <FilterSection title='Рейтинг' dataArr={rate}
                           filterKey='rate' onToggle={handleSetFilter}
                           filters={filters.rate} />
            <FilterSection title='Статус' dataArr={statuses} />
        </section>
    )
}