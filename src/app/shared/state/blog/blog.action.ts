import { createAction, props } from "@ngrx/store";
import { blogModel } from "./blog.model";

export const loagBlog = createAction('loadBlog')
export const addBlog = createAction('addBlog', props<{ bloginput: blogModel }>())
export const updateBlog = createAction('updateBlog', props<{ bloginput: blogModel }>())