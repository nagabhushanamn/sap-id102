

export function statusReducer(state = { message: '' }, action) {
    switch (action.type) {
        case 'REQUEST_BEGIN':
            return Object.assign({}, { message: 'Pls wait, we r loading' });
        case 'load_reviews':
            return Object.assign({}, { message: '' });
        default:
            return state;
    }
}