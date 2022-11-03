import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from 'axios';
import { MetaKeep } from 'metakeep'

const sdk = new MetaKeep({
  environment: "Development",
  /* Web3 node url */
  rpcNodeUrl: '',
  /* App id to configure UI */
  appId: "b9eb8e3e-7ea2-4b8d-84be-0fcd0dc4d54e",
});

export const AuthContext = createContext({
  address: null,
  loading: false,
  chainId: null,
  connectWithEmail: () => null,
  connect: () => null,
  disconnect: () => null,
  signMessage: () => null
});



export const AuthProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chainId, setChainId] = useState(null);

  const instance = axios.create({
    baseURL: 'https://api.metakeep.xyz/v3/getWallet',
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

  const signMessage = async (email) => {
    let resp = await sdk.signMessage(
      // message
      "Hello World",
      // signing reason
      "reason",
    );
    if (resp) {
      console.log('signed')
      connectWithEmail(email)
    } else {
      console.log('signed')
    }
  }

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{ address, chainId, setAddress, connectWithEmail, loading, connect, disconnect, signMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
