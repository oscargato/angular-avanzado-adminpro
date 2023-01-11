import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styleUrls: ['./promesa.component.css']
})

export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(resp =>{
      console.log('Usu',resp)
    });
  }

  getUsuarios(){
    const promesa = new Promise(resolve =>{
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => resolve(body.data))
    });

    return promesa;
  }
}
