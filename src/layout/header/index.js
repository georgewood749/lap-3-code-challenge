import React from 'react'
import logo from '../../components/images/logo.png'
import SearchForm from '../../components/SearchForm'
import BackButton from '../../components/BackButton'
import './styles.css'

export default function Header() {
  return (
    <div>
      <img src={logo} alt="github logo" className='gitLogo' />
      <BackButton />
      <SearchForm />
    </div>
  )
}
