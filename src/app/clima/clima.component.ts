import { Input, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
  @Input() latitude:String;
  @Input() longitude:String;
  temperatura:String;
  localizacao:String;
  key:String = "6e24edd54ad31de7892c5aaaaaee8973";
  url:String = "http://api.openweathermap.org/data/2.5/weather";
  constructor(private http:HttpClient) { }

  async ngOnInit() {
    //alert(this.latitude);
    //alert(this.longitude);
  }

  async getPositionData() {
    this.url = `${this.url}?lat=${this.latitude}&lon=${this.longitude}&units=metric&APIKEY=${this.key}`;
    var data = await this.http.get(`${this.url}`).toPromise();
    this.temperatura = data.main.temp;
    this.localizacao = data.name;
    console.log(data)
  }

}
