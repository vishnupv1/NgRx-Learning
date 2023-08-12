import { blogModel, blogs } from "../blog/blog.model";
import { counterModel } from "../counter.model";

export interface AppStateModel {
    counter: counterModel,
    blog: blogs
}