import { useState, useContext } from 'react'

import FromSearchChain from './FromSearchChain'
import SendSearchChain from './SendSearchChain'
import ToSearchChain from './ToSearchChain'

import arrows from '../assets/svg/changeArrows.svg'
import inputArrow from '../assets/svg/arrow.svg'
import ethereum from '../assets/chains/ethereum.svg'
import moonriver from '../assets/chains/moonriver.svg'
import airdrop from '../assets/svg/drop2.svg'

import { Context } from '../hooks/useContext'

function Bridge() {
  const [select, setSelect] = useState('transfer')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activate, setActivate] = useState(true)
  const { chain } = useContext(Context)

  function handleButton(props:any) {
    setSelect(props)
    setActivate(true)
  }

  const [openBridgeFromSearchChain, setopenBridgeFromSearchChain] = useState(false)
  const [openBridgeSendSearchChain, setopenBridgeSendSearchChain] = useState(false)
  const [openBridgeToSearchChain, setopenBridgeToSearchChain] = useState(false)
  

  function handleBridgeFromSearchChain(): void {    
    setopenBridgeFromSearchChain(true)
  }
  function handleBridgeSendSearchChain(): void {    
    setopenBridgeSendSearchChain(true)
  }
  function handleBridgeToSearchChain(): void {    
    setopenBridgeToSearchChain(true)
  }

  function handleCloseBridgeFromSearchChain(): void {    
    setopenBridgeFromSearchChain(false)
  }
  function handleCloseBridgeSendSearchChain(): void {    
    setopenBridgeSendSearchChain(false)
  }
  function handleCloseBridgeToSearchChain(): void {    
    setopenBridgeToSearchChain(false)
  }

  return (
    <>
    <div className="flex flex-col justify-start items-center">
      <div className="flex h-12 px-2 bg-button-grey text-white rounded-2xl xl:-mt-16 mb-6 items-center font-lalezar bg-button-gray 2xl:mt-20">
        <button className={select === 'transfer' ? 'bg-button-blue rounded-xl py-2 px-8 ease-linear duration-300' : 'text-white rounded-xl py-2 px-8 ease-linear duration-300'} onClick={() => handleButton('transfer')}>
          <p className='mt-[2px]'>Transfer</p>
        </button>
        <button className={select === 'liquidity' ? 'bg-button-blue rounded-xl py-2 px-8 ease-linear duration-300' : 'text-white rounded-xl py-2 px-8 ease-linear duration-300'} onClick={() => handleButton('liquidity')}>
          <p className='mt-[2px]'>Faucet</p>
        </button>
      </div>

      {select === 'transfer' ?

      <div className="text-gray-200 bg-button-gray rounded-xl border-[1px] border-secondary-gray px-5 w-96">
        <div className="flex-wrap	w-[100%] pt-4">
          <div className="flex flex-row p-2 "><p className='pr-3 pt-2 text-xs'>From</p><button onClick={handleBridgeFromSearchChain} className='w-[40%] bg-background rounded-md py-2'><div className='flex justify-between px-2'><img className='' src={chain === 'ethereum' ? ethereum : moonriver} width={25} alt='' /><img src={inputArrow} alt='' width={12} /></div></button></div>
          <div className="flex flex-row p-2"><input  placeholder={'Send: 0'} className='bg-background placeholder-gray-200 w-[100%] rounded-md p-2 py-3 text-xs' type="text" /><button onClick={handleBridgeSendSearchChain} className='absolute mt-2 xl:left-[58%] lg:left-[58%] 2xl:left-[55.7%] bg-background rounded-md'><div className='flex justify-between space-x-2'><img className='' src={ethereum} width={25} alt='' /><img src={inputArrow} alt='' width={12} /></div></button></div>
        </div>
        <div className='flex flex-row justify-between '>
          <div className='p-5'> </div> <button className='self-center rounded-lg my-3 py-3 px-1 border-transparent border-2 hover:border-2 hover:border-button-blue bg-background'><img src={arrows} alt="arrows" width={23} /></button>
          <div className="text-gray-200 text-sm pr-2"><button><p className='underline underline-offset-1'>Max: 0</p></button></div>
        </div>
        <div className="flex flex-row p-2"><p className='pr-7 pt-2 text-xs'>To</p><button onClick={handleBridgeToSearchChain} className='w-[40%] bg-background rounded-md py-2'><div className='flex justify-between px-2'><img className='' src={ethereum} width={25} alt='' /><img src={inputArrow} alt='' width={12} /></div></button></div>
        <div className="flex flex-row p-2"><input placeholder='Receive (estimated): 0' className='bg-background w-[100%] placeholder-gray-200 rounded-md p-2 py-3 px-2 text-xs' type="text" /></div>
        <div className='flex flex-row justify-center pt-4 pb-4'><button className='py-4 px-[110px] rounded-md text-white font-bold bg-button-blue'>Connect Wallet</button></div>
      </div>

      :

      <div className='flex flex-col items-center w-96 bg-button-gray border-[1px] border-secondary-gray rounded-xl'>
        <img className='pt-10' alt='' src={airdrop} width={100} />
        <div className="w-[90%] h-14 bg-secondary-gray rounded-md mt-10 text-gray-200 text-sm"><p className='p-2 pl-4'>You can claim 10 Port per wallet every 24 hours.<br />Port faucet is available only on Rinkeby Testnet.</p></div>
        <button className='w-[90%] py-4 pr-7 pl-7 mt-12 mb-6 bg-button-blue rounded-md text-white text-lg font-lalezar'>Receive 10 Port</button>
      </div>
      }
    </div>

    { openBridgeFromSearchChain && ( <FromSearchChain openFromSearchChain={openBridgeFromSearchChain} handleCloseBridgeFromSearchChain={handleCloseBridgeFromSearchChain} />)}
    { openBridgeSendSearchChain && ( <SendSearchChain openSendSearchChain={openBridgeSendSearchChain} handleCloseBridgeSendSearchChain={handleCloseBridgeSendSearchChain} />)}
    { openBridgeToSearchChain && ( <ToSearchChain openToSearchChain={openBridgeToSearchChain} handleCloseBridgeToSearchChain={handleCloseBridgeToSearchChain} />)}
    </>
  )
}

export default Bridge