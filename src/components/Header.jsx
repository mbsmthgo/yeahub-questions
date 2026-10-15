import '../styles/header.css'
import {useMediaQuery} from "../hooks/useMediaQuery.js";
import {useNavigate} from "react-router-dom";
import yeahubIcon from '../assets/logo.svg'
import arrowDownIcon from '../assets/arrow-down-header.svg'
import hamburgerMenuIcon from '../assets/hamburger-menu.svg'

const tabs = ['База вопросов', 'Тренажёр', 'Материалы', 'Навыки (hh)']

export default function Header() {

    const isTablet = useMediaQuery('(min-width: 576px) and (max-width: 1024px)')
    const isMobile = useMediaQuery('(max-width: 575px)')

    const navigate = useNavigate()

    return (
        <header className='header'>
            <div onClick={() => navigate('/')}
                className='header__logo-group'>
                <img src={yeahubIcon} alt='Yeahub Logo' className='logo-group__logo'/>
                {!isMobile && (
                    <h2 className='logo-group__title'>Yeahub</h2>
                )}
            </div>
            {isTablet || isMobile ? (
                <div className='header__dropdown'>
                    <p>Подготовка</p>
                    <img src={arrowDownIcon} alt='Arrow Down Icon'/>
                </div> ) : (
                <nav className='header__nav'>
                    {tabs.map(tab => <span key={tab} className='nav__tab'>{tab}</span>)}
                </nav>
            )}
            {isTablet || isMobile ? (
                <button className='hamburger-btn'>
                    <img src={hamburgerMenuIcon} alt='Hamburger Menu Icon'/>
                </button>
            ) : (
                <div className='header__btn-group'>
                    <button className='btn__secondary'>Вход</button>
                    <button className='btn__primary'>Регистрация</button>
                </div>
            )}
        </header>
    )
}