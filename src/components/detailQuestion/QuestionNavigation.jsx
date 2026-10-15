import arrowBackNextIcon from '../../assets/arrow-down-header.svg'

export default function QuestionNavigation() {
    return (
        <div className='questionNavigation-card'>
            <button className='questionNavigation-btn'>
                <img style={{transform: 'rotate(90deg)'}}
                    src={arrowBackNextIcon} alt='Previous Icon'/>
                Предыдущий
            </button>
            <button className='questionNavigation-btn'>
                Следующий
                <img style={{transform: 'rotate(270deg)'}}
                     src={arrowBackNextIcon} alt='Next Icon'/>
            </button>
        </div>
    )
}