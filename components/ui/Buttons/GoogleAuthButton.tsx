"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const GoogleAuthButton = () => {
    const {data: session} = useSession();
  return (
    <div>
        {!session ? (
          <button onClick={() => signIn('google', { callbackUrl: '/profile' })}>
            continue with google
          </button>
        ) : (
          <button onClick={() => signOut()}>Sign out </button>
        )}
    </div>
  )
}

export default GoogleAuthButton