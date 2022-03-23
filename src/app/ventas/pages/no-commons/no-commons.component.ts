import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [`a{ color: white}`]
})
export class NoCommonsComponent {

  url_I18nSelectPipe: string = "https://angular.io/api/common/I18nSelectPipe";
  url_I18nPluralPipe: string = "https://angular.io/api/common/I18nPluralPipe";
  url_slicePipe: string = "https://angular.io/api/common/SlicePipe";
  url_jsonPipe: string = "https://angular.io/api/common/JsonPipe";
  url_asyncPipe: string = "https://angular.io/api/common/AsyncPipe";
  deleted: string = "";
  costumersDeleted: string[]|undefined = [];

  // il18nSelect
  name: string = "Fernando";
  gender: string = 'male';

  inviteMap: any = {'male': 'invitarlo', 'female': 'invitarla', 'other': 'invitarle'};


  // il18nPlural
  costumers: string[] = ["Pedro", "Andrea", "Anghy", "Samanta", "Liz", "Nayeli"];
  messageMapping: {[k: string]: string} = {
        '=0': '# clientes',
        '=1': 'un cliente esperando.', 
        'other': '# clientes esperando.'};


  changeGender(){
    this.gender = (this.gender=='male')?"female":"male"; 
    this.name = (this.gender=='male')?"Fernando":"Andrea"; 
  }

  reduceCostumers(){
    this.deleted = this.costumers.pop() || "";
    this.costumersDeleted?.push(this.deleted);
    console.log(this.costumersDeleted);
  }

  increaseCostumers(){
    this.costumers.push(this.costumersDeleted?.pop() || "");
    console.log(this.costumers);
  }

  // KeyValue Pipe
  person={
    name: "Alucard",
    age: 23,
    address: "Ottawa, Canada"
  }

  // KeyValue Pipe
  heroes = [
    {
      name: "Superman",
      power: "Super Stronge",
      fly: true
    },
    {
      name: "Acuaman",
      power: "comunicate fish",
      fly: false
    },
    {
      name: "Batman",
      power: "Millonarian",
      fly: false
    }
  ]


  // Async Pipe
  myObservable = interval(3000);

  valuePromise = new Promise((resolve, err)=>{
    setTimeout(()=>{
      resolve("Tenemos datos de la promesa");

    }, 3500)
  });
}
