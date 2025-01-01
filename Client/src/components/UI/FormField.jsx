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
      {/* Label */}
      <label className="text-sm sm:text-base md:text-lg text-primary-400 font-bold">
        {title}
      </label>

      {/* Input Container */}
      <div className="w-full sm:w-72 md:w-80 lg:w-96 h-14 px-4 rounded-xl border-2 border-gray-700 focus-within:border-primary-500 flex items-center">
        {/* Input Field */}
        <input
          className="flex-1 bg-transparent text-gray-400 font-regular text-sm sm:text-base md:text-lg outline-none px-4"
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleChange(e.target.value)}
          type={type === "password" && !showPassword ? "password" : "text"}
          {...props}
        />

        {/* Show/Hide Password Button */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="ml-2 text-primary-400 hover:text-white text-sm sm:text-base md:text-lg"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormField;
