import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, saveQuestionAnswer } from "../api"
export const ADD_QUESTION='ADD_QUESTION'
export const ANSER_QUESTION='ANSER_QUESTIONS'
export const RECIVE_QUESTIONS="RECIVE_QUESTIONS"
 

export  function recivequestions(questions){
    return {
        type:RECIVE_QUESTIONS,
        questions,
    }
}

function addquestion(question){
    return{
        type:ADD_QUESTION,
        question
    }
}

function anserquestion(authedUser, qid, answer){
    return{
        type:ANSER_QUESTION,
        authedUser,
        qid,
        answer,
    }
}

export function handelanserquestion(qid,answer){
    return (dispatch,getState)=>{
        const {autherdUser}=getState()  
        return saveQuestionAnswer({
         autherdUser,
         qid,
         answer
        })
        .then(()=>{dispatch(anserquestion(autherdUser,qid,answer))})
        
      }
}


export function handeladdquestion(optionOneText, optionTwoText){
    return (dispatch,getState)=>{
      const {autherdUser}=getState()  
      dispatch(showLoading())
      return saveQuestion({
        optionOneText,
        optionTwoText, 
        author:autherdUser,
      })
      .then((question)=>{dispatch(addquestion(question))})
      .then (()=>{dispatch(hideLoading())})

    }
}
