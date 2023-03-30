export const getCharacters = async (charactersList) => {
    const apiURL = `https://rickandmortyapi.com/api/character/${charactersList}`
    
    return await fetch(apiURL)
        .then(res => res.json())
        .then(response => {
                return response
            })
}