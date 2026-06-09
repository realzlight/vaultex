import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

export default function ProtectedRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/auth/verify', { withCredentials: true })
      .then((res) => {
        console.log('verify success', res.data);
        setIsAuth(true);
      })
      .catch((err) => {
        console.log('verify failed', err.response?.status, err.response?.data);
        setIsAuth(false);
      });
  }, []);

  if (isAuth === null) return <p>loading...</p>;
  if (!isAuth) return <Navigate to="/login" />;

  return children;
}