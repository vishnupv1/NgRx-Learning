import { createFeatureSelector, createSelector } from "@ngrx/store"
import { blogModel, blogs } from "./blog.model"

const getBlogState = createFeatureSelector<blogs>('blog')
export const getBlog = createSelector(getBlogState, (state) => {
    return state.bloglist
})
export const getblogbyid = (blogid: number) => createSelector(getBlogState, (state) => {
    return state.bloglist.find((blog: blogModel) => blog.id === blogid) as blogModel;
})