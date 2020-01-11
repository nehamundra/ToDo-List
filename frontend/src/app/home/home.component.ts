import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  listArr: any[] = []
  header: string;
  display: boolean = false;
  selectedTodo: any;
  count: number = 0;
  del: boolean = false;

  constructor(private service: AppService, private router: Router, private spinner: NgxSpinnerService,
    private messageService: MessageService) { }

  ngOnInit() {

    this.selectedTodo = { 'id': null, title: '', desc: '' };

    this.spinner.show();
    this.service.getList().subscribe(res => {
      this.spinner.hide();
      console.log(res)
      this.listArr = res;
      this.count = this.listArr[this.listArr.length - 1].id + 1;
    }, err => {
      console.log(err.message);
      this.spinner.hide();
    })

    this.selectedTodo = {
      id: null, title: '', desc: ''
    }
  }


  editTodo(todo) {
    this.selectedTodo = { ...todo };
    this.display = true;
    this.header = 'Edit Task'
  }

  createTask() {
    this.header = 'Create Task';
    this.display = true;
    this.selectedTodo = {
      'id': this.count, title: '', desc: ''
    }

    this.count += 1;
  }

  submitEdit() {
    if (this.header === 'Edit Task') {
      for (let i = 0; i < this.listArr.length; i++) {
        if (this.listArr[i].id === this.selectedTodo.id) {
          this.listArr[i] = { ...this.selectedTodo };
          break;
        }
      }
    }

    if(this.header==='Create Task'){
      this.listArr.push(this.selectedTodo)
    }
    this.editDel();
    this.display = false;

  }

  notification(msg) {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: msg });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error Message', detail: 'Editing failed' });
  }

  delTodo(todo) {
    this.del = true;
    this.selectedTodo = { ...todo };
  }

  submitDel() {
    this.del = false;
    var index = null;
    for (let i = 0; i < this.listArr.length; i++) {
      if (this.listArr[i].id === this.selectedTodo.id) {
        index = i;
        break;
      }
    }
    this.listArr.splice(index, 1);
    this.editDel();
  }

  editDel() {
    this.spinner.show();
    this.service.editList(this.listArr).subscribe(res => {
      this.spinner.hide();
      let editres = res
      if (editres.statusCode == 0) {
        this.notification(editres.status);
      } else {
        this.showError();
      }
    },err=>{
      console.log(err.message);
      this.spinner.hide();
    })
  }

}
