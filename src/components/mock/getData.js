import {getUserMainData, getUserActivity, getUserAverageSessions, getUserPerformance} from './data'

const getData = async (id, type) =>{
    let data = []

    switch(type) {
        case 'USER_MAIN_DATA': 
            data = await(getUserMainData(id))
            break
        case 'USER_ACTIVITY':
            data = await(getUserActivity(id))
            break
        case 'USER_AVERAGE_SESSIONS':
            data = await(getUserAverageSessions(id))
            break
        case 'USER_PERFORMANCE':
            data = await(getUserPerformance(id))
            break
        default:
            alert('ERROR DATA')
    }
    return data;
}

export default getData;