'use client'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import LottieView from '../components/lottieView'
import animationData from '../assets/login.json'
import { useRouter } from 'next/navigation'
import { setLogin } from '../services/index'

export default function Home() {
  const animationData = require('../assets/login.json')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    console.log('chamou handleSubmit')
    e.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      // Handle empty fields (display error message or highlight fields)
      alert('Please fill in both username and password.')
      return
    } else {
      console.log('entrou no else')

      const result = await setLogin(email, password)
      console.log('@@@@ result', result)
      if (result) {
        alert('Login Realizado.'), router.push('/dashboard')
      } else {
        alert(
          `Erro no Login!\n Verifique as credenciais inseridas ou redefina sua senha.`,
        )
      }
    }
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
                backgroundColor: '#337ab7',
                borderWidth: 2,
                borderColor: 'white',
              }}
            >
              <h1 className="text-2xl font-bold text-center mb-4">
                Welcome Back!
              </h1>
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
                  className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-primary focus:ring-opacity-50"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <Link style={{ textAlign: 'right' }} href="/forgot-password">
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
