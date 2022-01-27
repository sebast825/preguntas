import { Question } from '../models/question.js'
import {data} from './data.js'


export const question = data.map(elem => new Question(elem.question,elem.choices,elem.answer))


