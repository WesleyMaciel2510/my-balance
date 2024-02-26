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
                className="input input-bordered flex items-center gap-2"
                htmlFor="email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                className="input input-bordered flex items-center gap-2"
                htmlFor="password"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
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
