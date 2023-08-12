import { createReducer, on } from "@ngrx/store"
import { addBlog, loagBlog } from "./blog.action"
import { blogState } from "./blog.state"
import { } from './blog.action'

const _blogReducer = createReducer(blogState,
    on(loagBlog, (state) => {
        return {
            ...state,
        }
    }),
    on(addBlog, (state, action) => {
        const _blog = { ...action.bloginput }
        return {
            ...state,
            bloglist: [...state.bloglist, _blog]
        }
    }),


)
export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action)
}