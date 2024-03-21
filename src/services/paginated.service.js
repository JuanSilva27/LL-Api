const paginated = (data, limit, offset) => {
    offset = parseInt(offset) || 0;
    limit = parseInt(limit) || 3;
    const startIndex =offset;
    const endIndex = parseInt(startIndex) + parseInt(limit);
    const nextOffset = endIndex< data.length? endIndex : null;
    const previousOffset = offset > 0 ? Math.max(offset - limit, 0): null
    console.log(startIndex,endIndex)
    const dataPaginated = data.slice(startIndex, endIndex);
    const dataParsed = {
        count: data.length,
        next:nextOffset!==null ? `${process.env.BASE_URL}/characters?offset=${nextOffset}&limit=${limit}`: null,
        previous:previousOffset!==null ?`${process.env.BASE_URL}/characters?offset=${previousOffset}&limit=${offset}`: null,
        results: dataPaginated
    }
    return dataParsed

}

module.exports = {paginated}