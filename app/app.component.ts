import { Component } from '@angular/core';

let a: number;
let i: number;

class Item { 
    constructor(public surname: string, public name: string, public patronymic:string, public position: string, public dateOfBirth: string, 
        public address: string, public number: string, public email: string, public amountOfSalary: number) {}
}

const items: Item[] = [
    { surname: "Попов", name: "Павел", patronymic: "Павлович", position: "Руководитель",
    dateOfBirth: "1988-01-12", address: "г. Новополоцк ул. Молодежная 22-1-12", number: "+375334567890", 
     email: "qwe@qwe.qwe", amountOfSalary: 1500 }
];

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    items: Item[] = items;

    delete(item: any) {
        if(confirm('Вы действительно хотите удалить запись?')){
        let index = this.items.indexOf(item);
    
        if(index > -1) {
            this.items.splice(index, 1);
        }
        }}


    addItem(surname: string, name: string, patronymic:string, position: string, dateOfBirth: string, 
        address: string, number: string, email: string, amountOfSalary: number): void {

            
        if(a==5){
            let item: Item = new Item(surname, name, patronymic, position, dateOfBirth, address, number,
                email, amountOfSalary); 
                items.splice(i, 1);
            this.items.push(item);
            var button = document.getElementsByClassName('sub1'); 
            button[0].innerHTML = 'Добавить';
            a=0;
        }else{
            let item: Item = new Item(surname, name, patronymic, position, dateOfBirth, address, number,
                email, amountOfSalary);                    
            this.items.push(item);
        }
        
             
   }

   

    surname: string; name: string; patronymic:string; position: string; dateOfBirth: string; 
    address: string; number: string; email: string; amountOfSalary: number;
   
    
  

    edit (item: any) {
    
        this.surname = item.surname; 
        this.name = item.name; 
        this.patronymic = item.patronymic; 
        this.position = item.position; 
        this.dateOfBirth = item.dateOfBirth; 
        this.address = item.address; 
        this.number = item.number; 
        this.email = item.email; 
        this.amountOfSalary = item.amountOfSalary;

        
        var button = document.getElementsByClassName('sub1'); 
        button[0].innerHTML = 'Сохранить';
        let index = this.items.indexOf(item);   
        i=index;
        a=5; 
    }
}
