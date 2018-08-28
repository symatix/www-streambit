import { PLAY_TRACK, REMOVE_TRACK } from '../actions/types';

export default function equipmentReducer(state = null, action) {

switch (action.type) {
	case PLAY_TRACK:
		return action.payload;
	case REMOVE_TRACK:
		return null;

	default:
		return state;
	}
}
