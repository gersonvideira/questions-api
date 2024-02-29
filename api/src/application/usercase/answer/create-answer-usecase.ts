import AnswerEntity from "@domain/entity/answer-entity"
import Registry from "@infra/di/register"
import AnswerRepository from "@pplication/repository/answer-respository"


namespace AnswerCreate {
  export interface Input {
    email:string
    password: string
  }
  export interface Output {
    userId: string
    email: string
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

    const userExist = await this.answerRepository.findByEmail(answerData.email)
    if (userExist) throw new Error('User already exists!')

    const user = AnswerEntity.create(answerData.email,answerData.password)
    await this.answerRepository.create(user)
    return {
      userId: user.userId,
      email: user.email,
      createdAt: user.createdAt
    }
  }


}