import { Component } from '@angular/core';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.css']
})
export class ProdukComponent {
    listHandphone : any[] = [
      {
        id : 1,
        merkHandphone : "iPhone 15",
        harga : 25000000,
        discount : 15,
        imgPath : 'https://cdn.eraspace.com/media/catalog/product/a/p/apple_iphone_15_blue_1_3.jpg',
        inStock : true
      },
      {
        id : 2,
        merkHandphone : "iPhone 13",
        harga : 15000000,
        discount : 0,
        imgPath : 'https://cdn.eraspace.com/media/catalog/product/i/p/iphone_13_pink_3_5.jpg',
        inStock : false
      },
    ]

    countAll : number = this.listHandphone.length;
    countInStock : number = this.listHandphone.filter(p => p.inStock == true).length
    countOutOfStock : number = this.listHandphone.filter(p => p.inStock == false).length

    // OUTPUT
    selectedFilter : string = 'all';
    onFilterChanged(event : any){
      // console.log("Nilai Yang Ditangkap " + event)
      this.selectedFilter = event
    }

    searchText : string = '';
    handleSearchText(event : any){
        this.searchText = event
    }

}
