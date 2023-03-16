import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const { setProfile } = useContext(UserContext);

  const fetchData = async (route, data) => {
    const baseOptions = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const URL = `https://settly-api.onrender.com/api/user/${route}`;
    setIsLoading(true);
    try {
      const result = await fetch(URL, baseOptions);
      if (!result.ok) {
        setError(
          `Fetch for ${URL} returned an invalid status (${
            result.status
          }). Received: ${JSON.stringify(result)}`,
        );
        setIsLoading(null);
      }
      const jsonResault = await result.json();
      if (jsonResault.success) {
        setIsSuccess(true);
        setIsLoading(false);
        setProfile(jsonResault.profile);
        localStorage.setItem('profile', JSON.stringify(jsonResault.profile));
        setMessage(null);
      }
      if (jsonResault.message) {
        setMessage(jsonResault.message);
      }
    } catch (err) {
      setIsSuccess(null);
      setIsLoading(null);
      setError(true);
      setMessage(err.message);
    }
  };
  return {
    isLoading,
    isSuccess,
    message,
    perform: fetchData,
    error,
    setMessage,
  };
};
export default useAuth;
