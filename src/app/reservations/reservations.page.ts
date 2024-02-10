import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  public alertButtons = [
    {
      text: 'No',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Sí',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
}
