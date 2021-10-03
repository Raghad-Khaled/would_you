import {RECIVE_USERS} from "../actions/user"
import { ADD_QUESTION,ANSER_QUESTION} from "../actions/question";

export default function users(state={},action){
 switch(action.type){
     case RECIVE_USERS:
         return {
             ...state,
             ...action.users,
         }
      case ADD_QUESTION:
        const {author,id}=action.question
          return{
            ...state,
            [author]: {
              ...state[author],
              questions: [...state[author].questions, id],
           },
        }
        case ANSER_QUESTION:
            const { authedUser, qid, answer } = action
            return{
                ...state,
                [authedUser]: {
                  ...state[authedUser],
                  answers: {
                    ...state[authedUser].answers,
                    [qid]: answer,
                  },
                },
            }
      default :
      return state   
 }
}