import {useState} from 'react';

const useForm = <T extends Object>(newState: T) => {
  const [form, setForm] = useState(newState);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return {
    form,
    onChange,
  };
};

export default useForm;
