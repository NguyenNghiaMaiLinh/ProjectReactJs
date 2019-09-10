import { combineReducers } from 'redux';
import adminReducer from './admin';
import uiReducer from './ui';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    admin: adminReducer,
    ui: uiReducer,
    form: formReducer
});

export default rootReducer;
