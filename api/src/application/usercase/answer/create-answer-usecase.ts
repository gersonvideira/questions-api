import AnswerEntity from "@domain/entity/answer-entity"
import AnswerRepository from "@pplication/repository/answer-respository"
import Registry from "@infra/di/register"


namespace AnswerCreate {
  export interface Input {
    answers: string
    questionId:string
    userId: string | null
  }
  export interface Output {
    answersId: string
    answers: string
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
      answerData.answers,
      answerData.questionId,
      answerData.userId,
      )
    await this.answerRepository.create(answer)

    return {
      answersId: answer.answersId,
      answers: answer.answers,
      createdAt: answer.createdAt
    }
  }
}