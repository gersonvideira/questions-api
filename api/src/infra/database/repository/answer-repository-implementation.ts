import AnswerRepository from "@pplication/repository/answer-respository";
import AnswerEntity from "@domain/entity/answer-entity";
import AnswerDAO from "@infra/database/dao/answer-dao";
import { Answer } from "@domain/model";



export default class AnswerRepositoryImpl implements AnswerRepository {
  constructor(private readonly answerDAO: AnswerDAO){}
  
  private toModel(answer: AnswerEntity):Answer.Model {
    return{
      answersId:answer.answersId,
      answers: answer.answers,
      questionId: answer.questionId,
      userId:answer.userId,
      createdAt:answer.createdAt,
      updatedAt:answer.updatedAt
    }
  }
  
  
  private toEntity(answer: Answer.Model):AnswerEntity {
    return new AnswerEntity(
      answer.answersId,answer.answers,answer.questionId, answer.userId, answer.createdAt,
      answer.updatedAt
      )
    }
    
    async  create(answer: AnswerEntity): Promise<AnswerEntity> {
      await this.answerDAO.create(this.toModel(answer))
      return answer
    }
    
    async list(questionId: string): Promise<AnswerEntity[]> {
      const answers = await this.answerDAO.list(questionId)
      const listAnswer = answers.map((answer) => this.toEntity(answer))
      return listAnswer
    }
  }