const { createContext, useContext, useState } = require("react");

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  //   const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ isAuthenticate, setIsAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
