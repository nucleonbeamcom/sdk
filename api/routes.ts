import { IncomingMessage, ServerResponse } from 'http'

export function routes(req: IncomingMessage, res: ServerResponse, node: any) {
  if (req.url === '/energy') {
    res.end(JSON.stringify({ energy: node.energy.output() }))
    return
  }
  res.end('Nucleon Beam API')
}
