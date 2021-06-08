import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('search', { static: false }) search : IonSearchbar;

  public list: Array<Object> = [];
  private searchedItem: any;

  constructor() {
    this.list = [
      { title : "Corn", image : "./assets/corn.jpg", rate : "Rs 350.00/=", veg : "Vegetable"},
      { title : "Red Chilli", image : "./assets/redchilli.jpg", rate : "Rs 550.00/=", veg : "Vegetable"},
      { title : "Beet" , image : "./assets/beet.jpg", rate : "Rs 150.00/=", veg : "Vegetable"},
      { title : "Carrot", image : "./assets/carrot.png", rate : "Rs 250.00/=", veg : "Vegetable"},
      { title : "Onion", image : "./assets/onion.jpg", rate : "Rs 100.00/=", veg : "Vegetable"}
    ];
    this.searchedItem = this.list
   }

  ngOnInit() {
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.search.setFocus();
    });
  }
  _ionChange(event){
    const val = event.target.value;
    this.searchedItem = this.list;
    if(val && val.trim()!= '') {
      this.searchedItem = this.searchedItem.filter((item : any) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
