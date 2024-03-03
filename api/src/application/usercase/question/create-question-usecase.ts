import QuestionEntity from "@domain/entity/question-entity"
import Registry from "@infra/di/register"
import QuestionRepository from "@pplication/repository/question-respository"


namespace QuestionCreate {
  export interface Input {
    question:string
    userId: string
  }
  export interface Output {
    questionId: string
    question: string
    createdAt: Date
  }
}

export default class CreateQuestionUseCase  {
  private readonly questionRepository: QuestionRepository
  constructor(){
    const registery = Registry.getInstance()
    this.questionRepository = registery.resolve<QuestionRepository>('QuestionRepository')
  }
  async execute(questionData: QuestionCreate.Input): Promise<QuestionCreate.Output>{
    const question = QuestionEntity.create(questionData.userId,questionData.question)
    await this.questionRepository.create(question)

    return {
      questionId: question.questionId,
      question: question.question,
      createdAt: question.createdAt
    }
  }
}