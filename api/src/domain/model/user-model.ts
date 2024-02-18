// export interface UserModel {
//     userId: string
//     name: string | null
//     email: string
//     password: string
//     pictureUrl: string | null
//     createdAt: Date
//     updatedAt: Date
// }

export namespace User {
    export interface Model {
         answerId: string
         questionId: string
         userId: string | null
         answer: string
         createdAt: Date
         updatedAt: Date | null

     }
 }