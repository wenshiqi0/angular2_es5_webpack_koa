var core = require('angular2/core');
var common = require('angular2/common');

var com = core
  .Component({
    selector: 'my-app'
  })
  .View({
    template: `
      <p>My name: {{ myName }}</p>
      <p>Friends:</p>
      <ul>
        <li *ngFor="#name of names">
          {{ name }}
        </li>
      </ul>
      <p *ngIf="names.length > 3">You have many friends</p>
      <input #textbox (keyup)="doneTyping($event)">
      <button (click)="addTodo(textbox.value)">Add Todo</button>
    `,
    directives: [common.NgFor,common.NgIf]
  })
  .Class({
    constructor: function(){
      this.myName = 'Test';
      this.names = ['Winsky','Hahahahaha','Gogogogo','Lulululululu'];

      this.addTodo = function(value){
        this.names.push(value);
      }

      this.doneTyping = function($event) {
        if($event.which === 13) {
          this.addTodo($event.target.value);
          $event.target.value = null;
        }
      }
    }
  });

module.exports = com;
