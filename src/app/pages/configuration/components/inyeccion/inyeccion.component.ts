import { Component } from '@angular/core';
import { SliderService } from '../../../../services/slider.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inyeccion',
  standalone: true,
  imports: [],
  templateUrl: './inyeccion.component.html',
  styleUrl: './inyeccion.component.scss'
})
export class InyeccionComponent {

  constructor(
    private sliderService: SliderService
  ) {}

  get dataInyeccion() {
    return this.sliderService.getDataInyeccion();
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
        Swal.fire({
          title: "Eliminado!",
          text: "El elemento ha sido eliminado!",
          icon: "success"
        });
      }
    });
  }


}
