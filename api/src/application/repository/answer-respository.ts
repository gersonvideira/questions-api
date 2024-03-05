import AnswerEntity from "@domain/entity/answer-entity";


export default interface AnswerRepository {
  create(answer: AnswerEntity):Promise<AnswerEntity>
  list(questionId: string):Promise<AnswerEntity[]>
}

