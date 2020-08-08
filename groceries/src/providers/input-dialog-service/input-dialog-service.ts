import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';



/*
  Generated class for the InputDialogServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InputDialogServiceProvider {

  constructor(public dataService: GroceriesServiceProvider, public alertCtrl: AlertController) {
    console.log('Hello InputDialogServiceProvider Provider');
  }

 

  showPrompt(item?, index?) {
    const prompt = this.alertCtrl.create({
      title: item ? 'Edit Item' : 'Add Item',
      message: item ? "Edit item info." : "Enter item info.",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        }, {
          name: 'quantity',
          placeholder: 'Quantity',
          type: 'number',
          value: item ? item.quantity : null
        },
      ],
    

      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (index != undefined) {
              item.name = data.name;
              item.quantity = data.quantity;
              item.price = data.price;
              this.dataService.editItem(item, index);
            }
            else {
              this.dataService.addItem(data);
            }
          }
        }
      ]
    });
    prompt.present();
  }

}