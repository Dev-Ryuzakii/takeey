import { useState } from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChange,
  type = "text",
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`space-y-2 ${otherStyles}`}>
      <label className="text-base text-primary-400 font-bold">{title}</label>

      <div className="w-96 h-14 px-4  rounded-xl border-2 border-gray-700 focus-within:border-primary-500 flex items-center">
        <input
          className="flex-1 bg-transparent text-primary-400 font-semibold text-base outline-none"
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          type={type === "password" && !showPassword ? "password" : "text"}
          {...props}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-primary-400 hover:text-white"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
