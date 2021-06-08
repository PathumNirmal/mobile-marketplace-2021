import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.page.html',
  styleUrls: ['./my-listings.page.scss'],
})
export class MyListingsPage implements OnInit {

  constructor( private router:Router) { }

  getaddform(){
    this.router.navigate(['my-listings-add']);
  }

  ngOnInit() {
  }

}
