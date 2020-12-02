import {Component, OnInit} from '@angular/core';
import {ItemService} from "../item.service";
import {Item} from "../item";
import {Observable, of, Subject} from "rxjs";

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

    items: Item[] | undefined;
    private selectedItem: Item | undefined;

    constructor(private itemService: ItemService) {
    }

    ngOnInit(): void {
        this.getItems();
    }

    onSelect(item: Item): void {
        this.selectedItem = item;
    }

    getItems(): void {
        this.itemService.getAllItems().subscribe(items => this.items = items);
    }

}

