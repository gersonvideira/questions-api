import UserRepository from "@pplication/repository/user-respository";
import UserEntity from "@domain/entity/user-entity";
import UserDAO from "@infra/database/dao/user-dao";
import { User } from "@domain/model";



export default class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDAO: UserDAO){}

  private toEntity(user: User.Model):UserEntity {
    return new UserEntity(
      user.userId, user.name, user.email, user.password,
      user.pictureUrl,user.createdAt,user.updatedAt
      )
    }

    private toModel(user: UserEntity):User.Model {
      return{
        userId:user.userId, name:user.name, email:user.email,
        password:user.password, pictureUrl:user.pictureUrl,
        createdAt:user.createdAt, updatedAt:user.updatedAt
      }
    }

    async  create(user: UserEntity): Promise<UserEntity> {
      await this.userDAO.create(this.toModel(user))
      return user
    }

    async update(user: UserEntity): Promise<UserEntity> {
      await this.userDAO.update(this.toModel(user))
      return user
    }

    async findByEmail(email: string): Promise<UserEntity | null> {
      const user = await this.userDAO.findByEmail(email)
      if(!user) return null
      return this.toEntity(user)
    }




  }