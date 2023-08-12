import { createFeatureSelector, createSelector } from "@ngrx/store"
import { blogModel, blogs } from "./blog.model"

const getBlogState = createFeatureSelector<blogs>('blog')
export const getBlog = createSelector(getBlogState, (state) => {
    return state.bloglist
})