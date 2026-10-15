import {memo, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import arrowDownUpIcon from '../assets/arrow-down-header.svg'
import popoverIcon from '../assets/popover.svg'
import arrowRightIcon from '../assets/arrow-left.svg'

const QuestionItem = memo(function QuestionItem({question, isOpen, onToggle}) {

    const [showPopover, setShowPopover] = useState(false)
    const popoverRef = useRef(null)
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popoverRef.current && !popoverRef.current.contains(e.target)) {
                setShowPopover(false)
            }
        }
        if (showPopover) {
            document.addEventListener('mousedown', handleClickOutside)
        }
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [showPopover])

    return (
        <li className='questions__question-container'>
            <div onClick={() => onToggle(question.id)}
                 className='questions__question-wrapper'>
                <span className='questions__question'>{question.title}</span>
                <button className='questions__arrow-btn'>
                    <img style={{transform: `${isOpen ? 'rotate(180deg)' : 'none'}`}}
                         src={arrowDownUpIcon} alt='Arrow Down/Up Icon'/>
                </button>
            </div>
            {isOpen && (
                <div className='questions__question-body'>
                    <div className='question__badges-button'>
                        <div className='question__badges'>
                                        <span className='question__badge'>Рейтинг: <span
                                            className='question__badge-icon'>
                                            {question.rate}</span></span>
                            <span className='question__badge'>Сложность: <span className='question__badge-icon'>
                                            {question.complexity}</span></span>
                        </div>
                        <div className='more-btn__container'>
                            <button onClick={() => setShowPopover(prev => !prev)}
                                className='more-btn'>
                                <img src={popoverIcon} alt='More Icon'/>
                            </button>
                            {showPopover && (
                                <div className='popover' ref={popoverRef}>
                                    <Link to={`/${question.id}`}
                                        className='popover__more-btn'>Подробнее</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='question__answer'
                         dangerouslySetInnerHTML={{__html: `<p>${question.shortAnswer}</p>`}}/>
                    <Link to={`/${question.id}`}
                        className='more-btn__mobile'>
                        Подробнее
                        <img style={{transform: 'rotate(180deg)'}}
                             src={arrowRightIcon} alt='More Icon'/>
                    </Link>
                </div>
            )}
        </li>
    )
})

export default QuestionItem