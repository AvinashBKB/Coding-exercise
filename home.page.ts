import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  @ViewChild('date') date: any;
  public isShown: boolean = true;
  public min = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString();
  public max = new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString();
  public output:any = {
    today: null,
    yesterday: null,
    pastTenDays: null,
    lastYear: null
  }
  public selectedDate: any;
  constructor() {}

  onSubmit(): void {
    this.output.today = new Date();
    this.output.yesterday = new Date().setDate(new Date().getDate() - 1);
    this.output.pastTenDays = new Date(this.selectedDate).setDate(new Date(this.selectedDate).getDate() - 10);
    this.output.lastYear = new Date(this.selectedDate).setFullYear(new Date(this.selectedDate).getFullYear() - 1);
  }

}
