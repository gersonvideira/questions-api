import { Request, Response } from "express";
import { Question } from "@pplication/controller/question-crtl";
import CreateQuestionUseCase from "@pplication/usercase/question/create-question-usecase";
import ListQuestionUseCase from "@pplication/usercase/question/list-question-usecase";
import DeleteQuestionUseCase from "@pplication/usercase/question/delete-question-usecase";

export default class QuestionController implements Question.Controller {
  async create(request: Request, response: Response): Promise<void> {
    const { question, userId } = request.body
    const questionData = { question, userId  }
    const newQuestion = await new CreateQuestionUseCase().execute(questionData)
    response.status(201).json(newQuestion)
  }
  async list(request: Request, response: Response): Promise<void> {
    const { userId } = request.params
    const question = await new ListQuestionUseCase().execute(userId)
    response.status(200).json(question)
  }
  async delete(request: Request, response: Response): Promise<void> {
    const { questionId} = request.params
    await new DeleteQuestionUseCase().execute(questionId)
    response.status(200).send()
  }

}