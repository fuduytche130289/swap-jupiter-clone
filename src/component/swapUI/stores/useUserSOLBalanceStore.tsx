import { create } from 'zustand'
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js'

interface UserSOLBalanceStore {
  balance: number;
  getUserSOLBalance: (publicKey: PublicKey, connection: Connection) => void
}

const useUserSOLBalanceStore = create<UserSOLBalanceStore>((set, _get) => ({
  balance: 0,
  getUserSOLBalance: async (publicKey, connection) => {
    let balance = 0;
    try {
      balance = await connection.getBalance(
        publicKey,
        'confirmed'
      );
      balance = balance / LAMPORTS_PER_SOL;
      console.log('balance: ', balance);

    } catch (e) {
      console.log(`error getting balance: `, e);
    }
    // set((state: UserSOLBalanceStore) => set({
    //   balance: state.balance
    // }))
    return balance;
  },
}));

export default useUserSOLBalanceStore;