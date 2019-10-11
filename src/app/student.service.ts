import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  
  

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // private baseUrl = 'http://localhost:8080/api/';  

  private baseUrl = 'http://localhost/test/angular1/my-dream-app-server/';  
  
  constructor(private http:HttpClient) { }  

  getStudentList(): Observable<any> {  
  	console.log("IN List");
    // return this.http.get(`${this.baseUrl}`+'students-list');  
    return this.http.get(`${this.baseUrl}`+'api.php?type=students-list');  
  }  
  
  createStudent(student: object): Observable<object> {  
    // return this.http.post(`${this.baseUrl}`+'save-student', student);  
    return this.http.post(`${this.baseUrl}`+'save-student', student);  
  }  
  
  deleteStudent(id: number): Observable<any> {  
    // return this.http.delete(`${this.baseUrl}/delete-student/${id}`, { responseType: 'text' });  
    return this.http.delete(`${this.baseUrl}/delete-student/${id}`, { responseType: 'text' });  
  }  
  
  getStudent(id: number): Observable<Object> {  
    // return this.http.get(`${this.baseUrl}/student/${id}`);  
    return this.http.get(`${this.baseUrl}/student/${id}`);  
  }  
  
  updateStudent(id: number, value: any): Observable<Object> {  
    // return this.http.post(`${this.baseUrl}/update-student/${id}`, value);  
    return this.http.post(`${this.baseUrl}/update-student/${id}`, value);  
  }  

}
