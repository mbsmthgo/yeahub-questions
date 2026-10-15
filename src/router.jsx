import {createBrowserRouter} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AllQuestionsPage from "./pages/AllQuestionsPage.jsx";
import DetailQuestionPage from "./pages/DetailQuestionPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <AllQuestionsPage />
            },
            {
                path: ':questionId',
                element: <DetailQuestionPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
])