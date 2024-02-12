'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import LottieView from '../components/lottieView'
import animationData from '../assets/login.json'

export default function Home() {
  const animationData = require('../assets/login.json')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (username.trim() === '' || password.trim() === '') {
      // Handle empty fields (display error message or highlight fields)
      alert('Please fill in both username and password.')
      return
    }

    ;<Link href="/dashboard">Login</Link>
    // Perform actual login logic here (e.g., API call, validation)
    /*  const isValid = login(username, password);

    if (isValid) {
      window.location.href = '/dashboard'; // Redirect to dashboard
    } else {
      // Handle invalid credentials (display error message)
      alert('Invalid username or password.');
    } */
  }
  return (
    <main>
      <div className="container mx-auto px-4 pt-16">
        <Head>
          <title>Login</title>
          <meta name="description" content="Login to your account" />
        </Head>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <LottieView animationData={animationData} loopingActive={true} />
          </div>
          <div className="w-full">
            <form
              className="shadow p-8 rounded-md"
              onSubmit={handleSubmit}
              style={{
                backgroundColor: '#70a5f5',
                borderWidth: 2,
                borderColor: 'white',
              }}
            >
              <h1 className="text-2xl font-bold text-center mb-4">
                Welcome Back!
              </h1>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium mb-1"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:ring-opacity-50"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:ring-opacity-50"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <Link href="/sign-up">Sign Up</Link>
                <Link style={{ textAlign: 'right' }} href="/dashboard">
                  Forgot My Password
                </Link>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-opacity-50"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
