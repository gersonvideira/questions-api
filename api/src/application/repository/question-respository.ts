import QuestionEntity from "@domain/entity/question-entity";


export default interface QuestionRepository {
  create(question: QuestionEntity):Promise<QuestionEntity>
  list(userId:string):Promise<QuestionEntity[]>
  delete(questionId:string):Promise<void>
  listAnswers(questionId: string):Promise<QuestionEntity[]>
}

