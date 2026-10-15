import guruPhoto from '../../assets/guru.svg'
import tgPurpleIcon from '../../assets/tg-purple.svg'
import youtubePurpleIcon from '../../assets/youtube-purple.svg'
import profileMediaIcon from '../../assets/profile-media.svg'

export default function GuruCard() {
    return (
        <div className='guru-card'>
            <div className='guru-profile'>
                <img src={guruPhoto} alt='Guru Photo'/>
                <div>
                    <p>Руслан Куянец</p>
                    <p className='guru-specialization'>Python Guru</p>
                </div>
            </div>
            <p className='guru-description'>
                Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
            </p>
            <div className='guru-media'>
                <img src={tgPurpleIcon} alt='Telegram Icon'/>
                <img src={youtubePurpleIcon} alt='Youtube Icon'/>
                <img src={profileMediaIcon} alt='Profile Icon'/>
            </div>
        </div>
    )
}