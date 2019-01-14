import Types from '../../action/types';

const defaultState = {}

export default function onAction(state = defaultState, action) {
	switch (action.type) {
		case Types.POPULAR_REFRESH_SUCCESS:
			return {
				...state,
				[action.storeName]: {
					...state[action.storeName],
					items:action.items,
					projectModels: action.projectModels,
					isLoading: false,
					hideLoadingMore: false,
				},
			}
		case Types.POPULAR_REFRESH_FAIL:
			return {
				...state,
				[action.storeName]: {
					...state[action.storeName],
					isLoading: false
				},
			}
		case Types.POPULAR_REFRESH:
			return {
				...state,
				[action.storeName]: {
					...state[action.storeName],
					isLoading: true,
					hideLoadingMore: true
				},
			}
		case Types.POPULAR_LOAD_MORE_SUCCESS:
			return {
				...state,
				[action.storeName]: {
					...state[action.storeName],
					projectModels: action.projectModels,
					hideLoadMore:false,
					pageIndex:action.pageIndex
				},
			}
		case Types.POPULAR_LOAD_MORE_FAIL:
			return {
				...state,
				[action.storeName]: {
					...state[action.storeName],
					hideLoadMore:false,
					pageIndex:action.pageIndex
				},
			}
		default:
			return state;
	}
}