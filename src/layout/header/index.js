import React from 'react'
import logo from '../../components/images/logo.png'
import SearchForm from '../../components/SearchForm'

export default function Header() {
  return (
    <div>
        <img src={logo} alt="github logo"/>
        <SearchForm/>
    </div>
  )
}
