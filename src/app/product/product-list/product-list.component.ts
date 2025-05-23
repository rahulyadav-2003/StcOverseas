import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


 products = [
  {
    name: 'GPS Tracker Pro X',
    price: 3999,
    imageUrl: 'assets/products/gps1.jpg',
    trackingType: 'Real-time + History',
    batteryLife: '7 Days Standby',
    connectivity: '4G + SMS + App',
    warranty: '1 Year',
    description: 'Advanced GPS tracker suitable for vehicles and personal use with geo-fencing, real-time tracking, and mobile app integration.'
  },
  {
    name: 'Mini GPS Locator',
    price: 2499,
    imageUrl: 'assets/products/gps2.jpg',
    trackingType: 'Live Tracking',
    batteryLife: '3 Days',
    connectivity: '2G + App',
    warranty: '6 Months'
  }
  ,
  {
    name: 'Mini GPS Locator',
    price: 2499,
    imageUrl: 'assets/products/gps2.jpg',
    trackingType: 'Live Tracking',
    batteryLife: '3 Days',
    connectivity: '2G + App',
    warranty: '6 Months'
  }
  ,
  {
    name: 'Mini GPS Locator',
    price: 2499,
    imageUrl: 'assets/products/gps2.jpg',
    trackingType: 'Live Tracking',
    batteryLife: '3 Days',
    connectivity: '2G + App',
    warranty: '6 Months'
  }
  ,
  {
    name: 'Mini GPS Locator',
    price: 2499,
    imageUrl: 'assets/products/gps2.jpg',
    trackingType: 'Live Tracking',
    batteryLife: '3 Days',
    connectivity: '2G + App',
    warranty: '6 Months'
  }
  ,
  {
    name: 'Mini GPS Locator',
    price: 2499,
    imageUrl: 'assets/products/gps2.jpg',
    trackingType: 'Live Tracking',
    batteryLife: '3 Days',
    connectivity: '2G + App',
    warranty: '6 Months'
  }
  ,
  {
    name: 'Mini GPS Locator',
    price: 2499,
    imageUrl: 'assets/products/gps2.jpg',
    trackingType: 'Live Tracking',
    batteryLife: '3 Days',
    connectivity: '2G + App',
    warranty: '6 Months'
  }
  ,
  {
    name: 'Mini GPS Locator',
    price: 2499,
    imageUrl: 'assets/products/gps2.jpg',
    trackingType: 'Live Tracking',
    batteryLife: '3 Days',
    connectivity: '2G + App',
    warranty: '6 Months'
  }
  ,
  {
    name: 'Mini GPS Locator',
    price: 2499,
    imageUrl: 'assets/products/gps2.jpg',
    trackingType: 'Live Tracking',
    batteryLife: '3 Days',
    connectivity: '2G + App',
    warranty: '6 Months'
  }
  ,
  {
    name: 'Mini GPS Locator',
    price: 2499,
    imageUrl: 'assets/products/gps2.jpg',
    trackingType: 'Live Tracking',
    batteryLife: '3 Days',
    connectivity: '2G + App',
    warranty: '6 Months'
  }
];



 selectedProduct: any = null;

  viewDetails(product: any) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  BuyNow(){
     this.selectedProduct = null;
  }





}
