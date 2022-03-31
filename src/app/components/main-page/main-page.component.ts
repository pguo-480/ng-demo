import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User, UserListService } from '../../service/user-list.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public addSublist1$$: Subject<User>
  public addSublist2$$: Subject<User>
  public subList1$: Observable<User[]>
  public subList2$: Observable<User[]>

  constructor(private userListService: UserListService) { 
    this.addSublist1$$ = this.userListService.addSublist1$$
    this.addSublist2$$ = this.userListService.addSublist2$$
    this.subList1$ = this.userListService.subList1$
    this.subList2$ = this.userListService.subList2$
  }

  ngOnInit(): void {
  }

}
