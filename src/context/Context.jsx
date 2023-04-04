const { createContext, useContext, useState } = require('react');

const ContextAlert = createContext();

export const useCustomContext = () => {
  return useContext(ContextAlert);
};

const Context = ({ children }) => {
  const [movies, setMovies] = useState(null);

  return (
    <ContextAlert.Provider value={{ movies: movies, setMovies: setMovies }}>
      {children}
    </ContextAlert.Provider>
  );
};

export default Context;
