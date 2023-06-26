import React from 'react';

import {
  imagePlaceholder5,
  metamask,
  walletConnect,
  coinbase,
} from '../assets';

function ConnectWallet() {
  return (
    <>
      <div className='sm:flex items-center self-stretch gap-[60px] block'>
        <img src={imagePlaceholder5} alt='' />
        <div className='sm:text-left text-center'>
          <h1 className='text-[51px] text-white font-semibold'>
            Connect wallet
          </h1>
          <p className='text-[22px] w-[460px] '>
            Choose a wallet you want to connect. There are several wallet
            providers.
          </p>

          <div className='w-[320px] mt-[40px]'>
            <div className='h-[72px] flex gap-[20px] items-center pl-[40px] pr-[20px] bg-tertiary rounded-[20px] border-2 border-secondary w-full mb-[20px]'>
              <img src={metamask} alt='' className='w-[40px] h-[40px]' />
              <p className='text-white text-[22px] font-semibold'>Metamask</p>
            </div>
            <div className='h-[72px] flex gap-[20px] items-center pl-[40px] pr-[20px] bg-tertiary rounded-[20px] border-2 border-secondary w-full mb-[20px]'>
              <img src={walletConnect} alt='' className='w-[40px] h-[40px]' />
              <p className='text-white text-[22px] font-semibold'>
                Wallet Connect
              </p>
            </div>
            <div className='h-[72px] flex gap-[20px] items-center pl-[40px] pr-[20px] bg-tertiary rounded-[20px] border-2 border-secondary w-full'>
              <img src={coinbase} alt='' className='w-[40px] h-[40px]' />
              <p className='text-white text-[22px] font-semibold'>Coinbase</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectWallet;
