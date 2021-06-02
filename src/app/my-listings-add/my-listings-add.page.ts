import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-listings-add',
  templateUrl: './my-listings-add.page.html',
  styleUrls: ['./my-listings-add.page.scss'],
})
export class MyListingsAddPage implements OnInit {
  user: any ={};
  //name:string;



  constructor(public actionSheet: ActionSheetController ,public router :Router) {}

  
  ngOnInit() {
  }

  getpublishdata(){
   console.log(this.user);
   //this.router.navigate(['my-listings']);
  }
  async actionsheet(){
    const actionsheetConst = await this.actionSheet.create({
      header:"Choose One",
      cssClass:"my-custom-class",
      buttons :[{
        text:"Camera",
      //  buttons: (ActionSheetButton | string)[],
      
        //  role:
          icon:"camera",
        //  cssClass
        handler:()=> {
          console.log("camera") }
     },
        {
          text:"From gallery",
          icon:"folder",
          handler:()=> {
            console.log("gallery") }
          
      },
        {
          text:"Cancle",
          icon:"close",
          role:'close',
          handler: () => {
            console.log('click cancle');
          }

        }
    ]
    })

    actionsheetConst.present();
    actionsheetConst.onDidDismiss().then(()=>{
      console.log("onDidmess");
    })

  }


}
