import LoadEnv from "@infra/helper/loadEnv";
import UserEntity from "@domain/entity/user-entity";
import UserDAO from "@infra/database/dao/user-dao";
import KnexAdapter from "@infra/database/knex-adapter";
import UUIDGenerator from "@domain/entity/uuid-generator";
import ExpressAdapter  from "@infra/http/express-adapter";


LoadEnv.load()

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



