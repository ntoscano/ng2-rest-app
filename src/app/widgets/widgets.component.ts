import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../shared'

@Component({
    selector: 'widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.css']
})

export class WidgetComponent implements OnInit {
    public selectedWidget:any;
    public widgets:any;

    constructor(private WidgetService: WidgetService) { }

    ngOnInit() {
        this.widgets = this.WidgetService.widgets;
    }
    selectWidget(widget:any){
        this.selectedWidget = widget;
    }
}