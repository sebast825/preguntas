

const quest =  document.querySelector('.question')
const conChoices = document.querySelector('.choices');

export class Ui{
	setQuestion(question){
		
		return quest.innerHTML = question
	}
	setChoices(choices,callback){
		
		conChoices.innerHTML = "";
		choices.forEach(element => {
			const choice = document.createElement('button')
			choice.innerHTML= (element)
			choice.classList.add('btn')
			choice.addEventListener("click", () => callback(element));
			conChoices.appendChild(choice)

		});
	}
	setResultado(valor){
		conChoices.innerHTML = '';	
		quest.innerHTML = `Tu Puntaje es: ${valor}`
	}
}