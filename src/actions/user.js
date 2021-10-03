
export const RECIVE_USERS='RESIVE_USERS';

export function reciveUsers(users){
return {
    type:RECIVE_USERS,
    users,
}

}