import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import teams from './teams'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    teams
  })

export default createRootReducer
