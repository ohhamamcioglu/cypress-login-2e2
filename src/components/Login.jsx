import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const strongPwRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [touched, setTouched] = useState({ email: false, password: false })

  const emailError = useMemo(() => {
    if (!touched.email) return ''
    if (!email) return 'Email zorunludur'
    if (!emailRegex.test(email)) return 'Lütfen geçerli bir email giriniz'
    return ''
  }, [email, touched.email])

  const passwordError = useMemo(() => {
    if (!touched.password) return ''
    if (!password) return 'Şifre zorunludur'
    if (!strongPwRegex.test(password))
      return 'Şifre en az 8 karakter, 1 büyük harf ve 1 sayı içermelidir'
    return ''
  }, [password, touched.password])

  const isFormValid =
    emailRegex.test(email) && strongPwRegex.test(password) && accepted

  const handleSubmit = (e) => {
    e.preventDefault()
    setTouched({ email: true, password: true })
    if (!isFormValid) return
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
        onBlur={() => setTouched((t) => ({ ...t, email: true }))}
      />
      {emailError && <p className="error" data-cy="error-email">{emailError}</p>}

      <label htmlFor="password">Şifre</label>
      <input
        id="password"
        type="password"
        name="password"
        data-cy="form-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, password: true }))}
      />
      {passwordError && (
        <p className="error" data-cy="error-password">{passwordError}</p>
      )}

      <label className="checkbox">
        <input
          type="checkbox"
          data-cy="form-accept"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        Şartları kabul ediyorum
      </label>

      <button type="submit" data-cy="form-submit" disabled={!isFormValid}>
        Giriş
      </button>
    </form>
  )
}


