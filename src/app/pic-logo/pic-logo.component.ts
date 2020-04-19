import { Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pic-logo',
  templateUrl: './pic-logo.component.html',
  styleUrls: ['./pic-logo.component.scss']
})
export class PicLogoComponent implements OnInit,OnChanges {
  imgStyle: {};
  logoStyles: {};
  @Input('height') height: string;
  @Input('width') width: string;
  @Input('borderWidth') borderWidth: string;

  constructor() { }

  ngOnInit() {
    this.logoStyles = {
      height: this.height,
      width: this.width
    };
    this.imgStyle = {
      borderWidth: this.borderWidth
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
  }

}
