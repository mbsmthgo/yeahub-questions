export const validateComplexity = (complexity) => {
    let validComplexity;
    if (complexity?.length) {
        validComplexity = complexity.map(level => {
            switch(level) {
                case '1-3':
                    return [1, 2, 3]
                case '4-6':
                    return [4, 5, 6]
                case '7-8':
                    return [7, 8]
                case '9-10':
                    return [9, 10]
            }
        }).flat()
    } else {
        validComplexity = undefined
    }
    return validComplexity
}