
import React, { createContext, useState } from 'react';
export const AppContext = createContext({});
export function AppProvider({ children }) {
  const [portal, setPortal] = useState(null);
  const [toastMsg, setToastMsg] = useState('');
  const showToast = (msg) => { setToastMsg(msg); setTimeout(() => setToastMsg(''), 2800); };
  return (
    <AppContext.Provider value={{ portal, setPortal, toastMsg, showToast }}>
      {children}
    </AppContext.Provider>
  );
}
