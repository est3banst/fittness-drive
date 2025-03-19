import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import Loading from './componentes/Loading';
import AppRoutes from "./componentes/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); 

  useEffect(() => {

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log(location)
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="w-full">
      {loading ? (
       <div className="flex w-full h-screen justify-center items-center">
      <Loading />

       </div>
      ) : (
        <div className="">

          <AppRoutes/>
        </div>
      )}
    </div>
  );
};


export default App
