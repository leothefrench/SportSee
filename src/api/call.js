/* service appel api */
import { Session } from "../models/sessions";
// USER MAIN DATA - retrieves information from a user
export const getUserInformation = async (userId) => {
    return fetch(`http://localhost:3000/user/${userId}`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        const session = new Session(data.sessions); // A MODIFIER
        return session.format();
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };

// USER_ACTIVITY - retrieves a user's activity day by day with kilograms and calories
export const getUserActivity = async (userId) => {
    return fetch(`http://localhost:3000/user/${userId}/activity`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        const session = new Session(data.sessions); // A MODIFIER
        return session.format();
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };

// USER_AVERAGE_SESSIONS - retrieves the average sessions of a user per day
export const getUserAverageSessions = async (userId) => {
    return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        console.log(res)
        return res.json()
      })
      .then((data) => {
        const session = new Session(data.sessions);
        return session.format(); // RETOURNE LE FORMAT DE MA CLASSE DOSSIER MODELS fichiers sessions.js
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };

// USER_PERFORMANCE - retrieves a user's performance (energy, endurance, etc.)
export const getUserPerformance = async (userId) => {
    return fetch(`http://localhost:3000/user/${userId}/performance`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        const session = new Session(data.session);
        return session.format();
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };