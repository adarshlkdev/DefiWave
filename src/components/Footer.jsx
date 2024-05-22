import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <div className='max-w-[1240px] mx-auto px-5 grid grid-cols-2 lg:grid-cols-4 cursor-pointer'>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Products</h3>
                <ul>
                    <li>App</li>
                    <li>Analytics</li>
                    <li>Token List</li>
                    <li>Defi</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Tools</h3>
                <ul>
                    <li>Games Tooling</li>
                    <li>Payment Tooling</li>
                    <li>Digital Assets</li>
                    <li>Safe Bridge</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Developers</h3>
                <ul>
                    <li>Developers Hub</li>
                    <li>Faucet</li>
                    <li>Forum</li>
                    <li>Bug Bounty</li>
                </ul>
            </div>
            <div>
                <h3 className='font-bold text-xl border-b-4 border-[#00d8ff] inline-block mt-4'>Community</h3>
                <ul>
                    <li>Community Home</li>
                    <li>Analytics</li>
                    <li>Staking</li>
                    <li>Defi</li>
                </ul>
            </div>
           
        </div>
    </div>
  )
}

export default Footer
