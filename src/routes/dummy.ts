import { ServerRoute } from '@hapi/hapi'
import dummyService from '../services/dummy'

export default [
  {
    method: 'GET',
    path: '/v1/phase',
    async handler(req) {
      return await dummyService.find(req)
    },
  },
] as ServerRoute[]
