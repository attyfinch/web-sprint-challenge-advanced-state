import React from 'react'
import { connect } from 'react-redux'
import { inputChange, resetForm, postQuiz, trueChange, falseChange } from '../state/action-creators'
export function Form(props) {


  const onSubmit = e => {
    e.preventDefault();
    props.postQuiz(props.newQuestion, props.newTrueAnswer, props.newFalseAnswer);
  }

  const isDisabled = props.newQuestion.trim().length <= 1 || props.newTrueAnswer.trim().length <= 1 || props.newFalseAnswer.trim().length <= 1


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={(e) => props.inputChange(e.target.value)} id="newQuestion" placeholder="Enter question" value={props.newQuestion}/>
      <input maxLength={50} onChange={(e) => props.trueChange(e.target.value)} id="newTrueAnswer" placeholder="Enter true answer" value={props.newTrueAnswer}/>
      <input maxLength={50} onChange={(e) => props.falseChange(e.target.value)} id="newFalseAnswer" placeholder="Enter false answer" value={props.newFalseAnswer}/>
      <button id="submitNewQuizBtn" disabled={isDisabled} onClick={console.log(isDisabled)}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    newQuestion: state.form.newQuestion,
    newTrueAnswer: state.form.newTrueAnswer,
    newFalseAnswer: state.form.newFalseAnswer
  }
};

export default connect(mapStateToProps, { inputChange, postQuiz, resetForm, trueChange, falseChange })(Form)
