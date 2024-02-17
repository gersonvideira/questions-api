export interface AnswerModel {
    answerId: string
    answer: string
    questionId: string
    userId: string | null
    created_at: Date
    updated_at: Date | null
}