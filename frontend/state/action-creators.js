// ❗ You don't need to add extra action creators to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE } from "./action-types"
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


export function setQuiz() { }

export function selectAnswer() { }

export function setMessage() { }



export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {

  axios.get('http://localhost:9000/api/quiz/next')
  .then(res => {
    console.log(res)
  })

  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)

    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        console.log(res)
      })
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
