import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-my-listings-add',
  templateUrl: './my-listings-add.page.html',
  styleUrls: ['./my-listings-add.page.scss'],
})
export class MyListingsAddPage implements OnInit {

  constructor(public actionSheet: ActionSheetController) {}

  
  ngOnInit() {
  }
  async actionsheet(){
    const actionsheetConst = await this.actionSheet.create({
      header:"Choose One",
      cssClass:"my-custom-class",
      buttons :[{
        text:"Camera",
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
