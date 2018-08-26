import * as fn from './types'

/*** authReducer ***/
export const changeActiveNav = (id) => {
	return { type: fn.BOOK_VOICE, payload: id }
}
