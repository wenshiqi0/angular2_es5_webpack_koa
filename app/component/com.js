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
    `,
    directives: [common.NgFor,common.NgIf]
  })
  .Class({
    constructor: function(){
      this.myName = 'Test';
      this.names = ['Winsky','Hahahahaha','Gogogogo','Lulululululu'];
    }
  });

module.exports = com;
