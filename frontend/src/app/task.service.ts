import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createList(title: string) {
    //we want to send a web request to create a list
    return this.webReqService.post('lists', {title});
  }

  getLists() {
    return this.webReqService.get('lists');
  }

  getTasks(listId: string): Observable<any[]>{
    return this.webReqService.get(`lists/${listId}/tasks`);
  }
}
