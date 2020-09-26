import jsonPlaceholder from '../apis/jsonPlaceholder'

export const _fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts')
    dispatch({type:"FETCH_POSTS", payload: response.data})
}

export const _fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`)
    dispatch({type:"FETCH_USER", payload: response.data})
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(_fetchPosts())
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    userIds.forEach(id => dispatch(_fetchUser(id)))
}
    
