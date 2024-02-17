import { useEffect, useState } from 'react';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);
 

 
  };

  const logout = () => {
    // Clear the user state to log out the user
    setUser(null);
  };

  return { user, isLoading, error, login, logout };
};

export default useAuth;
