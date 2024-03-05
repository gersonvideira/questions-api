import AnswerRepository from "@pplication/repository/answer-respository"
import Registry from "@infra/di/register"

namespace Answer {
  export interface OutputList {
    answersId: string
    answers: string
    userId: string | null
    createdAt: Date
  }
}

export default class ListAnswerUseCase  {
  private readonly answerRepository: AnswerRepository

  constructor(){
    const registery = Registry.getInstance()
    this.answerRepository = registery.resolve<AnswerRepository>('AnswerRepository')
  }

  async execute(questionId: string): Promise<Answer.OutputList[]>{
    const awswers = await this.answerRepository.list(questionId)
    const answerOutput = awswers.map((answer) => ({
      answersId: answer.answersId,
      answers: answer.answers,
      userId: answer.userId,
      createdAt: answer.createdAt
    }))
    return answerOutput
  }
}