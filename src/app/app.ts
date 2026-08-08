import { Component, signal } from "@angular/core";

@Component({
    template:'./app.html',
})

export class App{
    protected title = signal('angul-it');
}