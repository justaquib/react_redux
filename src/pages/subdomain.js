import React from 'react'
import dynamic from 'next/dynamic';

const SubdomainComp = dynamic(()=> import('../components/subdomainComp'), {
    ssr:false,
})




export default function Subdomain() {
    
  return (
    <>
        <SubdomainComp />
    </>
  )
}
