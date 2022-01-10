import { createConnection } from 'typeorm'
import ormconfig from '../../config/ormconfig'

createConnection({ ...ormconfig[0] })
