import "express-async-errors";
import express  from "express";
import cors  from "cors";
import {json, urlencoded}  from "body-parser";
import HttpSever from "./http-server";
import UserController from "./controller/user-crtl-implementition";
import QuestionController from "./controller/question-crtl-implementition";
import AnswerController from "./controller/answer-crtl-implementition";



export default class ExpressAdapter implements HttpSever {
  readonly app: express.Application

  constructor(){
    this.app = express()
    this.app.use(cors())
    this.app.use(json(),urlencoded({extended:true}))

    const questionCtrl = new QuestionController()
    const answerCtrl = new AnswerController()
    const userCtrl = new UserController()
    this.app.use('/api/users', userCtrl.create)
    this.app.use('/api/questions', questionCtrl.create)
    this.app.use('/api/answers', answerCtrl.create)



    this.app.use('/api', (req, res)=> {
      res.json({msg: 'Hello World!'})
    })
  }
  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Srever running at port ${port}`)
    })
  }

}
