import axs from 'axios';
import {ROOM_LOADED} from "../constants/example.constant";
export const getAllKindOfRoom = () => async (dispatch) => {
    try {
        const res = await axs.get('/api/v1/kind-of-rooms');

        dispatch({
            type: ROOM_LOADED,
            payload: res.data
        });
    } catch (error) {

    }
};
