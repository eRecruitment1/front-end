import React from 'react';
import { AuthContextProvider } from './context/AuthContext'
import AppRouter from './router/AppRouter'
function App() {
  return (
    <>
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
    </>
  );
}

export default App;
