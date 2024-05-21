import React, { useState } from 'react'
import '../../styles/login.css'

const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue)
  const onChange = e => { // setValue를 통해 값이 변할 때마다 onChange를 통해 최신 값 가져옴
    setValue(e.target.value)
  }
  return { // 함수 실행
    value,
    onChange,
  }
}

const LoginForm = () => {
  const name = useInput('')
  const id = useInput('')
  const pw = useInput('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <div className='input-box'>
            <label htmlFor='username'>이름</label>
            <input type='text' name='username' {...name}></input>
          </div>
        </li>
        <li>
          <div className='input-box'>
            <label htmlFor='userid'>아이디</label>
            <input type='text' name='userid' {...id}></input>
          </div>
        </li>
        <li>
          <div className='input-box'>
            <label htmlFor='password'>비밀번호</label>
            <input type='password' name='password' {...pw}></input>
          </div>
        </li>
        <li>
          <div className='input-box'>
            <label htmlFor='password'>비밀번호 확인</label>
            <input type='password' name='password' {...pw}></input>
          </div>
        </li>
        <li>
          <div className='input-box'>
            <input className='submit' type='submit' value="가입"></input>
          </div>
        </li>
      </ul>
    </form >

  )
}

export default LoginForm