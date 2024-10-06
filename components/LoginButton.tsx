import { signIn, signOut, useSession } from 'next-auth/react';

export const LoginButton = () => {
  const { data: session } = useSession();

  return (
    <div className={`mt-6 px-4 py-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline flex justify-center items-center`}>
      {!session ? (
        <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
          continue with google
        </button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}
    </div>
  );
};