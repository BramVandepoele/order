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
}
