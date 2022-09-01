import * as arenaReducer from './arenaReducer'
import * as articleReducer from './articleReducer'
import * as authReducer from './authReducer'
import * as fieldReducer from './fieldReducer'
import * as orderReducer from './orderReducer'
import * as paymentReducer from './paymentReducer'
import * as reviewReducer from './reviewReducer'
import * as sliderReducer from './sliderReducer'
import * as sportReducer from './sportReducer'
import * as userReducer from './userReducer'


const reducers = {
  ...arenaReducer,
  ...articleReducer,
  ...authReducer,
  ...fieldReducer,
  ...orderReducer,
  ...paymentReducer,
  ...reviewReducer,
  ...sliderReducer,
  ...sportReducer,
  ...userReducer
}

export default reducers