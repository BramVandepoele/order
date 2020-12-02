import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../item.service";
import {Item} from "../item";

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

    @Input() item: Item | undefined;

    constructor(
        private route: ActivatedRoute,
        private itemService: ItemService,
        private location: Location
    ) {
    }

    ngOnInit(): void {
        this.getItem();
        console.log(this.item);
    }

    goBack(): void {
        this.location.back();
    }

    getItem(): void {
        const id = this.route.snapshot.paramMap.get('id')!;
        this.itemService.getItemById(id)
            .subscribe(item => this.item = item);
    }

    updateItem(id: string, name: string, description: string, price: string, stock: string) {
        let stockValue = Number(stock);
        let priceValue = Number(price);
        let updatedItem: Item = new Item(stockValue, description, id, name, priceValue, "");
        this.itemService.updateItem(updatedItem).subscribe();
        // @ts-ignore
        document.getElementById("success").style.visibility = "visible";
    }

    allowUpdate(id: string, name: string, description: string, price: string, stock: string) {
        // @ts-ignore
        if(document.getElementById("updateButton").innerText === "Update"){
            console.log("click");
            // @ts-ignore
            document.getElementById("updateButton").innerText = "Save element";
            // @ts-ignore
            document.getElementById("name").removeAttribute("readonly");
            // @ts-ignore
            document.getElementById("description").removeAttribute("readonly");
            // @ts-ignore
            document.getElementById("price").removeAttribute("readonly");
            // @ts-ignore
            document.getElementById("stock").removeAttribute("readonly");
        }else{
            this.updateItem(id, name, description, price, stock);
        }

    }
}
