export interface Feature {
  icon: string
  title: string
  description: string
}

export interface HowItWorksStep {
  number: string
  title: string
  description: string
}

export type TeamPhoto = 'team-1.jpg' | 'team-2.jpg' | 'team-3.jpg' | 'team-4.jpg'

export interface TeamMember {
  name: string
  role: string
  photo: TeamPhoto
  alt: string
}

export const features: Feature[] = [
  {
    icon: '🗂️',
    title: 'Catálogo a tu medida',
    description: 'Ve solo las empresas de tu dirección y carrera, sin revisar fila por fila.',
  },
  {
    icon: '⭐',
    title: 'Opiniones reales',
    description: 'Lee comentarios y recomendaciones de alumnos que ya hicieron su estadía.',
  },
  {
    icon: '📅',
    title: 'Agenda tu cita',
    description: 'Reserva con estadías el día que atienden a tu dirección, sin filas ni adivinar.',
  },
  {
    icon: '📝',
    title: 'Comparte tu experiencia',
    description: 'Cuenta cómo te fue en tu empresa y ayuda a los que vienen detrás.',
  },
]

export const steps: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Descarga la app',
    description: 'Escanea el código o toca el botón para instalar Conecta UTSH en tu celular.',
  },
  {
    number: '02',
    title: 'Inicia con tu perfil',
    description: 'Entra con tus datos escolares y ve solo las empresas de tu dirección y carrera.',
  },
  {
    number: '03',
    title: 'Explora y agenda',
    description: 'Revisa opiniones, elige tu empresa y agenda tu cita con estadías.',
  },
]

export const team: TeamMember[] = [
  { name: 'José Manuel Tlacuapa', role: 'Desarrollador Frontend', photo: 'team-1.jpg', alt: 'Retrato de José Manuel Tlacuapa' },
  { name: 'Pablo Sebastián Ramos', role: 'Desarrollador Frontend', photo: 'team-2.jpg', alt: 'Retrato de Pablo Sebastián Ramos' },
  { name: 'Adrián de Jesús Vite', role: 'Desarrollador Backend', photo: 'team-3.jpg', alt: 'Retrato de Adrián de Jesús Vite' },
  { name: 'Irving Álvarez', role: 'Desarrollador Backend', photo: 'team-4.jpg', alt: 'Retrato de Irving Álvarez' },
]

export const navigation = [
  { label: 'Funciones', href: '#features' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Equipo', href: '#team' },
  { label: 'Contacto', href: '#contact' },
] as const
