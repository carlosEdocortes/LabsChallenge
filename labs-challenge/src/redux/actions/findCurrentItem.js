export const type = 'findCurrentItem';
const findCurrentById = id =>{
    return {
        type: type,
        payload: id,
    };
};

export default findCurrentById;