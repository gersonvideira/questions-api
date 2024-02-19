export namespace User {
    export interface Model {
        userId: string
        name: string | null
        email: string
        password: string
        pictureUrl: string | null,
        createdAt: Date
        updatedAt: Date | null
     }
 }
