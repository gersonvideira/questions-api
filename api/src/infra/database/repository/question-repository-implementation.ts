import QuestionRepository from "@pplication/repository/question-respository";
import QuestionEntity from "@domain/entity/question-entity";
import { Question } from "@domain/model";
import QuestionDAO from "@infra/database/dao/question-dao";



export default class QuestionRepositoryImpl implements QuestionRepository {
  constructor(private readonly questionDAO: QuestionDAO){}


  private toEntity(question: Question.Model):QuestionEntity {
    return new QuestionEntity(
      question.questionId, question.question, question.userId, question.createdAt,
      question.updatedAt
      )
    }

    private toModel(question: QuestionEntity):Question.Model {
      return{
        questionId:question.questionId, question: question.question, userId: question.userId,
        createdAt: question.createdAt, updatedAt: question.updatedAt

      }
    }

    async  create(question: QuestionEntity): Promise<QuestionEntity> {
      await this.questionDAO.create(this.toModel(question))
      return question
    }

    async list(userId: string): Promise<QuestionEntity[]> {
      const questions = await this.questionDAO.list(userId)
      const listQuestion = questions.map((question) => this.toEntity(question))
      return listQuestion
    }

    // Ter em atenção o any do restorno

    async listAnswers(questionId: string): Promise<QuestionEntity[]> {
      const answers = await this.questionDAO.list(questionId)
      const listAnswer = answers.map((answer) => this.toEntity(answer))
      return listAnswer
    }

    async delete(questionId: string): Promise<void> {
      await this.questionDAO.delete(questionId)
    }


  }




