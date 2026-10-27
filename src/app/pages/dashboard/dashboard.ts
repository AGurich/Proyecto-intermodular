
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  incidencias = [
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
  contarPorEstado(estado: string): number {
  return this.incidencias.filter(
    incidencia => incidencia.estado === estado
  ).length;
  }
  logoutEvent = output<void>();
  logout(): void {
    this.logoutEvent.emit();
  }
  
busqueda = '';


estadoSeleccionado = 'Todas';

incidenciasFiltradas() {
  const texto = this.busqueda.trim().toLowerCase();

  const prioridades: Record<string, number> = {
    Alta: 1,
    Media: 2,
    Baja: 3,
  };

  return this.incidencias
    .filter(incidencia => {
      const coincideTexto =
        incidencia.titulo.toLowerCase().includes(texto) ||
        incidencia.ubicacion.toLowerCase().includes(texto);

      const coincideEstado =
        this.estadoSeleccionado === 'Todas' ||
        incidencia.estado === this.estadoSeleccionado;

      return coincideTexto && coincideEstado;
    })
    .sort(
      (a, b) =>
        prioridades[a.prioridad] - prioridades[b.prioridad]
    );
}

cambiarEstado(id: number, nuevoEstado: string): void {
  const incidencia = this.incidencias.find(item => item.id === id);

  if (
    incidencia &&
    ['Pendiente', 'En revisión', 'Resuelta'].includes(nuevoEstado)
  ) {
    incidencia.estado = nuevoEstado;
  }
}


}
