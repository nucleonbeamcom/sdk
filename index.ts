import { Nucleon } from './core/nucleon'
import { startServer } from './api/server'

const node = new Nucleon()
node.initialize()

startServer(node)
