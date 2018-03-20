export default function userReducer(state='', { type, payload }) {
    switch(type){
        case 'updateUser':
            return payload.user;
        default: 
            return state;
    }
    return state;
}