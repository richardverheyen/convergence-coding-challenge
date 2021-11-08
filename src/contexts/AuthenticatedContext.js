// has a function which accepts username and password, validates in localstorage
// does the mocked network delay
// accepts a callback for doing the return navgation

// sets isAuthenticated to true;
// has a Provider which wraps around protected routes

import React, { useContext, useState, createContext } from 'react';

export const AuthenticatedContext = createContext();
export const SignInContext = createContext();

export function AuthenticatedProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn({email, pw}) {
    return new Promise((resolve, reject) => {
      const storedUsers = JSON.parse(localStorage.getItem('users') || "[]");
      const matchUser = storedUsers.find(user => user.email === email && user.pw === pw);

      setTimeout(() => {
        if (matchUser) {
          setAuthenticated(matchUser.email);
          resolve();
        } else {
          reject();
        }
      }, 2000);
    })
  };

  return (
    <AuthenticatedContext.Provider value={authenticated}>
      <SignInContext.Provider value={signIn}>
        {children}
      </SignInContext.Provider>
    </AuthenticatedContext.Provider>
  )
}

export function useAuthenticated() {
  return useContext(AuthenticatedContext);
}
export function useSignIn() {
  return useContext(SignInContext);
}
