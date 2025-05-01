import React from 'react';

function LoginPage({ userData, setUserData, handleLogin }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <form 
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Student PG Login
        </h2>

        {[
          { label: "Name", name: "name", type: "text" },
          { label: "Age", name: "age", type: "number" },
          { label: "Phone", name: "phone", type: "text" },
          { label: "Address", name: "address", type: "text" },
          { label: "Gmail", name: "gmail", type: "email" },
          { label: "Password", name: "password", type: "password" }
        ].map(({ label, name, type }) => (
          <div className="mb-4" key={name}>
            <label className="block text-gray-700 font-medium mb-2">{label}</label>
            <input
              type={type}
              value={userData[name]}
              onChange={(e) =>
                setUserData({ ...userData, [name]: e.target.value })
              }
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
