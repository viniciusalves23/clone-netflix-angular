import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {


  @Input() title: any;
  //como tava o viewchiid: (dando erro)
  //@ViewChild('trailer', {static: true}) trailer: ElementRef<HTMLVideoElement>;
  //solução:
  @ViewChild('trailer', { static: true }) trailer!: ElementRef<HTMLVideoElement>;

  constructor () {

  }

  ngOnInit() {

  }

  playVideo(){
    //video sempre começa do zero quando passar o mmouse
    this.trailer.nativeElement.currentTime = 0;
    //video inicia quando passar o mouse
    this.trailer.nativeElement.play();
  }

  stopVideo() {
    //video para quando tirar o mouse
    this.trailer.nativeElement.pause();
  }
}
