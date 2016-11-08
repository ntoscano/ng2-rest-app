import { Component } from '@angular/core';

@Component({
    selector: 'review-component',
    templateUrl: './review.component.html'
})
export class ReviewComponent {
    public displayArray = [1, 2, 3, 4, 5];
    constructor(){}
}