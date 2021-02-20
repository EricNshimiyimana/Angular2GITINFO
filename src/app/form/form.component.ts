import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { SearchService} from '../search.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users: any = [];
  repos: any[] = [];
  userName: string;
  search: any = [];
  constructor(private userService: SearchService) { 
    this.userName = 'EricNshimiyimana'
  }

  ngOnInit(): void {
    this.userService.getInfo(this.userName).subscribe((response: any) => {
      this.repos = response;

    });
    this.userService.getUsers(this.userName).subscribe((response: any) => {
      this.users = response;
      console.log(response);

    });
  }
  onSearch() {
    this.userName = this.search
    this.ngOnInit()
  }
}
