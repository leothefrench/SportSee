import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
  } from './call'

export const getUser = (userId, dataType) => {
    let userData = []

    switch (dataType) {
        case 'getUserInformation':
            userData = USER_MAIN_DATA.find((user) => user.id === userId);
            break;
        case 'getUserActivity':
            userData = USER_ACTIVITY.find((activity) => activity.userId === userId);
            break;
        case 'getUserAverageSessions':
            userData = USER_AVERAGE_SESSIONS.find((sessions) => sessions.user.id === userId);
            break;
        case 'getUserPerformance':
            userData = USER_PERFORMANCE.find((performance) => performance.id === userId);
            break;
        default:
            userData = []
    }
    return userData
}
