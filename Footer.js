import React from 'react'

export default function Footer() {
const year = new Date().getFullYear();
console.log(year)

    return (
        <>
            <footer className='container-fluid bg-dark'>
                <div className='container'>
                    <p className='text-white text-center'>&Copy; {year} All Rights Are Reserved By Sajid Hameed </p>
                </div>
            </footer>
        </>
    )
}
