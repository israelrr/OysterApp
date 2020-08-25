// Reducer for user

const users = [{ 
    userName:'israel_rr',
    password: 'oyster'
    }];

const usersReducer = (state = users, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default usersReducer;