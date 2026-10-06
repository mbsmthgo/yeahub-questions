import {validateComplexity} from "../utils/validateComplexity.js";

export const getQuestions = async (page = 1, limit = 10, filters) => {
    const rawParams = {
        page,
        limit,
        specializationId: filters.specialization,
        skills: filters.skills?.length ? filters.skills.join(',') : undefined,
        complexity: validateComplexity(filters.complexity),
        rate: filters.rate?.length ? filters.rate?.join(',') : undefined,
        keywords: filters.search
    }
    const cleanParams = Object.fromEntries(Object.entries(rawParams)
        .filter(([_, val]) => val !== null && val !== undefined && val !== '' ))
    const url = new URL('https://api.yeatwork.ru/questions/public-questions')
    url.search = new URLSearchParams(cleanParams).toString()
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Ошибка сервера ${response.status}`)
        }
        return response.json()
    } catch (error) {
        throw error
    }
}