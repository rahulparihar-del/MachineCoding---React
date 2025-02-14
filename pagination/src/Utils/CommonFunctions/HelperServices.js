export function getPaginatedData(data, currentPage, pageSize){
    const startPage = currentPage * pageSize;
    const endPage = startPage + pageSize;
    return data.slice(startPage, endPage);
}

export function getTotalPages(data, pageSize){
    return Math.ceil(data.length / pageSize);
}