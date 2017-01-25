import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';
import { ItemCreatePage } from '../item-create/item-create';

import { Item } from '../../models/item';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})

export class ListMasterPage {

  currentItems: Item[];

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

  addItem() {
    
  }

  deleteItem(item) {
    
  }

  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
}
