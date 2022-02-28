import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.apiUrl;

constructor(private http : HttpClient) { }


get(category : string){

  return this.http.get<any>(this.baseUrl+category);
}

getById(category : string , id : any){

  return this.http.get<any>(this.baseUrl+category + '/'+ id);
}

post(category : string  , item : any){
  return this.http.post<any>(this.baseUrl + category , item );
}


put(category : string  , id: any, item : any){
  return this.http.put<any>(this.baseUrl + category + '/'+id , item );
}

delete(category : string  , id : any){
  return this.http.delete<any>(this.baseUrl+category+'/'+id);
}
deleteSong(id : any){
  return this.http.delete<any>(this.baseUrl+ 'Song?id='+id);
}

}
