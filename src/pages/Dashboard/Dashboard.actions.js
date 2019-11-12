import { GET_DASHBOARD, SET_DASHBOARD } from './Dashboard.constants';

//Dashboard data
export const getDashboard = (payload) => ({ type: GET_DASHBOARD, payload });
export const setDashboard = (payload) => ({ type: SET_DASHBOARD, payload });