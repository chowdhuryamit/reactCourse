import { useState } from 'react'
import './App.css'
import Card from './component/Card'



function App() {
  const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  return (
    <>
    <h1 className='bg-green-400 p-4 rounded-xl mb-3'>Tailwind Test</h1>
     <Card link={links} stat={stats}/>
    </>
  )
}

export default App
