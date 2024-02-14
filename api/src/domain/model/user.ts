export interface UserModel {
    userId: string
    name: string | null
    email: string
    password: string
    pictureUrl: string | null
    created_at: Date
    updated_at: Date
}