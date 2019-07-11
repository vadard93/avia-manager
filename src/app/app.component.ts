import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cityStart: string;
  cityFinish: string;
  date: string;
  constructor(private http: HttpClient) {

  }
  public search() {
    if (this.cityStart != undefined && this.cityFinish != undefined && this.date != undefined) {
      this.getPrice(this.cityStart, this.cityFinish, this.date).subscribe((data) => {
        var res = data.prices.sort(function (a, b) {
          return a.value > b.value ? 1 : -1;
        });
        console.log(res)
      });
    }
  }
  public getPrice(cityStart: string, cityFinish: string, date: string): Observable<any> {
    return this.http.get<any>("https://lyssa.aviasales.ru/price_matrix?origin_iata=" + cityStart + "&destination_iata=" + cityFinish + "&depart_start=" + date + "&depart_range=3&affiliate=false");
  }

}


