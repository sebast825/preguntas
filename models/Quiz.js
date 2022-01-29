 import { data } from "../data/data.js"

export class Quiz{

	questionIndex = 0
	score = 0
	constructor(question){
		this.question = question;
	}

	//para saber en que pregunta esta
	getQuestionIndex(){
		return this.question[this.questionIndex]
	}
	isEnded(){
		
		return this.question.length === this.questionIndex;
		
	}
	guess(answer){
	
		if(this.getQuestionIndex().getCorrectAnswer(answer)){
			this.score++
		}
		this.questionIndex++
	}

}