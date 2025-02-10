import React from 'react'

export const Header = () => {
    return (
        <div className='h-[35vh] relative flex items-center justify-center text-black'>
            <div className='absolute inset-0 bg-[url("assets/headerImage.jpg")] bg-no-repeat bg-cover bg-center opacity-40'></div>
            <div className="relative z-10 text-center">
                <h1 className="font-bold text-[40px] mb-4">Optimized Your Meal</h1>
                <p className="text-[14px] mt-4">Select Meal to Add in Week. You will be able to edit, modify and change the Meal Weeks.</p>
            </div>
        </div>
    )
}
