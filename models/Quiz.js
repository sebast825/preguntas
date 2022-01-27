// import { data } from "../data/data"

export class Quiz{

	questionIndex = 0
	score = 0
	constructor(question){
		this.question = question;
	}

	//para saber en que pregunta esta
	getQuestionIndex(option){
		return this.question[this.questionIndex]
	}
	// finish(){
	// 	if(this.numRound===data.length){
	// 		console.log('se termino')
	// 	}
	// }
	guess(correctAnswer){
		this.questionIndex++
		if(correctAnswer){
			this.score++
		}

	}

}