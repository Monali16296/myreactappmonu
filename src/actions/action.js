import { ACTION_USER_LOGIN } from '../constants.js';

export function handleSubmit(name, pass) {
    return (dispatch, getState) => {
        return fetch('/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name,
                password: pass
            })
        }).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            console.log(response);
            return response.json();  //if not included this line then data won't print
        }).then(function (data) {

            if (data.code == 200) {
                console.log(data.user[0]);
                localStorage.setItem('username', data.user[0].name); //for session management
                console.log(localStorage.getItem('username')); //fetching data from session
                localStorage.removeItem('username'); //for removing item from session
                console.log(localStorage);
                console.log('got success');
                return dispatch({
                    type: ACTION_USER_LOGIN,
                    user: data.user[0]
                });
            } else {
                console.log('11');
                //          this.setState({loginErr: 'Invalid user name or password'});
            }
        }).catch(function (err) {
            console.log(err);
        });
    }
}