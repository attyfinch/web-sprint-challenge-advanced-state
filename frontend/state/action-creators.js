// ❗ You don't need to add extra action creators to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM, TRUE_INPUT_CHANGE, FALSE_INPUT_CHANGE } from "./action-types"
import axios from "axios"

export function moveClockwise(position) { 
  if (position === 0 || position === 1 || position === 2 || position === 3 || position === 4) {
    return {type: MOVE_CLOCKWISE, payload: 1}
  }
  if (position === 5) {
    return {type: MOVE_CLOCKWISE, payload: -5}
  }
}

export function moveCounterClockwise(position) {
  if (position === 1 || position === 2 || position === 3 || position === 4 || position === 5 ) {
    return {type: MOVE_COUNTERCLOCKWISE, payload: -1}
  }
  if (position === 0) {
    return {type: MOVE_COUNTERCLOCKWISE, payload: +5}
  }    
}

export function setQuiz(quiz) { 
  return {type: SET_QUIZ_INTO_STATE, payload: quiz}
}

export function selectAnswer(id) { 
  return {type: SET_SELECTED_ANSWER, payload: id}
}

export function setMessage(message) {
  return {type: SET_INFO_MESSAGE, payload: message}
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(setQuiz(null))
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        dispatch(setQuiz(res.data))
      })
  }
}

const URL = 'http://localhost:9000/api/quiz/answer'

export function postAnswer(quizID, answerID) {
  return function (dispatch) {
    dispatch(selectAnswer(null))
    axios.post(URL, { quiz_id: `${quizID}`, answer_id: `${answerID}` })
      .then(res => {
        dispatch(setMessage(res.data.message))
      })
      .finally(() => {
        dispatch(fetchQuiz());
      });
  }
}

export function inputChange(input) { 
  return {type: INPUT_CHANGE, payload: input}
}

export function trueChange(input) { 
  return {type: TRUE_INPUT_CHANGE, payload: input}
}

export function falseChange(input) { 
  return {type: FALSE_INPUT_CHANGE, payload: input}
}

export function resetForm() {
  return {type: RESET_FORM}
 }

const newQuizURL = 'http://localhost:9000/api/quiz/new'
//  - Example of payload: `{ "question_text": "Love JS?", "true_answer_text": "yes", "false_answer_text": "nah" }`

export function postQuiz(question, trueAnswer, falseAnswer) {
  return function (dispatch) {
    
    axios.post(newQuizURL, {question_text: `${question}`, true_answer_text: `${trueAnswer}`, false_answer_text: `${falseAnswer}` })
    .then(res => {
      dispatch(setMessage(`Congrats: "${question}" is a great question!`))
    })
    .finally(dispatch(resetForm()))
    

    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
