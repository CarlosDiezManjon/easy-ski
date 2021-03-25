import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  camCalgosa = "http://cantur.com/camaras/home/cantucom/public.html/camaras/calgosa002.jpg";
  camElchivo = "//cantur.com/camaras/home/cantucom/public.html/camaras/chivo000M.jpg";
  camTresMares = "//cantur.com/camaras/home/cantucom/public.html/camaras/tresmares002.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  reload(){
    this.camCalgosa = this.camCalgosa;
    this.camElchivo = this.camElchivo;
    this.camTresMares = this.camTresMares;
  }

}
