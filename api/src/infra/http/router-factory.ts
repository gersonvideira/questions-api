import { Router, Application } from "express";
import UserController from "./controller/user-crtl-implementition";
import QuestionController from "./controller/question-crtl-implementition";
import AnswerController from "./controller/answer-crtl-implementition";




export default class RouterFactory {
  private userCtrl: UserController
  private answerCtrl: AnswerController
  private questionCtrl: QuestionController

  constructor(){
    this.userCtrl = new UserController()
    this.questionCtrl = new QuestionController()
    this.answerCtrl = new AnswerController()
  }

  register(): Router{
    const router = Router()

    router.post('/answer', this.answerCtrl.create)

    router.post('/question', this.questionCtrl.create)
    router.get('/question', this.questionCtrl.list)
    router.delete('/question', this.questionCtrl.delete)

    router.post('/user', this.userCtrl.create)

    return router
  }
}