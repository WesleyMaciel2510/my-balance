'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import LottieView from '../../components/lottieView'
import animationData from '../../assets/register.json'
import { sendDataToServer, getDataFromServer } from '@/services'

const SignUpPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!name.trim() || !password.trim() || !email.trim()) {
      alert('Please fill out all fields before submitting.')
    } else {
      console.log('data before sending to the server = ', name, email, password)
      const result = await sendDataToServer(name, email, password, 3, true)
      result
        ? (alert('Form submitted successfuly!'), router.push('/'))
        : alert('Network Error!')
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ flex: 1 }}>
        <LottieView animationData={animationData} loopingActive={false} />
      </div>
      <form
        className="shadow p-8 rounded-md"
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#70a5f5',
          borderWidth: 2,
          borderColor: 'white',
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <h1 className="text-2xl font-bold text-left mb-4 text-white">
          Register Your User
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, marginRight: '1rem' }}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 color text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:ring-opacity-50"
                placeholder="Enter your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 color text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:ring-opacity-50"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1 text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:ring-opacity-50"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-left">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-opacity-50"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUpPage
