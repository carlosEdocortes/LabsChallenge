export const type = 'findSuggestions';
const findSuggestions = (text) => ({
    
        type: type,
        payload: text,
    
});

export default findSuggestions;