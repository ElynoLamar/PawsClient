import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

	constructor() { }
	cars: any[] = [
		// {
		// 	"id": "1000",
		// 	"code": "f230fh0g3",
		// 	"name": "Bamboo Watch",
		// 	"description": "Product Description",
		// 	"image": "bamboo-watch.jpg",
		// 	"price": 65,
		// 	"category": "Accessories",
		// 	"quantity": 24,
		// 	"inventoryStatus": "INSTOCK",
		// 	"rating": 5
		// },
		{
			"name": "teste1",
			"price":"100 pts",
			"image": "../../../../assets/images/PawsLogo.png",
		},
		{
			"name": "teste2",
			"price":"200 pts",
			"image": "../../../../assets/images/PawsLogo.png",
		},
		{
			"name": "teste3",
			"price":"300 pts",
			"image": "../../../../assets/images/PawsLogo.png",
		},
	]
	ngOnInit(): void {
	}

}
