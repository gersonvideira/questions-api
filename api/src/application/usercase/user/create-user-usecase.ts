import UserEntity from "@domain/entity/user-entity"
import UserRepository from "@pplication/repository/user-respository"


namespace UserCreate {
  export interface Input {
    email:string
    password: string
  }
  export interface Output {
    userId: string
    email: string
    createdAt: Date
  }
}

export default class CreateUserUseCase implements Omit<UserRepository, "create"| "update" | "findByEmail"> {
  constructor(private readonly userRepository: UserRepository){}
  async execute(userData: UserCreate.Input): Promise<UserCreate.Output>{

    const userExist = await this.userRepository.findByEmail(userData.email)
    if (userExist) throw new Error('User already exists!')

    const user = UserEntity.create(userData.email,userData.password)
    await this.userRepository.create(user)
    return {
      userId: user.userId,
      email: user.email,
      createdAt: user.createdAt
    }
  }

}