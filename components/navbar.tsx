import React from 'react'
import Image from 'next/image'
import profileImage from '../assets/profile.jpg'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div
      className="navbar bg-base-100"
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#337ab7',
      }}
    >
      <div>
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
              <a>Settings</a>
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
