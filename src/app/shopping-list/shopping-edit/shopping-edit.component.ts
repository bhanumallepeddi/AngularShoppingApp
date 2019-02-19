import { Component, OnInit, ViewChild,
   ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingedient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
@Output() ingridientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
  const ingrident = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
  this.ingridientAdded.emit(ingrident);
  }
}
