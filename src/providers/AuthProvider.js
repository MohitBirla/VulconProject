import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from 'axios';
import { MetaKeep } from 'metakeep'
import { useDisconnect } from '@web3modal/react'

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
  balance: null,
  connectWithEmail: () => null,
  connect: () => null,
  disconnectAcc: () => null,
  setBalance: () => null,
  signMessage: () => null
});



export const AuthProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chainId, setChainId] = useState(null);
  const disconnect = useDisconnect()
  const instance = axios.create({
    baseURL: 'https://metabackend.onrender.com',
    timeout: 5000,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });
  axios.defaults.headers = {
    'Content-Type': 'application/json',
  }
  const disconnectAcc = () => {
    disconnect();
    setAddress(null);
    setChainId(null);
  };

  const connect = (address, chainId = 1) => {
    setAddress(address);
    setChainId(chainId);
  }

  const connectWithEmail = async (email) => {
    setLoading(true)
    instance.post('/login', { email: email })
      .then(res => {
        console.log(res)
        setAddress(res.data.wallet.ethAddress);
        setChainId(1)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getBalance = async () => {
    setLoading(true)
    if (address) {
      instance.post('/getbalance', { address: address })
        .then(res => {
          setBalance(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      return 0
    }

  }

  const signMessage = async (email = 'devcodypanda@gmail.com') => {
    let resp = await sdk.signMessage(
      // message
      "Hello World",
      // signing reason
      "reason",
    );
    if (resp) {
      console.log('signed', resp)
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
      value={{ address, chainId, setAddress, connectWithEmail, loading, connect, disconnectAcc, signMessage, balance, getBalance }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
