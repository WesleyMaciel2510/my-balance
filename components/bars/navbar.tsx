import React from 'react'
import Image from 'next/image'
import profileImage from '../../assets/profile.jpg'
import Link from 'next/link'
import ThemeColor from '../theme/dropDownThemeColor'

const NavBar = () => {
  return (
    <div
      className="navbar bg-base-100"
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#337ab7',
        borderBottomStyle: 'double',
        borderBottomWidth: '3px',
        borderBottomColor: 'white',
      }}
    >
      <div className="navbar-end">
        <ThemeColor />

        <button className="btn btn-ghost btn-circle ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle ">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item" />
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image
                alt="Tailwind CSS Navbar component"
                src={profileImage}
                width={400}
                height={250}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="my-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-42"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <Link href="/forgot-password">Change Password</Link>
            </li>
            <li>
              <Link href="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
