import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const useAuth = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);
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

      const jsonResult = await result.json();
      if (jsonResult.success) {
        setIsSuccess(true);
        setIsLoading(false);
        setProfile(jsonResult.profile);
        localStorage.setItem('profile', JSON.stringify(jsonResult.profile));
        setMessage(null);
      }
      if (jsonResult.message) {
        setMessage(jsonResult.message);
      }
    } catch (err) {
      setIsSuccess(null);
      setIsLoading(null);

      setMessage(err.message);
    }
  };
  return {
    isLoading,
    isSuccess,
    message,
    perform: fetchData,
    setMessage,
  };
};
export default useAuth;
