import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { blogModel } from './state/blog/blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  haveaccess() {
    return true
  }
  getAllBlogs(): Observable<blogModel[]> {
    return this.http.get<blogModel[]>('http://localhost:4200/blog')
  }
}
