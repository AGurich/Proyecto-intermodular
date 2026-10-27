
import { Injectable } from '@angular/core';
import { Incidencia } from '../models/incidencia';

@Injectable({
  providedIn: 'root',
})
export class IncidenciasService {
  private incidencias: Incidencia[] = [
    {
      id: 1,
      titulo: 'Farola fundida',
      categoria: 'Alumbrado',
      ubicacion: 'Calle Mayor, 12',
      fecha: '25/10/2026',
      prioridad: 'Media',
      estado: 'Pendiente',
    },
    {
      id: 2,
      titulo: 'Bache en la calzada',
      categoria: 'Vía pública',
      ubicacion: 'Avenida del Parque, 8',
      fecha: '25/10/2026',
      prioridad: 'Alta',
      estado: 'En revisión',
    },
    {
      id: 3,
      titulo: 'Contenedor desbordado',
      categoria: 'Limpieza',
      ubicacion: 'Plaza Central',
      fecha: '24/10/2026',
      prioridad: 'Baja',
      estado: 'Resuelta',
    },
  ];

  obtenerTodas(): Incidencia[] {
    return this.incidencias;
  }

  cambiarEstado(
    id: number,
    nuevoEstado: Incidencia['estado'],
  ): void {
    const incidencia = this.incidencias.find(
      item => item.id === id,
    );

    if (incidencia) {
      incidencia.estado = nuevoEstado;
    }
  }
}
