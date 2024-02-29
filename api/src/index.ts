import LoadEnv from "@infra/helper/loadEnv";
import UserEntity from "@domain/entity/user-entity";
import UserDAO from "@infra/database/dao/user-dao";
import KnexAdapter from "@infra/database/knex-adapter";
import UUIDGenerator from "@domain/entity/uuid-generator";
import ExpressAdapter  from "@infra/http/express-adapter";
import Registry from "@infra/di/register";
import UserRepositoryImpl from "@infra/database/repository/user-repository-implementation";


LoadEnv.load()
const knexAdapter = new KnexAdapter()
knexAdapter.connect()
const userDAO = new UserDAO(knexAdapter.instance)
const userRepository = new UserRepositoryImpl(userDAO)
const registry = Registry.getInstance()
registry.register('UserRepository',userRepository)


const expressAdapter = new ExpressAdapter()
expressAdapter.listen(5000)



// const knexAdapter = new KnexAdapter()
// knexAdapter.connect()
// const userDAO = new UserDAO(knexAdapter.instance)
// userDAO.create({
//     userId: UUIDGenerator.generate(),
//     name:"Jonh Doe",
//     email:"jonh@teste.com",
// password:"12345",
//     pictureUrl:'foto.jpg',
//     createdAt: new Date(),
//     updatedAt: null
// })



