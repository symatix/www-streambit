import * as fn from './types'


export const changeActiveNav = (id) => {
	return { type: fn.BOOK_VOICE, payload: id }
}

export const playTrack = (track) => {
	return { type: fn.PLAY_TRACK, payload: track }
}
export const removeTrack = () => {
	return { type: fn.REMOVE_TRACK }
}
