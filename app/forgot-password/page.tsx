'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import LottieView from '../../components/lottieView'
import animationData from '../../assets/forgot.json'

const ForgotPasswordPage = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [jobPosition, setJobPosition] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!name.trim() || !username.trim() || !password.trim()) {
      alert('Please fill out all fields before submitting.')
      return
    } else {
      alert('Form submitted')
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
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium mb-1 text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:ring-opacity-50"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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

export default ForgotPasswordPage
