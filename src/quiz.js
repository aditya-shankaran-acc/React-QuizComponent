import React, {Component} from 'reacteact'

let QuizData=require('./quiz_data.json')

class Quiz extends Component{
  constructor(props){
    super(props)
    this.state={quiz_position: 1}
  }
  render(){
    return(<div><div className="QuizQuestion">{quizData.quiz_questions[0]
      .instructions_text}</div></div>)
  }
}

export default Quiz
