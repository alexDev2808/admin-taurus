import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SafePipe } from '../../../../pipes/safe.pipe';
import { CommonModule } from '@angular/common';
import { SliderItem } from '../../../../interfaces/Slider';
import { SliderService } from '../../../../services/slider.service';
import { LoaderComponent } from "../../../../shared/loader/loader.component";

@Component({
  selector: 'app-inyeccion',
  standalone: true,
  imports: [
    SlickCarouselModule,
    SafePipe,
    CommonModule,
    LoaderComponent
],
  templateUrl: './inyeccion.component.html',
  styleUrl: './inyeccion.component.scss'
})
export class InyeccionComponent implements OnInit {

  @ViewChild('btnPausar') btnPausar!: ElementRef;
  @ViewChild('btnPlay') btnPlay!: ElementRef;
  @ViewChild('btnNext') btnNext!: ElementRef;

  public widthScreen: any
  public heigthScreen: any
  public isPaused: boolean = true
  public isLoading: boolean = true

  constructor( private slidesService: SliderService) {
    setTimeout(() => {
      this.isLoading = false
    }, 5000)
  }

  ngOnInit() {
    this.heigthScreen = window.innerHeight * 1.1
    this.widthScreen = window.innerWidth
  }

  get data(): SliderItem[] {
    return this.slidesService.getDataInyeccion()
  }

  onPauseButton() {
    this.isPaused = !this.isPaused
  }

  slideConfig = {
    "vertical": false,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": false,
    "autoplaySpeed":5000,
    "dots": true,
    "pauseOnHover": false,
    "lazyLoad": 'ondemand',
    "adaptativeHeight": false
  };

  slickInit(e: any) {

  }

  breakpoint(e: any) {

  }

  beforeChange(e: any) {
    
  }

}
