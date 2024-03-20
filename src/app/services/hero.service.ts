import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  public supabaseClient: SupabaseClient;

  public clientURL =  'https://yswqeztworlgnkwcrgnu.supabase.co' 
  public baseURL = 'https://yswqeztworlgnkwcrgnu.supabase.co/rest/v1/hero';
  public uploadURL = 'https://yswqeztworlgnkwcrgnu.supabase.co/storage/v1/object/public/hero/'
  public supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzd3FlenR3b3JsZ25rd2NyZ251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5MjUxODcsImV4cCI6MjAyNjUwMTE4N30.f_vOvW_Q254eXuYjpJFfH2wivKE4Sc0z5fkvUqcrxQM';

  constructor(private http: HttpClient) {
    this.supabaseClient = createClient(this.clientURL, this.supabaseKey);
  }

  getItems(nameFilter: string = ''): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.supabaseKey,
      'Authorization': `Bearer ${this.supabaseKey}`
    });
    const url = `${this.baseURL}?order=name.asc&name=ilike.*${nameFilter}*`;
    return this.http.get<any[]>(url, { headers: headers });
  }

  deleteItem(itemID: number): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.supabaseKey,
      'Authorization': `Bearer ${this.supabaseKey}`
    });
    const url = `${this.baseURL}?id=eq.${itemID}`;
    return this.http.delete<any[]>(url, { headers: headers });
  }

  getItem(itemID: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.supabaseKey,
      'Authorization': `Bearer ${this.supabaseKey}`
    });
    const url = `${this.baseURL}?id=eq.${itemID}`;
    return this.http.get(url, { headers: headers });
  }

  updateItem(itemID: string, editData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.supabaseKey,
      'Authorization': `Bearer ${this.supabaseKey}`
    });
    const url = `${this.baseURL}?id=eq.${itemID}`;
    return this.http.patch(url, editData, { headers: headers });
  }

  createItem(createData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'apikey': this.supabaseKey,
      'Authorization': `Bearer ${this.supabaseKey}`
    });
    const url = `${this.baseURL}`;
    return this.http.post(url, createData, { headers: headers });
  }

  async uploadImage( file: File) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const { data, error } = await this.supabaseClient.storage
      .from('hero')
      .upload(fileName, file);

    if (data){
      return `${this.uploadURL}${data.path}`
    }else{
      return "";
    }
  }
}
