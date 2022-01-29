import {Question} from "./models/Question.js"

import { question } from './data/question.js'
import { Quiz } from "./models/Quiz.js"
import {Ui} from './models/UI.js'
import { data } from "./data/data.js"

function aplicar(ui,qu){

	if(qu.isEnded()){
		ui.setResultado(qu.score)
	}else{
		ui.setQuestion(qu.getQuestionIndex().question);
		ui.setChoices(qu.getQuestionIndex().choices,(element)=> {
			qu.guess(element);
			aplicar(ui,qu);
			}
		)}
	
}


function main(){
	// console.log(question)
	const qu = new Quiz(question)
	const ui = new Ui()
	console.log(qu)

	aplicar(ui,qu)
	
	

}

main()