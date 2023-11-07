import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, title: 'First post', content: 'ksjankanckajnskcajncksajnckasjnc' },
    { id: 2, title: 'Second post', content: 'ksjankanckajnskcajncksajnckasjnc' },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => { state.push(action.payload) } 
    }
})

export const { addPost } = postsSlice.actions
export const getAllPosts = state => state.posts

export default postsSlice.reducer