
export namespace Answer {
  export interface Controller {
    create(request:any, response:any):Promise<void>
    list(request:any,response:any): Promise<void>
  }
}