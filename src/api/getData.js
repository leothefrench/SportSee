// import {
//   getUserInformation,
//   getUserActivity,
//   getUserAverageSessions,
//   getUserPerformance,
//   } from './call'

// export const getUser = (userId, dataType) => {
//     let userData = []

//     switch (dataType) {
//         case 'getUserInformation':
//             userData = USER_MAIN_DATA.find((user) => user.id === userId);
//             break;
//         case 'getUserActivity':
//             userData = USER_ACTIVITY.find((activity) => activity.userId === userId);
//             break;
//         case 'getUserAverageSessions':
//             userData = USER_AVERAGE_SESSIONS.find((sessions) => sessions.user.id === userId);
//             break;
//         case 'getUserPerformance':
//             userData = USER_PERFORMANCE.find((performance) => performance.id === userId);
//             break;
//         default:
//             userData = []
//     }
//     return userData
// }


/**
 * récupère les informations d'un utilisateur de l'Api en utilisant son ID
 * @param {string} userId - Permet de récupérer l'identifiant unique de l'utilisateur
 * @return {Promise<Object>} - Doit retourner la promesse résolue des données de l'utilisateur au format JSON
 * @throws {error} - Lance une erreur si le code de status de répnse n'est pas OK ou si la requête échoue
 */

export const getUser = async (userId) => {
  // Ma fonction getUSer prend en paramètre userId
    try {
      /* je crée la variable response qui va stocker la réponse de ma requête (fetch) à une URL (là mon Api) 
         le mot await permet d'attendre la réponse de notre requête avant de passer à la ligne suivante
      */
      const response = await fetch(`http://localhost:3000/user/${userId}`)
      /* Ma condition if va checker si la response n'est pas ok (statut 200), s'il elle n'est pas ok, alors on jette une
      erreur en créant une instance de la class Error qui nous retournera le statut de la réponse.
      */
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Parse les données JSON de la réponse HTTP - J'ai maintenant les datas sous forme d'objet JS
      const userData = await response.json();
      // Retourne les données utilsateur
      return userData;

      } catch(error) {
        console.error('Une erreur s\'est produite lors de la récupération de l\'utilisateur :', error);
        throw error;
      }
  };