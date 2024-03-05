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

    // router.post('/answer', this.answerCtrl.create)

    router.post('/question', this.questionCtrl.create)
    router.post('/question/:questionId/answers', this.answerCtrl.create)
    router.get('/question/:questionId/answers', this.answerCtrl.list)
    router.delete('/question/:userId/:questionId', this.questionCtrl.delete)

    router.post('/user', this.userCtrl.create)
    router.get('/user/:userId/questions', this.questionCtrl.list)

    return router
  }
}