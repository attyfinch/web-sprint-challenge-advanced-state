// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM, TRUE_INPUT_CHANGE, FALSE_INPUT_CHANGE } from './action-types';


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
    case SET_QUIZ_INTO_STATE:
      return {...state, quiz: action.payload}
    case SET_SELECTED_ANSWER:
      return {...state, selectedAnswer: action.payload}
    case SET_INFO_MESSAGE:
      return {...state, message: action.payload}
    default:
      return state 
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case INPUT_CHANGE:
      return {...state, newQuestion: action.payload}
    case TRUE_INPUT_CHANGE:
      return {...state, newTrueAnswer: action.payload}
    case FALSE_INPUT_CHANGE:
      return {...state, newFalseAnswer: action.payload}
    case RESET_FORM:
      return {...state, newQuestion: '', newTrueAnswer: '', newFalseAnswer: ''}
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, form })
