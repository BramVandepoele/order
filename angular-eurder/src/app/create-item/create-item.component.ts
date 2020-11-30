import { Component, OnInit } from '@angular/core';
import {ItemService} from "../item.service";
import {Item} from "../item";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
