import figmaImage from '../../assets/figma-backup.svg'
import questionInfoIcon from '../../assets/questionInfo.svg'
import {useMediaQuery} from "../../hooks/useMediaQuery.js";

export default function QuestionHeaderCard({title, description, setInfoOpen}) {
    const isMobile = useMediaQuery('(max-width: 575px)')
    return (
        <div className='questionHeader-card'>
            <img className='question-image' src={figmaImage} alt='Figma Image'/>
            <div className='question-about-container'>
                <div style={{display: 'flex', alignItems: 'start'}}>
                    <h2 className='question-title'>{title}</h2>
                    {isMobile && (<button onClick={() => setInfoOpen(prev => !prev)}
                                          className='menu-btn'>
                        <img src={questionInfoIcon} alt='Question Info Button'/>
                    </button>)}
                </div>
                <p className='question-description'>{description}</p>
            </div>
            {!isMobile && (<button onClick={() => setInfoOpen(prev => !prev)}
                                   className='menu-btn'>
                <img src={questionInfoIcon} alt='Question Info Button'/>
            </button>)}
        </div>
    )
}