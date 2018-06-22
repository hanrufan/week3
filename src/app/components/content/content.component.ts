import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  titleArr = [
    {'title':'TOTAL REVENUE', 'num': '54,540', 'color': 'text-success'},
    {'title':'TOTAL COST', 'num': '12,660', 'color': 'text-danger'},
    {'title':'NET INCOME', 'num': '41,880', 'color': 'text-primary'}
  ];

  
  firstArr =  [
    {'icon': 'fab fa-facebook','url':'www.facebook.com', 'num':'45,836','grow':'up','grow_num':'20'},
    {'icon': 'fab fa-google','url':'www.google.com', 'num':'23,582','grow':'up','grow_num':'12'},
    {'icon': 'fas fa-shopping-cart','url':'www.shopify.com', 'num':'2,489','grow':'down','grow_num':'15'},
    {'icon': 'fab fa-wordpress','url':'www.wordpress.com', 'num':'10,57','grow':'down','grow_num':'30'}
  ];
  //   {'title':'Latest Orders', 'list':[
      
  //   ]}
  // ];

  constructor() { }

  ngOnInit() {
  }

}
