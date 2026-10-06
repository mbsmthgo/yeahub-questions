import {memo} from "react";

const QuestionItem = memo(function QuestionItem({question, isOpen, onToggle}) {
    return (
        <li className='questions__question-container'>
            <div onClick={() => onToggle(question.id)}
                 className='questions__question-wrapper'>
                <span className='questions__question'>{question.title}</span>
                <button className='questions__arrow-btn'>
                    <img style={{transform: `${isOpen ? 'rotate(180deg)' : 'none'}`}}
                         src='src/assets/arrow-down.svg' alt='Arrow Icon'/>
                </button>
            </div>
            {isOpen && (
                <div className='questions__question-body'>
                    <div className='question__badges'>
                                        <span className='question__badge'>Рейтинг: <span
                                            className='question__badge-icon'>
                                            {question.rate}</span></span>
                        <span className='question__badge'>Сложность: <span className='question__badge-icon'>
                                            {question.complexity}</span></span>
                    </div>
                    <div className='question__answer'
                         dangerouslySetInnerHTML={{__html: `<p>${question.shortAnswer}</p>`}}/>
                </div>
            )}
        </li>
    )
})

export default QuestionItem