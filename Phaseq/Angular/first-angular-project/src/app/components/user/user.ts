import { Component, Input } from '@angular/core';

@Component({
  selector: 'user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input() name:string="Rohan";
  @Input() age:number=25;

}
