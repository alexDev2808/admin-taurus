import { Injectable } from '@angular/core';
import { SliderItem } from '../interfaces/Slider';
import { v4 as uuid } from 'uuid'; 

@Injectable({
  providedIn: 'root'
})
export class SliderService {


  private dataComunicados: SliderItem[] = [
    {
      "id": "1",
      "name": "Tablero Taurus",
      "item": "tablero.jpg",
      "ext": "",
      "duration": 0,
      "frame": false
    },
    {
      "id": "2",
      "name": "Dias Feriados",
      "item": "diasFeriados.jpg",
      "ext": "",
      "duration": 0,
      "frame": false

    },
    {
      "id": "3",
      "name": "Calidad Taurus",
      "item": "calidad.jpg",
      "ext": "",
      "duration": 0,
      "frame": false
    },
    {
      "id": "4",
      "name": "Organigrama",
      "item": "organigrama.jpg",
      "ext": "",
      "duration": 0,
      "frame": false

    },
    {
      "id": "5",
      "name": "5s",
      "item": "5_s.jpeg",
      "ext": "",
      "duration": 0,
      "frame": false

    },
    {
      "id": "6",
      "name": "Mapa Estrategico",
      "item": "mapaEst.jpg",
      "ext": "",
      "duration": 0,
      "frame": false

    },
    {
      "id": "7",
      "name": "Outlet",
      "item": "outlet.jpg",
      "ext": "",
      "duration": 0,
      "frame": false

    },
    {
      "id": "8",
      "name": "Venta Interna",
      "item": "ventaInterna.jpg",
      "ext": "",
      "duration": 0,
      "frame": false

    },
    {
      "id": "9",
      "name": "Cumpleaños",
      "item": "cumple.jpg",
      "ext": "",
      "duration": 0,
      "frame": false

    },
    {
      "id": "10",
      "name": "Honestometro",
      "item": "honestometro.jpg",
      "ext": "",
      "duration": 0,
      "frame": false

    },
    {
      "id": "11",
      "name": "Cumplimiento",
      "item": "cumplimiento.jpg",
      "ext": "",
      "duration": 0,
      "frame": false

    },
  ]

  private dataInyeccion: SliderItem[] = [
    {
      "id": uuid(),
      "name": "OEE Inyeccion",
      "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_f6hxkun0fd",
      "ext": "",
      "duration": 0,
      "frame": true
    },
    {
      "id": uuid(),
      "name": "OEE Inyeccion - Disponibilidad",
      "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_8uhwj24qgd",
      "ext": "",
      "duration": 0,
      "frame": true
    },
    {
      "id": uuid(),
      "name": "OEE Inyeccion - Eficiencia",
      "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_t5s21rgcfd",
      "ext": "",
      "duration": 0,
      "frame": true
    },
    {
      "id": uuid(),
      "name": "OEE Inyeccion - Calidad",
      "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_w4gf91btfd",
      "ext": "",
      "duration": 0,
      "frame": true
    },
    {
      "id": uuid(),
      "name": "OEE Ensamble",
      "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_jjymilf4id",
      "ext": "",
      "duration": 0,
      "frame": true
    },
    {
      "id": uuid(),
      "name": "OEE Ensamble - Disponibilidad",
      "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_9lm7da7xjd",
      "ext": "",
      "duration": 0,
      "frame": true
    },
    {
      "id": uuid(),
      "name": "OEE Ensamble - Eficiencia",
      "item": "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_aoxls9u6jd",
      "ext": "",
      "duration": 0,
      "frame": true
    }
  ]

  private dataEnsamble: SliderItem[] = [
    {
      "id": uuid(),
      "name": "OEE Ensamble",
      "item": "https://lookerstudio.google.com/embed/reporting/e687bb67-03ce-4d1b-b100-585d7d7e8c7e/page/yM8RE",
      "ext": "",
      "duration": 0,
      "frame": true
    },
    {
      "id": uuid(),
      "name": "OEE Ensamble - Disponibilidad",
      "item": "https://lookerstudio.google.com/embed/reporting/e687bb67-03ce-4d1b-b100-585d7d7e8c7e/page/p_hygqsk2xmd",
      "ext": "",
      "duration": 0,
      "frame": true
    },
    {
      "id": uuid(),
      "name": "OEE Ensamble - Eficiencia",
      "item": "https://lookerstudio.google.com/embed/reporting/e687bb67-03ce-4d1b-b100-585d7d7e8c7e/page/p_rhblmi4xmd",
      "ext": "",
      "duration": 0,
      "frame": true
    },
    {
      "id": uuid(),
      "name": "OEE Ensamble - Calidad",
      "item": "https://lookerstudio.google.com/embed/reporting/e687bb67-03ce-4d1b-b100-585d7d7e8c7e/page/p_cyq5pi4xmd",
      "ext": "",
      "duration": 0,
      "frame": true
    },
  ]

  constructor( ) {
    this.dataInyeccion
  }


  getDataComunicados(): SliderItem[] {
    return this.dataComunicados;
  }

  getDataInyeccion(): SliderItem[] {
    return this.dataInyeccion;
  }

  getDataEnsamble(): SliderItem[] {
    return this.dataEnsamble;
  }

  getDataInyeccionById(item: SliderItem) {
    const element = this.dataInyeccion.find(elem => elem.id === item.id)

    if(element) {
      return {
        'status': 200,
        element
      }
    }

    return {
      'status': 404,
      'message': 'Elemento no encontrado'
    }
  }

  deleteItemInyeccion(index: number) {
    const element = this.dataInyeccion[index];
    if (element) {
      this.dataInyeccion = this.dataInyeccion.filter(elem => elem.id !== element.id)
      
      return {
        'status': 200,
        'message': 'Elemento eliminado correctamente'
      }
    }
    return {
      'status': 500,
      'message': 'Error al intentar eliminar elemento'
    }
  }
}
