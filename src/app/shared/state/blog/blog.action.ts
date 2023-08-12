import { createAction, props } from "@ngrx/store";
import { blogModel } from "./blog.model";

export const loagBlog = createAction('loadBlog')
export const addBlog = createAction('addblog', props<{ bloginput: blogModel }>())