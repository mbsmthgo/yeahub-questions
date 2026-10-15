import arrowDownUpIcon from '../../assets/arrow-down.svg'
import {useState} from "react";

export default function DetailAnswerCard({longAnswer}) {
    const [isFull, setIsFull] = useState(false)
    return (
        <div className='detailAnswer-card'>
            <h3 className='detailAnswer-title'>Развёрнутый ответ</h3>
            <div className={`detailAnswer-description ${!isFull ? 'clipped' : '' }`}
                 dangerouslySetInnerHTML={{__html: `<p>${longAnswer}</p>`}}/>
            <button onClick={() => setIsFull(prev => !prev)}
                className='detailAnswer-btn'>
                {isFull ? 'Свернуть' : 'Развернуть'}
                <img style={{transform: `${isFull ? 'rotate(180deg)' : ''}`}}
                    src={arrowDownUpIcon} alt='Arrow Up/Down Icon'/>
            </button>
        </div>
    )
}