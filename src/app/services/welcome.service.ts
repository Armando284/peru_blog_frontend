import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor() { }

  async getPosts() {
    // esto es solo para pruebas, estos datos deben salir del backend
    return await this.llenarListaParaPruebas();
  }

  private llenarListaParaPruebas(): {}[] {
    let respuesta: {}[] = [];
    for (let i = 0; i < 10; i++) {
      respuesta.push({
        title: `post ${i + 1}`,
        body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti alias aut dicta optio nisi nobis aspernatur? Suscipit distinctio vero laboriosam dicta cum, quaerat commodi officia cupiditate iusto delectus. Consequatur?',
        author: 'Juan Perez Perez',
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return respuesta;
  }
}
