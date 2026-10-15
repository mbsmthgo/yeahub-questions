import figmaMiniIcon from '../../assets/figma-backup-miniIcon.svg'
import closeIcon from "../../assets/close.svg";

export default function QuestionTagsCard({complexity, rate, skills, keywords, author, infoOpen, setInfoOpen}) {
    return (
        <div className={`search-container ${infoOpen ? 'open' : ''}`}>
            <div className='questionTag-container'>
                {infoOpen && <button className='close-btn' onClick={() => setInfoOpen(false)}>
                    <img src={closeIcon} alt='Close Icon'/>
                </button>}
                <p className='questionTag-title'>Уровень:</p>
                <div className='question__badges'>
                <span className='question__badge'>
                Сложность: <span className='question__badge-icon'>{complexity}</span>
                </span>
                    <span className='question__badge'>
                Рейтинг: <span className='question__badge-icon'>{rate}</span>
                </span>
                </div>
            </div>
            <div className='questionTag-container'>
                <p className='questionTag-title'>Навыки:</p>
                <div className='filterItems-container'>
                    {skills?.map(skill => (
                        <span key={skill.id}
                            className='questionTag-filterItem'>
                            <img src={figmaMiniIcon} alt='Figma Icon'/>
                            {skill.title}
                    </span>
                    ))}
                </div>
            </div>
            <div className='questionTag-container'>
                <p className='questionTag-title'>Ключевые слова:</p>
                <div className='tags-container'>
                    {keywords?.map(keyword => (
                        <span key={keyword}
                            className='questionTag-tag'>#{keyword}</span>
                    ))}
                </div>
            </div>
            <p className='questionTag-authorString'>
                Автор: <span className='questionTag-author'>{author}</span>
            </p>
        </div>
    )
}