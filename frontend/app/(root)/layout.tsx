import Donate from '@/components/Donate'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className='pt-12'>
                {children}
            </div>
            <Donate />
            <Footer />
        </>
    )
}

export default layout