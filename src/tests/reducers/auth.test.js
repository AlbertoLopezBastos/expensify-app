import authReducer from '../../reducers/auth.js';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    };

    const state = authReducer({}, action);

    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({}, action);

    expect(state.uid).toEqual({});
});