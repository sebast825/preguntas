import {data} from '../data/data.js'
import { question } from '../data/question.js';

export class Question {

	/**
	 * 
	 * @param {string} question la pregunta 
	 * @param {string []} choices las opciones 
	 * @param {string} answer la respuesta
	 */
	constructor(question,choices,answer){
		this.question = question;
		this.choices = choices;
		this.answer = answer;
	}
	/**
	 * 
	 * @param {string} option 
	 * @returns boolean
	 */
	getCorrectAnswer(option){
		return option === this.answer
	}
}

const q1 = new Question(data[0].question,data[0].choices,data[0].answer)



// console.log(q1)
// console.log(q1.getCorrectAnswer('word'))