import { Request } from '@hapi/hapi'
import Boom from 'boom'

class DummyService {
  async find(req: Request): Promise<any> {
    let phaseId = req.query.id
    if (!phaseId) {
      return Boom.notAcceptable
    } else {
      return [
        {
          name: 'Finish the contracts',
          stage: 1,
          numberOfStages: 3,
          id: '0103e005-b762-485f-8f7e-722019d4f302',
          tasks: [
            {
              id: '0103e005-b762-485f-8f7e-722019d4f302',
              name: 'Sign the contract',
              description:
                'Please post any questions you have in the comments on this task',
              relatedLink: 'http://docusign.com/aksyka',
              assigneeId: '01322891-c5cb-4ac5-90d4-3c4224f40ba2',
              assigneeName: 'David Edwards',
              dueDate: '2021-10-02T16:09:04.258Z',
              completed: true,
            },
            {
              id: '0103e005-b762-485f-8f7e-723e009d4f302',
              name: 'Product deep dive',
              description:
                'Answer all remaining questions on production functionality and value',
              relatedLink: 'http://google.com/products',
              assigneeId: '03e0022891-c5cb-4ac5-90d4-3c4224f40ba2',
              assigneeName: 'Peter Roberts',
              dueDate: '2021-12-02T16:09:04.258Z',
              completed: true,
            },
            {
              id: '010e005-b762-485f-8f7e-723e009d4f302',
              name: 'Documentation walkthrough',
              description: '',
              relatedLink: '',
              assigneeId: '',
              assigneeName: '',
              dueDate: '',
              completed: false,
            },
          ],
        },
        {
          name: 'Make the customer very happy',
          stage: 2,
          numberOfStages: 3,
          id: 'b762e005-b762-485f-8f7e-7229d4b7622',
          tasks: [
            {
              id: '0103e005-b762-485f-8f7e-722019d4f302',
              name: 'Keep them smiling',
              description:
                'Please post any questions you have in the comments on this task',
              relatedLink: 'http://docusign.com/aksyka',
              assigneeId: '01322891-c5cb-4ac5-90d4-3c4224f40ba2',
              assigneeName: 'David Edwards',
              dueDate: '2021-10-02T16:09:04.258Z',
              completed: true,
            },
            {
              id: '0103e005-b762-485f-8f7e-723e009d4f302',
              name: 'Never let them frown',
              description:
                'Answer all remaining questions on production functionality and value',
              relatedLink: 'http://google.com/products',
              assigneeId: '03e0022891-c5cb-4ac5-90d4-3c4224f40ba2',
              assigneeName: 'Peter Roberts',
              dueDate: '2021-12-02T16:09:04.258Z',
              completed: false,
            },
            {
              id: '010e005-b762-485f-8f7e-723e009d4f302',
              name: 'Frowns are smiles, upside down',
              description: '',
              relatedLink: '',
              assigneeId: '',
              assigneeName: '',
              dueDate: '',
              completed: false,
            },
          ],
        },
      ]
    }
  }
}

export default new DummyService()
