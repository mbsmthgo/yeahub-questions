import {memo} from "react";

const FilterSection = memo(function FilterSection({dataArr, title, error, filterKey, onToggle, filters}) {

    const isActive = (item) => {
        if (Array.isArray(filters)) {
            return filters.includes(item.id ?? item)
        }
        return filters === (item.id ?? item)
    }

    return (
        <div>
            <p className='filter-title'>{title}</p>
            {error && <p className='error-message'>Не удалось загрузить данные: {error}</p>}
            <div className='filterItems-container'>
                {dataArr?.map(item => (
                    <button onClick={() => onToggle(filterKey, item.id ?? item)}
                        className={`filterItem ${isActive(item) ? 'activeItem' : ''}`} key={item.id ?? item}>
                        {item.title ?? item}</button>
                ))}
            </div>
        </div>
    )
})

export default FilterSection