import { Component, Input, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string;
  @ViewChild(ModalDirective) modal: ModalDirective;

  show(){
    this.modal.show();
  }

  hide(){
    this.modal.hide();
  }
}