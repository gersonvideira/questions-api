// export interface AnswerModel {
//         answerId: string
//         questionId: string
//         userId: string | null
//         answer: string
//         createdAt: Date
//         updatedAt: Date | null

// }

export namespace Answer {
   export interface Model {
        answerId: string
        questionId: string
        userId: string | null
        answer: string
        createdAt: Date
        updatedAt: Date | null

    }
}