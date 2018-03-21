import $ from 'jquery';

export const UPDATE_USER = 'users:updateUser';
export const SHOW_ERROR = 'users:showError';

export function updateUser(newUser){
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function showError(){
    return {
        type: SHOW_ERROR,
        payload: {
            user: 'ERROR!!'
        }
    }
}

export function showSuccess(){
    return {
        type: SHOW_ERROR,
        payload: {
            user: 'SUCCESS!!'
        }
    }
}

export function apiRequest(){
    return dispatch => (
        $.ajax({
            url: 'http://google.com',
            success(response){
                dispatch(showSuccess())
                console.log('SUCCESS');
                dispatch(updateUser(response.newUser))
            },
            error(){
                dispatch(showError());
            }
        })
    )
}