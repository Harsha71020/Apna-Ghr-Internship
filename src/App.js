import { useState } from 'react';
import LoginPage from './components/LoginPage';
import PropertyListingPage from './components/PropertyListingPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    phone: '',
    address: '',
    gmail: '',
    password: ''
  });

  const handleLogin = (e) => {
    if (e) e.preventDefault();
    
    const { name, age, phone, address, gmail, password } = userData;

    if (name && age && phone && address && gmail && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {!isLoggedIn ? (
        <LoginPage 
          userData={userData}
          setUserData={setUserData}
          handleLogin={handleLogin}
        />
      ) : (
        <PropertyListingPage />
      )}
    </div>
  );
}

export default App;
