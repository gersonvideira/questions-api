import "express-async-errors";
import express  from "express";
import cors  from "cors";
import { json, urlencoded }  from "body-parser";
import HttpSever from "./http-server";
import RouterFactory from "./router-factory";



export default class ExpressAdapter implements HttpSever {
  readonly app: express.Application

  constructor(){
    this.app = express()
    this.app.use(cors())
    this.app.use(json(),urlencoded({extended:true}))

    const routerFactory = new RouterFactory()

    this.app.use('/api', routerFactory.register())

    this.app.use('/api', (req, res)=> {
      res.json({msg: 'Hello World!'})
    })
  }
  listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Srever running at port ${port}`)
    })
  }

}
