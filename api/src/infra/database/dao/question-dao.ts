import DAO from "@domain/dao/dao";
import UserEntity from "@domain/entity/user-entity";


export default class UserDAO implements DAO<UserEntity>{
    create(data: UserEntity): Promise<UserEntity> {
        throw new Error('Method not implemented.');
    }
    findById(id: string): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

}