export namespace Question {
    export interface Model {
        questionId: string
        question: string
        userId: string
        createdAt: Date
        updatedAt: Date | null
    }
}