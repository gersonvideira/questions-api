import UUIDGenerator from './uuid-generator'

export default class QuestionEntity {
    constructor(
        readonly questionId: string ,
        readonly question: string,
        readonly userId: string ,
        readonly createdAt: Date,
        readonly updatedAt: Date | null
    ){
    }
    static create(userId:string, question:string):QuestionEntity{
        const questionId = UUIDGenerator.generate()
        const createdAt = new Date()
        return new QuestionEntity(questionId, question, userId,  createdAt, null)
    }
}
