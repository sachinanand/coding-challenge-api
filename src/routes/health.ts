import { ServerRoute } from '@hapi/hapi'

export default [
  {
    method: 'GET',
    path: '/health',
    handler() {
      return {
        healthy: true,
      }
    },
    options: {
    },
  },
] as ServerRoute[]
