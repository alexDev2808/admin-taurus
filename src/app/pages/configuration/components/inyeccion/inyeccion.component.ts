import { Component, ElementRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { SliderService } from '../../../../services/slider.service';
import Swal from 'sweetalert2';
import { v4 as uuid } from 'uuid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inyeccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inyeccion.component.html',
  styleUrl: './inyeccion.component.scss'
})
export class InyeccionComponent {

  @ViewChild('txtName') inputName!: ElementRef;
  @ViewChild('txtURL') inputURL!: ElementRef;
  showModal = false;
  isModalActive = false;

  constructor(
    private sliderService: SliderService
  ) {}

  get dataInyeccion() {
    return this.sliderService.getDataInyeccion();
  }

  showModalToggle() {
    this.showModal = !this.showModal
  }

  successAlert() {
    Swal.fire({
      icon: 'success',
      text: 'Agregado correctamente',
      timer: 1500,
      timerProgressBar: true,
    })
  }

  agregar() {
    
    const name = this.inputName.nativeElement.value
    const url = this.inputURL.nativeElement.value

    this.dataInyeccion.push({
      "id": uuid(),
      "name": name,
      "item": url,
      "ext": "",
      "duration": 0,
      "frame": true
    })

    this.successAlert()
    this.showModalToggle()
  }

  editar() {
    Swal.fire({
      title: "Editar:",
      text: 'Ingresa el nombre:',
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Modificar",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
            https://api.github.com/users/${login}
          `;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  }

  eliminar(index: number) {

    Swal.fire({
      title: "¿Confirmas la eliminación?",
      text: `Se eliminará: ${this.dataInyeccion[index].name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#C62E2E",
      cancelButtonColor: "#B7B7B7",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, eliminar!"
    }).then((result) => {
      
      if (result.isConfirmed) {
        this.sliderService.deleteItemInyeccion(index);
        Swal.fire({
          title: "Eliminado!",
          text: "El elemento ha sido eliminado!",
          icon: "success"
        });
      } else {
        Swal.fire("Operacion cancelada", "", "info")
      }
    });
  }


}
