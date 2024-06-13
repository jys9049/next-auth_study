'use client';

import { SessionProvider } from 'next-auth/react';
import React, { PropsWithChildren } from 'react';

const AuthProvider = ({ children }: PropsWithChildren) => {
  return <SessionProvider baseUrl='/oauth'>{children}</SessionProvider>;
};

export default AuthProvider;
