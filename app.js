import {Question} from "./models/Question.js"

import { question } from './data/question.js'
import { Quiz } from "./models/Quiz.js"
import {Ui} from './models/UI.js'

function main(){
	// console.log(question)
	const qu = new Quiz(question)
	const ui = new Ui()
	ui.setQuestion((qu.getQuestionIndex().question))
	
	console.log(qu.getQuestionIndex())
	qu.guess('word')
	
	console.log(qu)
	qu.guess('haskell')
	console.log(qu)

}

main()