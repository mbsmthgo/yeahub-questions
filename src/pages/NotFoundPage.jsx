import '../styles/notFoundPage.css'
import {useNavigate} from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div className='notFound-container'>
            <h1 className='notFound-title'>Страница не найдена</h1>
            <button className='btn__primary'
                onClick={() => navigate('/', {replace: true})}>Вернуться на главную</button>
        </div>
    )
}