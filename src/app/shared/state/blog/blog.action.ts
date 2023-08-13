import { createAction, props } from "@ngrx/store";
import { blogModel } from "./blog.model";


export const LOAD_BLOG_SUCCESS = '[blog page] load blog success'
export const LOAD_BLOG = '[blog page] load blog'
export const loagBlog = createAction(LOAD_BLOG)
export const loadblogsuccess=createAction(LOAD_BLOG_SUCCESS,props<{bloglist:blogModel[]}>())
export const addBlog = createAction('addBlog', props<{ bloginput: blogModel }>())
export const updateBlog = createAction('updateBlog', props<{ bloginput: blogModel }>())