import { Request, Response } from "express";
import { Answer } from "@pplication/controller/answer-crtl";
import CreateAnswerUseCase from "@pplication/usercase/answer/create-answer-usecase";
import ListAnswerUseCase from "@pplication/usercase/answer/list-answers-usecase";


export default class AnswerController implements Answer.Controller {

  async create(request: Request, response: Response): Promise<void> {
    const { questionId } = request.params
    const { answers, userId } = request.body
    const answerData = { answers,questionId, userId: userId ?? null }
    const newAnswer = await new CreateAnswerUseCase().execute(answerData)
    response.status(201).json(newAnswer)
  }
  
  async list(request: Request, response: Response): Promise<void> {
    const {questionId} = request.params
    const answer = await new ListAnswerUseCase().execute(questionId)
    response.status(200).json(answer)

  }
}