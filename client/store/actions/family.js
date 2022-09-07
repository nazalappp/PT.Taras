import { GET_FAMILY_RESQUESTED } from "../constants";

export const family = (payload) => ({
    type: GET_FAMILY_RESQUESTED, payload: payload
})