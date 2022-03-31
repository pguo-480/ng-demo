import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User, UserListService } from '../../service/user-list.service';

@Component({
  selector: 'app-user-sub-list',
  templateUrl: './user-sub-list.component.html',
  styleUrls: ['./user-sub-list.component.css']
})
export class UserSubListComponent implements OnInit {
  @Input()
  listId: number = 0
  
  @Input()
  addSublist$$: Subject<User>  = new Subject<User>();

  @Input()
  userList$: Observable<User[]> = new Observable<User[]>();


  public displayedColumns: string[] = ['name', 'age']
  
  constructor() { }

  ngOnInit(): void {
  }
}
