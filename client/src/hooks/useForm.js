import { useState } from 'react';
const useFrom = (defaultValue) => {
  const [formData, setFormData] = useState(defaultValue);

  const handleChange = (e) => {
    if (e) {
      e.persist();
      setFormData((data) => ({ ...data, [e.target.name]: e.target.value }));
    } else {
      setFormData({});
    }
  };
  return { formData, handleChange, setFormData };
};
export default useFrom;
