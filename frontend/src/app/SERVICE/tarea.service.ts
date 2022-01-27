import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  url='http://localhost:8080/api/tareas';
  constructor(private http: HttpClient) { }

  getTareas():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnaTarea(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveTarea(tarea: Tarea):Observable<any>
  {
    return this.http.post(this.url, tarea);
  }

  editTarea(id:string, tarea: Tarea):Observable<any>
  {
    return this.http.put(this.url+'/'+id, tarea);
  }

  deleteTarea(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}


export interface Tarea{
  id:string;
  tarea:string;
  finalizado:boolean;
}