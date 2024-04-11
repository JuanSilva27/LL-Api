const getAttributeValue = (character, key)=>{
    const attribute = character[key]
    if (attribute) {
        return {
            name: attribute.name,
            url: `${process.env.BASE_URL}/${key}s/${attribute.id}`
        }
    }
    return null;
};

module.exports = {getAttributeValue}