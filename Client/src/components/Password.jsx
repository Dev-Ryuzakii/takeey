import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link here
import FormField from './UI/FormField'; // Ensure this is the correct path to your FormField component

const Password = () => {
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    setIsPasswordValid(passwordRegex.test(password));
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="flex items-center w-full h-24 bg-white drop-shadow-lg justify-center">
        <h1 className="text-3xl text-primary-500">Takeey</h1>
      </nav>

      <div className="flex flex-1 justify-center items-center h-screen bg-gray-50 px-4">
        <div className="flex flex-col items-center max-w-md">
          <h1 className="text-2xl font-bold mb-6">Choose a password</h1>

          {/* Password Form */}
          <div className="w-full">
            <FormField
              title="Password"
              value={password}
              placeholder="Enter your password"
              handleChange={(value) => {
                setPassword(value);
                validatePassword(value);
              }}
              type="password"
            />
            <p class="text-sm text-gray-600 mt-2">
  Minimum 8 characters, with at least 1 uppercase, 1 lowercase, and 1 number (0-9) required.
</p>


            {/* Next button */}
            <Link to="/home">
              <button
                type="button"
                className="mt-4 w-full text-white bg-primary-500 py-2 rounded-lg text-lg font-semibold disabled:bg-gray-400"
                disabled={!isPasswordValid}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
