import { Quiz } from "./Quiz.js"

export class Ui{
	setQuestion(question){
		const quest =  document.querySelector('.question')
		return quest.innerHTML = question
	}
	setChoices(choices,callback){
		const conChoices = document.querySelector('.choices');
		
		choices.forEach(element => {
			const choice = document.createElement('button')
			choice.innerHTML= (element)
			choice.classList.add('btn')
			choice.addEventListener("click", () => callback('asd'));
			conChoices.appendChild(choice)

		});
	}
}