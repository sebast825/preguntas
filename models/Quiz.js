// import { data } from "../data/data"

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
	// finish(){
	// 	if(this.numRound===data.length){
	// 		console.log('se termino')
	// 	}
	// }
	guess(answer){
	
		if(this.getQuestionIndex().getCorrectAnswer(answer)){
			this.score++
		}
		this.questionIndex++
	}

}