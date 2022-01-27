import {Question} from "./models/Question.js"

import { question } from './data/question.js'
import { Quiz } from "./models/Quiz.js"



function main(){
	// console.log(question)
	const qu = new Quiz(question)
	// const quest = new Question()
	// qu.getQuestion(question)
	// qu.guess(question.getCorrectAnswer('word'))
	// console.log(qu)
	console.log(qu.getQuestionIndex())
}

main()