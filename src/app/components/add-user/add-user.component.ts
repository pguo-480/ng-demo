import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { User, UserListService } from '../../service/user-list.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  @Input()
  addSublist$$: Subject<User>  = new Subject<User>();
  
  name = new FormControl('');
  age = new FormControl('');
  
  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.addSublist$$.next({
      name: this.name.value,
      age: this.age.value
    })
  }
}
