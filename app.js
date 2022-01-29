import {Question} from "./models/Question.js"

import { question } from './data/question.js'
import { Quiz } from "./models/Quiz.js"
import {Ui} from './models/UI.js'

function main(){
	// console.log(question)
	const qu = new Quiz(question)
	const ui = new Ui()
	console.log(qu)
	ui.setQuestion(qu.getQuestionIndex().question);
	ui.setChoices(qu.getQuestionIndex().choices,()=> console.log('asd'));
	
	
	

}

main()