import { EventEmitter, Injectable } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { map, scan, tap } from 'rxjs/operators';


export interface User {
  name: string;
  age?: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  public addSublist1$$: Subject<User> = new Subject<User>();
  public addSublist2$$: Subject<User> = new Subject<User>();
  
  public subList1$: Observable<User[]> = new Observable<User[]>();
  public subList2$: Observable<User[]> = new Observable<User[]>();

  public userList$: Observable<User[]>;
  public testList: User[] = []
  public addUserEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { 

    this.subList1$ = this.addSublist1$$.asObservable().pipe(
      scan((users: User[], user: User) => [...users, user], [])
    )

    this.subList2$ = this.addSublist2$$.asObservable().pipe(
      scan((users: User[], user: User) => [...users, user], [])
    )

    this.userList$ = merge(this.addSublist1$$, this.addSublist2$$).pipe(
      scan((users: User[], user: User) => [...users, user], [])
    )
  }

  public addTestList() {
    console.log('push')
    this.testList.push({
      name: "name123",
      age: 123123
    })
    // console.log(this.testList)
    this.addUserEvent.emit("")
  }
}

