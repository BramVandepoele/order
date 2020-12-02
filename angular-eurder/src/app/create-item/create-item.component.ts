import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import {NewItem} from "../newItem";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(private location: Location, private itemService: ItemService) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  createNewItem(name: string, description: string, price: string, stock: string) {
    let priceValue = Number(price);
    let stockValue = Number(stock);
    let newItem: NewItem = new NewItem(stockValue, description, name, priceValue, "");
    console.log(newItem);
    this.itemService.addItem(newItem).subscribe();
    // @ts-ignore
    document.getElementById("success").style.visibility="visible";

    this.resetForm();
  }

  private resetForm() {
    // @ts-ignore
    document.getElementById("name").value='';
    // @ts-ignore
    document.getElementById("description").value='';
    // @ts-ignore
    document.getElementById("price").value='';
    // @ts-ignore
    document.getElementById("stock").value='';
  }
}
