import Hapi, { ServerRoute } from '@hapi/hapi'
import Boom from 'boom'
import logger from './logger'
import * as Routes from './routes'
// import db from './db'
class APIServer {
  private server = new Hapi.Server({
    port: process.env.PORT ?? 4000,
    routes: {
      cors: {
        origin: ['http://localhost:3001'],
        maxAge: 60,
        credentials: true,
      },
      validate: {
        failAction: (request, h, err) => {
          throw err
        },
      },
    },
  })

  private async registerRoutes() {
    try {
      const routes = Object.values(Routes) as ServerRoute[][]
      this.server.route([
        ...routes.flat(),
        //Catch-all Route for CORS
        {
          method: '*',
          path: '/{path*}',
          handler() {
            return Boom.notFound()
          },
        },
      ])
    } catch (e) {
      logger.error(e)
      throw e
    }
  }
  private async setupErrorHandling() {
    process.on('unhandledRejection', (err: any) => {
      logger.error(err)
    })

    process.on('uncaughtException', (err: Error) => {
      logger.error(err)
    })
  }

  async init() {
    await this.setupErrorHandling()
    // await this.setupDatabase()
    // await this.registerAuthentication()
    await this.registerRoutes()
    await this.server.start()
    // this.registerHooks()
    // this.setupDummyData()
    console.log('Server running on %s', this.server.info.uri)
    return this
  }
}

new APIServer().init()
