import UUIDGenerator from './uuid-generator'

export default class AnswerEntity {
  constructor(
    readonly answersId: string ,
    readonly answers: string ,
    readonly questionId: string ,
    readonly userId: string | null,
    readonly createdAt: Date,
    readonly updatedAt: Date | null
    ){
    }
    static create(answers:string,questionId:string,userId:string | null):AnswerEntity{
      const answersId = UUIDGenerator.generate()
      const createdAt = new Date()
      return new AnswerEntity( answersId,answers, questionId,userId, createdAt, null)
    }
  }