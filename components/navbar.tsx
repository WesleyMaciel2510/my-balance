import React from 'react'
import Image from 'next/image'
import profileImage from '../assets/profile.jpg'
import IconButton from '../components/buttons/drawerButton'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 drawer">
      <div className=" drawer-content flex-1">
        <a className="btn btn-ghost text-xl">Home</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
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
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
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
