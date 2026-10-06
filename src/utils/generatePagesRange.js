export const generatePagesRange = (totalPages, currentPage) => {
    const pages = []
    if (totalPages <= 10) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(i)
        }
    } else {
        if (currentPage <= 5) {
            for (let i = 1; i <= 8; i++) {
                pages.push(i)
            }
            pages.push('...')
            pages.push(totalPages)
        } else if (currentPage >= totalPages - 4) {
            pages.push(1)
            pages.push('...')
            for (let i = totalPages - 7; i <= totalPages; i++) {
                pages.push(i)
            }
        } else {
            pages.push(1)
            pages.push('...')
            for (let i = currentPage - 2; i <= currentPage + 2; i++) {
                pages.push(i)
            }
            pages.push('...')
            pages.push(totalPages)
        }
}
    return pages
}