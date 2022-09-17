import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.page.html',
  styleUrls: ['./cashier.page.scss'],
})
export class CashierPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cashier(){
    this.router.navigate(['pos']);
    }


}
