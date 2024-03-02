import AnswerEntity from "@domain/entity/answer-entity"
import AnswerRepository from "@pplication/repository/answer-respository"
import Registry from "@infra/di/register"


namespace AnswerCreate {
  export interface Input {
    questionId:string
    answer: string
    userId: string | null
  }
  export interface Output {
    answerId: string
    answer: string
    createdAt: Date
  }
}

export default class CreateAnswerUseCase  {
  private readonly answerRepository: AnswerRepository
  constructor(){
    const registery = Registry.getInstance()
    this.answerRepository = registery.resolve<AnswerRepository>('AnswerRepository')
  }
  async execute(answerData: AnswerCreate.Input): Promise<AnswerCreate.Output>{

    const answer = AnswerEntity.create(
      answerData.questionId,
      answerData.answer,
      answerData.userId,
      )
    await this.answerRepository.create(answer)

    return {
      answerId: answer.answerId,
      answer: answer.answer,
      createdAt: answer.createdAt
    }
  }
}