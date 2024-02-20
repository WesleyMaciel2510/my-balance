import React from 'react'
import AppStore from '../../assets/app_store_footer.png'
import GooglePlay from '../../assets/google_play_footer.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer
      className="footer p-5 bg-neutral text-neutral-content flex justify-evenly"
      style={{
        borderTopWidth: 3,
        borderColor: '#fff',
        minHeight: '31vh',
        bottom: 0,
      }}
    >
      <nav>
        <h5 className="footer-title text-white">Services</h5>
        <a className="link link-hover">Analytics</a>
        <a className="link link-hover">Investment</a>
        <a className="link link-hover">Accounts</a>
      </nav>
      <nav>
        <h5 className="footer-title text-white">Company</h5>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <h5 className="footer-title text-white">Legal</h5>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <nav>
        <h5 className="footer-title text-white">Download the app</h5>
        <a
          href="https://apps.apple.com/br/app/apple-wallet/id1160481993"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={AppStore} alt="App Store" width={120} height={30} />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.google.android.apps.walletnfcrel&hl=pt_BR&gl=US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={GooglePlay} alt="App Store" width={120} height={30} />
        </a>
      </nav>
    </footer>
  )
}

export default Footer
