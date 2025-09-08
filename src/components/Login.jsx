import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [accepted, setAccepted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // validasyon bir sonraki adımda gelecek
    navigate('/success')
  }

  return (
    <form onSubmit={handleSubmit} data-cy="form">
      <h1>Login</h1>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        data-cy="form-email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Şifre</label>
      <input
        id="password"
        type="password"
        name="password"
        data-cy="form-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <label className="checkbox">
        <input
          type="checkbox"
          data-cy="form-accept"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        Şartları kabul ediyorum
      </label>

      <button type="submit" data-cy="form-submit">Giriş</button>
    </form>
  )
}

