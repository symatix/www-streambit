import { combineReducers } from 'redux';
import navReducer from './navReducer';
import voicesReducer from './partnersReducer';
import partnersReducer from './voicesReducer';
import servicesReducer from './servicesReducer';
import equipmentReducer from './equipmentReducer';
import portfolioReducer from './portfolioReducer';
import trackReducer from './trackReducer';

export default combineReducers({
   nav: navReducer,
   voices: voicesReducer,
   partners: partnersReducer,
   services: servicesReducer,
   equipment: equipmentReducer,
   portfolio: portfolioReducer,
   track: trackReducer
});