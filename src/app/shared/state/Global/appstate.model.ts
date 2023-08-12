import { blogModel } from "../blog/blog.model";
import { counterModel } from "../counter.model";

export interface AppStateModel {
    counter: counterModel,
    blog: blogModel[]
}