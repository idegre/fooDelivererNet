import { ThunkAction } from "redux-thunk"
import { RootState } from "../combineReducers"
import Axios, { AxiosError } from "axios"
import { LASTEST_BLOCK_REQUEST } from "../actionTypes"

const fetchLastestBlockRequest = (hash: string) => ({
	type: LASTEST_BLOCK_REQUEST,
	payload: {
		hash
	}
})

// export const getBlock = (hash: string):ThunkAction<Promise<IBlock>, RootState, void, Actions> =>
// 	(dispatch) => new Promise(async (resolve, reject) => {
// 		try {
// 			dispatch(fetchLastestBlockRequest(hash))
// 			const { data } = await Axios.get<IBlock>(`/block/${hash}`)
// 			dispatch(fetchLastestBlockSuccess(hash, data))
// 			resolve(data)
// 		} catch (e) {
// 			dispatch(fetchLastestBlockFailure(hash, e))
// 			reject(e)
// 		}
// })

export type Actions = ReturnType<typeof fetchLastestBlockRequest>
