import React, { useContext, useState } from 'react';

// Initialises state or actions for this context group
export const AuthContext = React.createContext();
export const AuthUpdateContext = React.createContext();

// Export hooks for accessing this context
export function useAuth() {
  return useContext(AuthContext);
}

export function useAuthUpdate() {
  return useContext(AuthUpdateContext);
}

// The wrapper which inserts this context into the dom, making it's hooks available to all child elements
export function AuthProvider({children}) {
  // define the variables for each context state / action and set default values
  const [authenticated, setAuthenticated] = useState(false);

  // define functions (methods) and how they will modify state in child elements
  function toggleAuthenticated(payload) {
    console.log("toggleAuthenticated methodin context file", {payload});
    setAuthenticated(prevAuthState => !prevAuthState)
  }

  // wrap providers around the child elements to make the hooks available in child elements
  return (
    <AuthContext.Provider value={authenticated}>
      <AuthUpdateContext.Provider value={toggleAuthenticated}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}
