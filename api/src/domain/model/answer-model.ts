export  namespace Answer {
   export interface Model {
        answersId: string
        answers: string
        questionId: string
        userId: string | null
        createdAt: Date
        updatedAt: Date | null
    }
}

