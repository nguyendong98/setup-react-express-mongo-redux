import {
    ROOM_LOADED
} from '../constants/example.constant';

const InitialState = {
    room: [],
    error: {},
    loading: true
};
const example = (state = InitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ROOM_LOADED:
            return {
                ...state,
                room: payload,
                loading: false,
            };
        default:
            return state;
    }
};
export default example;
