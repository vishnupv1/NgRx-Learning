import { Injectable } from "@angular/core"
import { Actions, act, createEffect, ofType } from "@ngrx/effects"
import { MasterService } from "../../master.service"
import { LOAD_BLOG, addBlog, loadblogsuccess, updateBlog } from "./blog.action"
import { EMPTY, catchError, exhaustMap, map, mergeMap, of, switchMap } from "rxjs"
import { blogModel } from "./blog.model"
import { MatSnackBar } from "@angular/material/snack-bar"
import { EmptyAction, ShowAlert, loadspinner } from "../Global/app.action"

@Injectable()
export class BlogEffects {


    constructor(private action$: Actions, private service: MasterService, private _snackbar: MatSnackBar) {

    }
    _lodblog = createEffect(() =>
        this.action$
            .pipe(
                ofType(LOAD_BLOG),
                exhaustMap((action) => {
                    return this.service.getAllBlogs().pipe(
                        map((data) => {
                            return loadblogsuccess({ bloglist: data });

                        }),
                        catchError(() => EMPTY)
                    )
                })
            )
    );
}