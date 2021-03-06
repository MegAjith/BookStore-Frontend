import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { OrdersService } from '../shared/services/orders.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {

  searchText: string = ""
  isCollapsed: boolean = true

  constructor(public auth: AuthService,private router: Router,public orderService: OrdersService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.router.navigateByUrl(`/user/Books?search=${this.searchText}`);
  }

}
