import QuestionRepository from "@pplication/repository/question-respository";
import QuestionEntity from "@domain/entity/question-entity";
import QuestionDAO from "@infra/database/dao/question-dao";
import { Question } from "@domain/model";



export default class QuestionRepositoryImpl implements QuestionRepository {
  constructor(private readonly questionDAO: QuestionDAO){}

  private toEntity(question: Question.Model):QuestionEntity {
    return new QuestionEntity(
      question.questionId, user.name, user.email, user.password,
      user.pictureUrl,user.createdAt,user.updatedAt
      )
    }

    private toModel(user: QuestionEntity):Question.Model {
      return{
        userId:user.userId, name:user.name, email:user.email,
        password:user.password, pictureUrl:user.pictureUrl,
        createdAt:user.createdAt, updatedAt:user.updatedAt
      }
    }

    async  create(user: QuestionEntity): Promise<QuestionEntity> {
      await this.questionDAO.create(this.toModel(user))
      return user
    }

    async update(user: QuestionEntity): Promise<QuestionEntity> {
      await this.questionDAO.update(this.toModel(user))
      return user
    }

    async findByEmail(email: string): Promise<QuestionEntity | null> {
      const user = await this.questionDAO.findByEmail(email)
      if(!user) return null
      return this.toEntity(user)
    }




  }