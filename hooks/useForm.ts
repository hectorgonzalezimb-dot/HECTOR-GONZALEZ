// Fix: Import ChangeEvent and FormEvent types from 'react' to be used directly.
import { useState, useEffect, useCallback, ChangeEvent, FormEvent } from 'react';

interface UseFormArgs<T> {
  initialValues: T;
  validate: (values: T) => Record<keyof T, string>;
  onSubmit: (values: T) => void;
}

export const useForm = <T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormArgs<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string>>({} as Record<keyof T, string>);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fix: Use the imported ChangeEvent type directly instead of React.ChangeEvent.
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    let processedValue: string | boolean = value;
    if (type === 'checkbox') {
        processedValue = (e.target as HTMLInputElement).checked;
    }

    setValues(prevValues => ({
      ...prevValues,
      [name]: processedValue,
    }));
  };
  
  const setFieldValue = useCallback((name: keyof T, value: any) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  // Fix: Use the imported FormEvent type directly instead of React.FormEvent.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      onSubmit(values);
    }
  };

  // Callback version of setValues for external updates
  const setFormValues = useCallback((newValues: T) => {
    setValues(newValues);
  }, []);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        // Submission logic is handled in handleSubmit
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors, isSubmitting, onSubmit, values]);

  return {
    values,
    setValues: setFormValues,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  };
};