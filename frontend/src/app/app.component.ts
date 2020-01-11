import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'igniteSol';
  allBooks: any[] = [];
  genreBooks: any[] = [];
  genre: any;

  

  constructor(private service: AppService, private spinner: NgxSpinnerService,private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('user')){
      this.router.navigate(['/home'])
    }else{
      this.router.navigate(['/login'])
    }

  }


}
