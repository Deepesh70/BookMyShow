import React from 'react'

const Footer = () => {
    return (
        <>
        <div className='bg-gray-900 text-white py-8 mt-12b px-44'>
           
            <div className='flex flex-row justify-between items-center'>
               <div>
                <span className='text-2xl font-bold'>BookMyShow</span>
               </div>
               <span>
                <button className='bg-red-600 px-4 py-2 rounded'>Contact Us</button>
               </span>
                

            </div>
           
            <div className='text-center mt-4'>Follow us on social media
                <div className='flex flex-row justify-center items-center gap-4 mt-2'>
                    <img src='https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png' alt='facebook' className='w-6 h-6 cursor-pointer'/>
                    <img src='https://img.icons8.com/ios-filled/50/ffffff/twitter--v1.png' alt='twitter' className='w-6 h-6 cursor-pointer'/>
                    <img src='https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png' alt='instagram' className='w-6 h-6 cursor-pointer'/>
                    <img src='https://img.icons8.com/ios-filled/50/ffffff/youtube-play--v1.png' alt='youtube' className='w-6 h-6 cursor-pointer'/>
                </div>
            </div>
             <div className='text-center mt-6'>
                <p className='text-gray-400'>© 1996-2024 BookMyShow. All Rights Reserved.</p>
            </div>
        </div>
        </>
    )
};

export default Footer;