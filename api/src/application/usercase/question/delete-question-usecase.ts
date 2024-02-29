import QuestionEntity from "@domain/entity/question-entity"
import Registry from "@infra/di/register"
import QuestionRepository from "@pplication/repository/question-respository"



export default class DeleteQuestionUseCase  {
  private readonly questionRepository: QuestionRepository
  constructor(){
    const registery = Registry.getInstance()
    this.questionRepository = registery.resolve<QuestionRepository>('QuestionRepository')
  }
  async execute(questionId:string): Promise<void>{
    await this.questionRepository.delete(questionId)

    return
  }
}