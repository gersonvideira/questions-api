import AnswerRepository from "@pplication/repository/answer-respository";
import AnswerEntity from "@domain/entity/answer-entity";
import AnswerDAO from "@infra/database/dao/answer-dao";
import { Answer } from "@domain/model";



export default class AnswerRepositoryImpl implements AnswerRepository {
  constructor(private readonly answerDAO: AnswerDAO){}
    private toModel(answer: AnswerEntity):Answer.Model {
      return{
        answerId:answer.answerId,
        questionId: answer.questionId,
        userId:answer.userId,
        answer: answer.answer,
        createdAt:answer.createdAt,
        updatedAt:answer.updatedAt
      }
    }

    async  create(answer: AnswerEntity): Promise<AnswerEntity> {
      await this.answerDAO.create(this.toModel(answer))
      return answer
    }
  }