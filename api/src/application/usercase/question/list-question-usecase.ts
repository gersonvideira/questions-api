import QuestionEntity from "@domain/entity/question-entity"
import Registry from "@infra/di/register"
import QuestionRepository from "@pplication/repository/question-respository"


namespace Question {
  export interface Output {
    questionId: string
    question: string
    createdAt: Date
  }
}

export default class ListQuestionUseCase  {
  private readonly questionRepository: QuestionRepository

  constructor(){
    const registery = Registry.getInstance()
    this.questionRepository = registery.resolve<QuestionRepository>('QuestionRepository')
  }
  async execute(userId:string): Promise<Question.Output[]>{
    
    const questions = await this.questionRepository.list(userId)
    const outputQuestions = questions.map((question) => ({
      questionId: question.questionId,
      question: question.question,
      createdAt: question.createdAt,
    }))

    return outputQuestions
  }
}