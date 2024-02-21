import { Request, Response } from "express";}
import { User } from "@pplication/controller/user-crtl";
import CreateUserUseCase from "@pplication/usercase/user/create-user-usecase";

export default class UserController implements User.Controller {
  async create(request: Request, response: Response): Promise<void> {
    const { email, password} = request.body
    const userDate = {email,password}
    const newUser = await new CreateUserUseCase().execute(userDate)
    response.status(201).json(newUser)
  }
  async updateProfile(request: Request, response: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findById(request: Request, response: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async autheticate(request: Request, response: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }


}