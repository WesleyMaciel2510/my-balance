'use client'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import LottieView from '../components/lottieView'
import { useRouter } from 'next/navigation'
import { setLogin } from '../services/index'
import Footer from '@/components/footer/footer'
import MobileMockup from '@/components/mobileMockup'

export default function Home() {
  const animationData = require('../assets/login.json')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    console.log('chamou handleSubmit')
    e.preventDefault()

    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in both username and password.')
      return
    } else {
      console.log('entrou no else')

      const result = await setLogin(email, password)
      console.log('@@@@ result', result)
      if (result) {
        alert('Login Realizado.'), router.push('/home')
      } else {
        alert(
          `Erro no Login!\n Verifique as credenciais inseridas ou redefina sua senha.`,
        )
      }
    }
  }
  return (
    <main>
      <div className="flex container mx-auto px-4 pt-5">
        <Head>
          <title>Login</title>
          <meta name="description" content="Login to your account" />
        </Head>
        <div className="w-1/2 pr-4">
          <LottieView animationData={animationData} loopingActive={true} />
        </div>
        <div className="w-1/3">
          <form
            className="shadow p-8 rounded-md"
            onSubmit={handleSubmit}
            style={{
              backgroundColor: '#70a5f5',
              borderWidth: 1,
              borderColor: 'gray',
            }}
          >
            <h1 className="text-2xl font-bold text-center mb-4 text-white">
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
                className="block text-sm font-medium mb-1 text-white"
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
            <div className="flex justify-between text-white">
              <Link
                href="/sign-up"
                style={{ cursor: 'pointer' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.textDecoration = 'underline')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.textDecoration = 'none')
                }
              >
                Sign Up
              </Link>
              <Link
                href="/forgot-password"
                style={{ textAlign: 'right', cursor: 'pointer' }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.textDecoration = 'underline')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.textDecoration = 'none')
                }
              >
                Forgot My Password
              </Link>
            </div>

            <div className="flex justify-center" style={{ marginTop: 20 }}>
              <button
                type="submit"
                className=" w-1/2 inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-opacity-50"
                style={{ justifyContent: 'center' }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}
