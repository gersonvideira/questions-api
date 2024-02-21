

export namespace User {
  export interface Controller {
    create(request:any, response:any):Promise<void>
    updateProfile(request:any, response:any):Promise<void>
    findById(request:any, response:any):Promise<void>
    autheticate(request:any, response:any):Promise<void>
  }
}