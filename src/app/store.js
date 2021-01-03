import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice';

export default configureStore({
  reducer: {
    posts: postsReducer // 自分で作ったreducerをここに登録する
    // state.postsはpostsReducerがdispatchされることでupdateされることを示している
    // 
  }
})
