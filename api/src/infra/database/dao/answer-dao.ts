import DAO from "@domain/dao/dao";
import AnswerEntity from "@domain/entity/answer-entity";


export default class AnswerDAO implements DAO<AnswerEntity>{
    create(data: AnswerEntity): Promise<AnswerEntity> {
        throw new Error('Method not implemented.');
    }
    findById(id: string): Promise<AnswerEntity> {
        throw new Error("Method not implemented.");
    }

}