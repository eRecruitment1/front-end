import React from 'react';
import { AuthContextProvider } from './context/AuthContext'
import AppRouter from './router/AppRouter'
function App() {
  console.log(process.env)
  return (
    <>
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
    </>
  );
}

export default App;
