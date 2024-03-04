import { Request, Response } from "express";
import { Answer } from "@pplication/controller/answer-crtl";
import CreateAnswerUseCase from "@pplication/usercase/answer/create-answer-usecase";


export default class AnswerController implements Answer.Controller {
  async create(request: Request, response: Response): Promise<void> {
    const { questionId } = request.params
    const { answers, userId } = request.body
    const answerData = { answers,questionId, userId: userId ?? null }
    const newAnswer = await new CreateAnswerUseCase().execute(answerData)
    response.status(201).json(newAnswer)
  }
}