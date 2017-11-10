"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var a;
var i;
var Item = (function () {
    function Item(surname, name, patronymic, position, dateOfBirth, address, number, email, amountOfSalary) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.position = position;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.number = number;
        this.email = email;
        this.amountOfSalary = amountOfSalary;
    }
    return Item;
}());
var items = [
    { surname: "Попов", name: "Павел", patronymic: "Павлович", position: "Руководитель",
        dateOfBirth: "1988-01-12", address: "г. Новополоцк ул. Молодежная 22-1-12", number: "+375334567890",
        email: "qwe@qwe.qwe", amountOfSalary: 1500 }
];
var AppComponent = (function () {
    function AppComponent() {
        this.items = items;
    }
    AppComponent.prototype.delete = function (item) {
        if (confirm('Вы действительно хотите удалить запись?')) {
            var index = this.items.indexOf(item);
            if (index > -1) {
                this.items.splice(index, 1);
            }
        }
    };
    AppComponent.prototype.addItem = function (surname, name, patronymic, position, dateOfBirth, address, number, email, amountOfSalary) {
        if (a == 5) {
            var item = new Item(surname, name, patronymic, position, dateOfBirth, address, number, email, amountOfSalary);
            items.splice(i, 1);
            this.items.push(item);
            var button = document.getElementsByClassName('sub1');
            button[0].innerHTML = 'Добавить';
            a = 0;
        }
        else {
            var item = new Item(surname, name, patronymic, position, dateOfBirth, address, number, email, amountOfSalary);
            this.items.push(item);
        }
    };
    AppComponent.prototype.edit = function (item) {
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
        var index = this.items.indexOf(item);
        i = index;
        a = 5;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map