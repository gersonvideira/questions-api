import UUIDGenerator from './UUIDGenarator'

export default class AnswerEntity {
    constructor(
        readonly answerId: string ,
        readonly answer: string ,
        readonly questionId: string ,
        readonly userId: string | null,
        readonly createdAt: Date,
        readonly updatedAt: Date | null
    ){
    }
    static create(answer:string,questionId:string,userId:string):AnswerEntity{
        const answerId = UUIDGenerator.generate()
        const createdAt = new Date()
        return new AnswerEntity( answerId,answer, questionId,userId, createdAt, null)
    }
}

