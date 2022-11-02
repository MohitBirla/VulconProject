import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from 'axios';

export const AuthContext = createContext({
  address: null,
  loading: false,
  chainId: null,
  connectWithEmail: () => null,
  connect: () => null
});



export const AuthProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chainId, setChainId] = useState(null);

  const instance = axios.create({
    baseURL: 'https://api.metakeep.xyz/v3/getWallet',
    timeout: 1000,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'x-api-key': 'A8swpEVPuLYtQR3x1aJK5Df8+WoqRPLwh4xxsq9PQG3O'
    }
  });
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  const disconnect = () => {
    setAddress(null);
    setChainId(null);
  };

  const connect = (address, chainId = 1) => {
    setAddress(address);
    setChainId(chainId);
  }

  const connectWithEmail = async (email) => {
    setLoading(true)
    instance.post('', JSON.stringify({ user: { email: email } }))
      .then(res => {
        console.log(res)
        setAddress(res.data.wallet.ethAddress);
        setChainId(1)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{ address, chainId, setAddress, connectWithEmail, loading, connect }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
