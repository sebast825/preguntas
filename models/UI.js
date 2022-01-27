import { Quiz } from "./Quiz.js"

export class Ui{
	setQuestion(question){
		const quest =  document.querySelector('.question')
		return quest.innerHTML = question
	}
}