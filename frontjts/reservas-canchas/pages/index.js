import Link from 'next/link';

export default function Home() {
  return (
    <div style={{padding: '20px'}}>
      <h1>Reserva de Canchas de Fútbol</h1>
      <p>Bienvenido a nuestra plataforma para la reserva de canchas de fútbol. Aquí podrás visualizar la disponibilidad de canchas, registrarte e iniciar sesión.</p>
      
      <nav>
        <ul>
          <li><Link href="/canchas">Ver Canchas Disponibles</Link></li>
          <li><Link href="/login">Iniciar Sesión</Link></li>
        </ul>
      </nav>
    </div>
  );
}
