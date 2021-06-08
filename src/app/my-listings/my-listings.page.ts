import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ModalController} from '@ionic/angular'
import { MyListingsAddPage } from '../my-listings-add/my-listings-add.page';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.page.html',
  styleUrls: ['./my-listings.page.scss'],
})
export class MyListingsPage implements OnInit {

  todolist =[
    /*{
  // itemImage :"assets/mylistImage/Cucumbera.jpg",
    itemName : 'Cucumbera',
    itemType : 'Vegetable',
    itemRate : '100'
  },
  {
   // itemImage :"assets/mylistImage/tomato.jpg",
    itemName : 'Tomato',
    itemType : 'Vegetable',
    itemRate : '50'
  },
  {
    //itemImage :"assets/mylistImage/brocoli.jpg",
    itemName : 'Brocoli',
    itemType : 'Vegetable',
    itemRate : '200'
  }c */
]

  constructor( private router:Router,public modalCtrl:ModalController) { }

 async addTask(){
  //  this.router.navigate(['my-listings-add']);
  const modal = await this.modalCtrl.create({
   component:MyListingsAddPage
  })
  
   modal.onDidDismiss().then(newTaskobj =>{
     // console.log(newTaskobj.data);
     this.todolist.push(newTaskobj.data)
    })
    
   return (await modal).present();
   // return await modal.present()
  }

  ngOnInit() {
  }

}
