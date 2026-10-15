import '../styles/filteredSearch.css'
import ApiFilters from "./ApiFilters.jsx";
import FilterSection from "./FilterSection.jsx";
import {useCallback, useEffect, useState} from "react";
import {useDebounce} from "../hooks/useDebounce.js";
import {useSearchParams} from "react-router-dom";
import closeIcon from '../assets/close.svg'
import searchIcon from '../assets/search.svg'

const complexityLevels = ['1-3', '4-6', '7-8', '9-10']
const rate = ['1', '2', '3', '4', '5']
const statuses = ['Изученные', 'Не изученные', 'Все']

export default function FilteredSearch({filters, menuOpen, setMenuOpen}) {

    const [searchParams, setSearchParams] = useSearchParams()

    const [searchValue, setSearchValue] = useState(filters.search)
    const debouncedSearch = useDebounce(searchValue)
    useEffect(() => {
        if (filters.search === debouncedSearch) return
        const newParams = new URLSearchParams(searchParams)
        if (debouncedSearch) {
            newParams.set('search', debouncedSearch)
        } else {
            newParams.delete('search')
        }
        newParams.delete('page')
        setSearchParams(newParams, {replace: true})
    }, [debouncedSearch, filters.search, searchParams, setSearchParams])

    useEffect(() => {
        setSearchValue(filters.search)
    }, [filters.search])

    const handleFilterChange = useCallback((filterKey, value) => {
        const newParams = new URLSearchParams(searchParams)
        const current = filters[filterKey]
        const stringValue = String(value)
        let nextValue
        if (Array.isArray(current)) {
            nextValue = current.includes(stringValue) ? current.filter(item => item !== stringValue) : [...current, stringValue]
            if (nextValue.length > 0) {
                newParams.set(filterKey, nextValue.join(','))
            } else {
                newParams.delete(filterKey)
            }
        } else {
            nextValue = current === stringValue ? null : stringValue
            if (!nextValue) {
                newParams.delete(filterKey)
            } else {
                newParams.set(filterKey, nextValue)
            }
        }
        newParams.delete('page')
        setSearchParams(newParams)

    }, [filters, searchParams, setSearchParams])

    return (
        <section className={`search-container ${menuOpen ? 'open' : 'main'}`}>
            {menuOpen && <button className='close-btn' onClick={() => setMenuOpen(false)}>
                <img src={closeIcon} alt='Close Icon'/>
            </button>}
            <div className='search-bar'>
                <img className='search-icon' src={searchIcon} alt='Search Icon'/>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                       className='search-input' type='text' placeholder='Введите запрос...'/>
            </div>
            <ApiFilters title='Специализация' query='specializations' filterKey='specialization'
                        onToggle={handleFilterChange}
                        filters={filters.specialization}/>
            <ApiFilters title='Навыки' query='skills' filterKey='skills'
                        onToggle={handleFilterChange}
                        filters={filters.skills}/>
            <FilterSection title='Уровень сложности' dataArr={complexityLevels}
                           filterKey='complexity' onToggle={handleFilterChange}
                           filters={filters.complexity}/>
            <FilterSection title='Рейтинг' dataArr={rate}
                           filterKey='rate' onToggle={handleFilterChange}
                           filters={filters.rate}/>
            <FilterSection title='Статус' dataArr={statuses}/>
        </section>
    )
}