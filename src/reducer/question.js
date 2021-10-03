import { ADD_QUESTION,ANSER_QUESTION,RECIVE_QUESTIONS } from "../actions/question";

export default function questions(state={},action){
    switch(action.type){
        case RECIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }
            
        case ADD_QUESTION:{
            const {id}=action.question
            return{
                ...state,
                [id]:action.question,
            }    
        }
        case ANSER_QUESTION:
            const { authedUser, qid, answer } = action
            const target = state[qid][answer]
            return{
            ...state,
            [qid]: {
            ...state[qid],
            [answer]: {
                ...target,
                votes: [...target.votes, authedUser],
            }},
          
            }

        default:
            return state        

    }
}