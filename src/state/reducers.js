import { combineReducers } from 'redux';
import moviesAll from '../containers/LandingPage/State/reducers';
import movie from '../containers/Overview/State/reducers';

export default combineReducers({
  moviesAll,
  movie,
});
