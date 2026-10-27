
import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncidenciasService } from '../../services/incidencias';
import { Incidencia } from '../../models/incidencia';

@Component({
  imports: [FormsModule],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  incidencias: Incidencia[] = [];

  constructor(private incidenciasService: IncidenciasService) {
    this.incidencias = this.incidenciasService.obtenerTodas();
  }
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
  const estadosValidos = [
    'Pendiente',
    'En revisión',
    'Resuelta',
  ] as const;

  if (!estadosValidos.includes(nuevoEstado as typeof estadosValidos[number])) {
    return;
  }

  this.incidenciasService.cambiarEstado(
    id,
    nuevoEstado as typeof estadosValidos[number]
  );
}



}
