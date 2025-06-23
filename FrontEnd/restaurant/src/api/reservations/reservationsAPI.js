import api from "../api";

/**
 *  @returns {Promise<Array>}
 */

export async function getReservations() {
    const response = await api.get('/reservations/');
    return response.data;
}

/* 
* @param {{ date: string, time: string, guests: number }} data
 * @returns {Promise<Object>}
 */

export async function createReservation(data) {
    const response = await api.post('/reservations/', data);
    return response.data;
}
