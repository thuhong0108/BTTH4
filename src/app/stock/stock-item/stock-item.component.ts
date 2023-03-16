import { Component, OnInit
 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {

  public stock: Stock =<Stock>{};
 public stockList: Stock[] =[];
 public confirmed = false;
 public exchanges = ['NYSE', 'THTH', 'DPTK'];

  constructor() {}
  public checkLenght()
  {
    //return this.stock.code.length == 0 ? true : false;
  }
  ngOnInit() {
   this.stock = new Stock("", "", 0, 0, this.exchanges[0]);
    //this.name = 'Test Stock Company';
    //this.code = 'TSC';
    //this.price = 85;
    //this.previousPrice = 80;
    //this.positiveChange = this.price >= this.previousPrice
    //this.favorite = false;
  }

  
  
  toggleFavorite(event:any){
    console.log('We are toggling the favorite state for this stock',event);
    this.stock.favorite = !this.stock.favorite;
  }

  setStockPrice(price: any)
  {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm: NgForm) {
    if (stockForm.valid) {
      this.stockList =  [...this.stockList , stockForm.value];
      console.log('Creating stock',this.stockList);
    } else {
      console.log('Stock form is in an invalid state');
    }
  }
}
