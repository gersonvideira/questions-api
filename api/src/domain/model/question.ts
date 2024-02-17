export interface QuestionModel {
    questionId: string
    question: string
    userId: string
    created_at: Date
    updated_at: Date | null
}