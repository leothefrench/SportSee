/* service appel api */
import { Session } from "../models/sessions";
import { Score } from "../models/score";
import { DataDay } from "../models/dataDay";
import { RadarData } from "../models/radarData";

const apiURL = 'http://localhost:3000'

// USER MAIN DATA - retrieves information from a user
export const getUserInformation = async (userId) => {
    return fetch(`${apiURL}/user/${userId}`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        const score = new Score(data); 
        return score.format();
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };

// USER_ACTIVITY - retrieves a user's activity day by day with kilograms and calories - DONE
export const getUserActivity = async (userId) => {
    return fetch(`${apiURL}/user/${userId}/activity`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        const session = new Session(data.sessions); 
        return session.format();
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };

// USER_AVERAGE_SESSIONS - retrieves the average sessions of a user per day - DONE
export const getUserAverageSessions = async (userId) => {
    return fetch(`${apiURL}/user/${userId}/average-sessions`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        const dataDay = new DataDay(data);
        return dataDay.format(); // RETOURNE LE FORMAT DE MA CLASSE DATADAY
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };

// USER_PERFORMANCE - retrieves a user's performance (energy, endurance, etc.) -
export const getUserPerformance = async (userId) => {
    return fetch(`${apiURL}/user/${userId}/performance`)
      .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error ! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        const radarData = new RadarData(data); // A MODIFIER
        return radarData.format();
      })
      .catch((error) => {
        console.log('An error occurred:', error);
        throw error
      })
  };