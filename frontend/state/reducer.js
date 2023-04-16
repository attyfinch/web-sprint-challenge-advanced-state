// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from './action-types';


const initialWheelState = {
  position: 0
}

function wheel(state = initialWheelState, action) {
  switch(action.type) {
    case MOVE_CLOCKWISE:
      return {...state, position: state.position + action.payload}
    case MOVE_COUNTERCLOCKWISE:
      return {...state, position: state.position + action.payload}
    default:
      return state;
  }
}

const initialQuizState = {
  quiz: null,
  selectedAnswer: null,
  message: ''
}

function quiz(state = initialQuizState, action) {
  switch(action.type) {
    default:
      return state 
  }
}

// const initialSelectedAnswerState = null
// function selectedAnswer(state = initialSelectedAnswerState, action) {
//   return state
// }

// const initialMessageState = ''
// function infoMessage(state = initialMessageState, action) {
//   return state
// }

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, form })
