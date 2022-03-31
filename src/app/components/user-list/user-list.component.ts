import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { User, UserListService } from '../../service/user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>
  public userList$: Observable<User[]>
  public userListTest: User[] = []
  public displayedColumns: string[] = ['name', 'age']

  constructor(private userListService: UserListService) { 
    this.userList$ = this.userListService.userList$
    }
    
    ngOnInit(): void {
      this.userListService.addUserEvent.subscribe( () => {
        console.log(this.userListService.testList)
        this.userListTest = this.userListService.testList
        this.table.renderRows()
      })
  }

  public addUser() {
    this.userListService.addTestList()
  }

}
