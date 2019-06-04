import { handleActions } from 'redux-actions';

let getinitialState = {

};

export default handleActions({
    ACTION_USER_LOGIN(state, action) {
        return Object.assign({}, state, action);
    }
}, getinitialState);