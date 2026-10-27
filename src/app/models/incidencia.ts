
export interface Incidencia {
  id: number;
  titulo: string;
  categoria: string;
  ubicacion: string;
  fecha: string;
  prioridad: 'Alta' | 'Media' | 'Baja';
  estado: 'Pendiente' | 'En revisión' | 'Resuelta';
}
