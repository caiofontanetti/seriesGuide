import { SeriesModel } from './series.model';
import { SerieService } from './../serie.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {


  series: SeriesModel[];
  page: number;
  prop;
  year: String;
  years = [];
  loadingSeries: boolean;
  nextPage: number;
  seriesList: any[];
  seriesCount: number;
  isSeriesListEnd: boolean;
  listMessage: string;
  endOfSeriesListMessage: string;
  interval: any;

  constructor(private serieService: SerieService) {
    this.page = 1;
    this.nextPage = 0;
    this.loadingSeries = true;
    this.seriesList = [];
    this.listMessage = '';
    this.endOfSeriesListMessage = 'Sem mais series a serem exibidas'
  }

  ngOnInit(): void {
    this.listar(this.page);
  }

  listar(page: number) {
    this.serieService.getSeries(this.page).subscribe(this.handleGetSeriesSuccess.bind(this));
    // this.serieService.getSeries().subscribe(dados => this.series = dados);
    // this.serieService.getSeries(this.page).subscribe(dados => console.log(dados));
  }

  handleGetSeriesSuccess(data: any) {
    if (data['results'].length) {
      this.series = data.results;
      this.nextPage += 1;
      this.seriesCount = data['results'].length;
      //this.updateBaseList(data['results']);
      console.log(this.series);
      console.log("Página:" + this.page);
    } else {
      this.isSeriesListEnd = true;
      this.listMessage = this.hasSeries() ? this.endOfSeriesListMessage : 'Não temos nenhuma série';
      console.log(this.listMessage);
    }
    this.loadingSeries = false;
    // for (var i in this.series) {
    //   this.prop = this.series[i].genres;
    //   this.year = this.series[i].first_air_date;
    //   this.year = this.year.substr(0, 4);
    //   this.years.push(this.year);
    //   // const dataS = new Date('2019-10-07T00:00:00.000+00:00');
    //   // console.log(dataS.getUTCFullYear());
    //   // console.log(this.prop);
    // }
    // console.log(this.years);


  }

  hasSeries() {
    return (this.seriesList.length);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // console.log(e.target['scrollingElement'].scrollTop)
    const d = document.documentElement;
    const offset = d.scrollTop + window.innerHeight;
    const height = d.offsetHeight;
    // if ((offset >= height - 5) && (!this.canGetSeries)) {
    console.log(this.loadingSeries);
    if ((offset >= height - 1) && (this.canGetSeries)) {
      this.getPage();
      //this.listar(this.page);
      console.log(this.loadingSeries);

    }
  }

  getPage() {
    this.loadingSeries = true;
    this.page += 1;
    this.listar(this.page);
  }

  canGetSeries(): boolean {
    return !this.loadingSeries
  }

  updateBaseList(list: any[]) {
    this.interval = setInterval(() => {
      if (list.length) {
        this.seriesList.push(list.shift());
        console.log(this.seriesList);
      } else {
        clearInterval(this.interval);
        this.interval = false;
        this.handleIsSeriesListOver();
        this.listMessage = this.isSeriesListEnd ? this.endOfSeriesListMessage : '';
      }
    }, 150);
  }

  handleIsSeriesListOver() {
    this.isSeriesListEnd = this.seriesCount === this.seriesList.length;
}

  // handleGetSeriesError() {
  //   const message: Message = {
  //     title: 'Erro ao carregar séries!',
  //     subtitle: 'Por favor, tente novamente mais tarde',
  //     innerHTMLSubtitle: '',
  //     status: 'error'
  //   };

  //   this.messa;
  // }


}
