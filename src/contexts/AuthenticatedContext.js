import React, { useContext, useState, createContext } from 'react';

export const AuthenticatedContext = createContext();
export const SignInContext = createContext();

export function AuthenticatedProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn({email, pw}) {
    return new Promise((resolve, reject) => {

      // takes an array of users, or an empty array from localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users') || "[]");
      const matchUser = storedUsers.find(user => user.email === email && user.pw === pw);

      setTimeout(() => {
        if (matchUser) {
          setAuthenticated(true);
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
