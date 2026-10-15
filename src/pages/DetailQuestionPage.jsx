import '../styles/detailQuestionPage.css'
import {useNavigate, useParams} from "react-router-dom";
import QuestionHeaderCard from "../components/detailQuestion/QuestionHeaderCard.jsx";
import QuestionNavigation from "../components/detailQuestion/QuestionNavigation.jsx";
import ShortAnswerCard from "../components/detailQuestion/ShortAnswerCard.jsx";
import DetailAnswerCard from "../components/detailQuestion/DetailAnswerCard.jsx";
import QuestionTagsCard from "../components/detailQuestion/QuestionTagsCard.jsx";
import GuruCard from "../components/detailQuestion/GuruCard.jsx";
import {useEffect, useState} from "react";
import {getQuestionsById} from "../api/apiQuestions.js";
import arrowBackIcon from '../assets/arrow-down.svg'
import {useMediaQuery} from "../hooks/useMediaQuery.js";

export default function DetailQuestionPage() {

    const [question, setQuestion] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const [qInfoOpen, setQInfoOpen] = useState(false)
    const isTablet = useMediaQuery('(max-width: 1024px)')

    const {questionId} = useParams()

    useEffect(() => {
        const fetchQuestion = async () => {
            setError(null)
            setLoading(true)
            try {
                const data = await getQuestionsById(questionId)
                setQuestion(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchQuestion()
    }, [questionId])

    const navigate = useNavigate()


    return (
        <div className='detailQuestion-container'>
            <button onClick={() => navigate(-1)}
                    className='back-btn'>
                <img style={{transform: 'rotate(90deg)'}}
                     src={arrowBackIcon} alt='Back Arrow Icon'/>
                Назад
            </button>
            {error ? <p className='error-message'>К сожалению, что-то пошло не так... {error}</p> :
                loading ? <p>Загрузка...</p> :
                    (
                        <div className='columns-container'>
                            <div className='leftColumn'>
                                <QuestionHeaderCard title={question?.title} description={question?.description}
                                                    setInfoOpen={setQInfoOpen}/>
                                <QuestionNavigation/>
                                <ShortAnswerCard shortAnswer={question?.shortAnswer}/>
                                <DetailAnswerCard longAnswer={question?.longAnswer}/>
                                {isTablet && <GuruCard/>}
                            </div>
                            <div className='rightColumn'>
                                <QuestionTagsCard complexity={question?.complexity} rate={question?.rate}
                                                  skills={question?.questionSkills} keywords={question?.keywords}
                                                  author={question?.createdBy?.username}
                                                  infoOpen={qInfoOpen} setInfoOpen={setQInfoOpen}/>
                                {!isTablet && <GuruCard/>}
                            </div>
                        </div>
                    )}
        </div>
    )
}