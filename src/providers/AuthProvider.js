import {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const AuthContext = createContext({
  address: null,
  connect: () => null,
  loading: false,
  disconnect: () => null,
  chainId: null,
  setAddress: () => null
});

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        1: "https://mainnet.infura.io/v3/",
      },
      network: "mainnet",
    },
  },
};

const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions, // required
});

export const AuthProvider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chainId, setChainId] = useState(null);

  const subscribeProvider = (provider) => {
    provider.on("disconnect", (error) => {
      console.log(error);
      setChainId(null);
      setAddress(null);
    });
    provider.on("accountsChanged", (accounts) => {
      setAddress(accounts[0]);
    });
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
      setChainId(chainId);
    });
  };

  const connect = async () => {
    if (address) {
      return;
    }
    setLoading(true);

    try {
      // let web3 = new Web3(Web3.givenProvider);

      // if (!web3.currentProvider) {
      //   setSnackbar({
      //     type: "error",
      //     message: '"No provider was found"',
      //   });
      //   return;
      // }
      const provider = await web3Modal.connect();
      let web3 = new Web3(provider);
      subscribeProvider(provider);

      const accounts = await web3.eth.getAccounts();
      const chain = await web3.eth.getChainId();
      console.log(accounts[0], chain)
      setAddress(accounts[0]);
      setChainId(chain);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const disconnect = () => {
    web3Modal.clearCachedProvider();
    setAddress(null);
    setChainId(null);
  };


  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{ address, connect, disconnect, chainId, setAddress }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
