import React from 'react'
import logo from '../../components/images/GitHub-Mark-Light-120px-plus.png'
import SearchForm from '../../components/SearchForm'

export default function Header() {
  return (
    <div>
        <img src={logo} alt='Github logo'/>
        <SearchForm/>
    </div>
  )
}
