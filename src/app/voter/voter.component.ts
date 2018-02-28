import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {

  @Input() myVote = 0;

  @Output() vote = new EventEmitter();

  upVote() {
    if (this.myVote === 1) {
      return;
    }

    this.myVote++;

    this.vote.emit(this.myVote);
  }

}
