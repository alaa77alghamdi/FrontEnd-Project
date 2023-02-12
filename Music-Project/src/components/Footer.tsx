import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <p>© 2023 The Musical Community | Saudi Arabia, Riyadh</p>
      <ul className='socialButton'>
          <li>
              <a href="https://www.instagram.com" target="_blank">
                <FaInstagram />
              </a>               
          </li>
          <li>
              <a href="https://twitter.com" target="_blank">
                <FaTwitter />
              </a>               
          </li>
          <li>
              <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube />
              </a>               
          </li>
      </ul>
    </footer> 
  )
}