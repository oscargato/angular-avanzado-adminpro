import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {

  public menu:any[] = [
    { titulo:'Principal',
      icono: 'mdi mdi-gauge',
      submenu:[
        { titulo: 'Main', url: '/' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Graficas', url: 'grafica1' },
        { titulo: 'Promesas', url: 'promesa' },
        { titulo: 'RXJS', url: 'rxjs' },
      ]
    }
  ]

  constructor(){}
}
