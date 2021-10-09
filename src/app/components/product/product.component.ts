import { Component, OnInit } from '@angular/core';
import { Model } from 'src/app/model/repository.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  model: Model = new Model();

  constructor() {}
}
