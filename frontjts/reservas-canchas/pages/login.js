import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
  const { data: session } = useSession();

  return (
    <div style={{padding: '20px'}}>
      <h1>Iniciar Sesión</h1>
      
      {!session && (
        <>
          <p>No has iniciado sesión.</p>
          <button onClick={() => signIn('google')}>Iniciar Sesión con Google</button>
        </>
      )}

      {session && (
        <>
          <p>Has iniciado sesión como {session.user.name}</p>
          <button onClick={() => signOut()}>Cerrar Sesión</button>
        </>
      )}
    </div>
  );
}
