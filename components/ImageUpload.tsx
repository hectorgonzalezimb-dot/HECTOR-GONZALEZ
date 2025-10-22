import React, { useState, useEffect, useRef } from 'react';

interface ImageUploadProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
  required?: boolean;
  helpText?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  helpText,
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // If value is a valid string (URL or Base64), set it as the preview
    if (value) {
      setPreview(value);
    } else {
      setPreview(null);
    }
  }, [value]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onChange(name, result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className={`mt-1 flex items-center gap-4 p-4 border-2 border-dashed rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`}>
        <div className="w-32 h-32 bg-gray-100 rounded-md flex-shrink-0 flex items-center justify-center overflow-hidden">
          {preview ? (
            <img src={preview} alt="Previsualización" className="w-full h-full object-cover" />
          ) : (
            <span className="text-xs text-gray-500 text-center">Sin imagen</span>
          )}
        </div>
        <div className="flex-grow">
          <input
            type="file"
            name={name}
            id={name}
            accept="image/png, image/jpeg, image/gif, image/webp"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          <button
            type="button"
            onClick={handleButtonClick}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-violet"
          >
            {preview ? 'Cambiar Imagen' : 'Seleccionar Imagen'}
          </button>
          {helpText && <p className="text-xs text-gray-500 mt-2">{helpText}</p>}
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default ImageUpload;
