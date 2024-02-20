'use client'
import LeftBar from '@/components/bars/leftbar'
import Image from 'next/image'
import profileImage from '../../assets/profile.jpg'
//import LottieView from '@/components/lottieView'
import NavBar from '@/components/bars/navbar'
import React, { useState } from 'react'
import MobileMockup from '@/components/mobileMockup'
import { useRouter } from 'next/navigation'
import { sendDataToServer } from '@/services'
import SimpleInput from '@/components/input/simpleInput'

const Profile = () => {
  const animationData = require('../../assets/world.json')
  const [name, setName] = useState('Wesley Franco Maciel')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('wesleymaciel2500@gmail.com')
  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(
      'name = ',
      name,
      'email = ',
      email,
      'password = ',
      password,
      'confirmPassword = ',
      confirmPassword,
    )

    if (password !== confirmPassword) {
      alert(
        'Password and Confirm Password must match. Please check your input.',
      )
    }
    if (
      !name.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !email.trim()
    ) {
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
    <div style={{ display: 'flex' }}>
      {/* LEFT  */}
      <div
        style={{
          backgroundColor: '#337ab7',
          minHeight: '100vh',
          boxShadow: '0px 0apx 7px 1px rgba(0,0,0,0.75)',
        }}
      >
        <LeftBar />
      </div>
      {/* RIGHT */}
      <div
        style={{
          flex: 5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavBar />
        <div className="drawer-content flex flex-col items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="shadow p-8 rounded-md"
            style={{
              backgroundColor: '#70a5f5',
              borderWidth: 1,
              borderColor: 'gray',
              flex: 1,
              flexDirection: 'column',
              minHeight: '70vh',
              minWidth: '95%',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                alt="Profile Picture component"
                src={profileImage}
                width={70}
                height={45}
                style={{ padding: 10, borderRadius: 30 }}
              />
              <h1 className="text-xl font-bold text-left text-white">
                USER INFORMATION
              </h1>
            </div>

            <div
              className="mb-4 "
              style={{ borderWidth: 1, borderColor: 'white', width: '27%' }}
            />
            <SimpleInput
              label="Name"
              type={'text'}
              value={name}
              action={setName}
            />
            <SimpleInput
              label="Email"
              type={'email'}
              value={email}
              action={setEmail}
            />
            <SimpleInput
              label="Change Your Password"
              type={'password'}
              value={password}
              action={setPassword}
            />
            <SimpleInput
              label="Confirm Your Password"
              type={'password'}
              value={confirmPassword}
              action={setConfirmPassword}
            />

            <div className="flex justify-left">
              <button
                onClick={() =>
                  console.log(
                    `name = ${name} email = ${email} password= ${password}`,
                  )
                }
                className="inline-flex items-center px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-opacity-50"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
