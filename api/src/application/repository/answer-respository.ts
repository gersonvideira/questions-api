import AnswerEntity from "@domain/entity/answer-entity";


export default interface AnswerRepository {
  create(question: AnswerEntity):Promise<AnswerEntity>
  update(question: AnswerEntity):Promise<AnswerEntity>
  findByEmail(answerId:string):Promise<AnswerEntity | null>
}

