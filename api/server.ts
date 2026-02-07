import { createServer } from 'http'
import { routes } from './routes'

export function startServer(node: any) {
  createServer((req, res) => routes(req, res, node))
    .listen(8080, () => console.log('API running on :8080'))
}
