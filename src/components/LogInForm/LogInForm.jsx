import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

export default function LogInForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  const generateClassName = (value) => {
    return `input-group ${value !== '' ? 'active' : ''}`;

  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="column">
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit} className="actForm">
          <div className={generateClassName(credentials.email)}>
            <AiOutlineMail className="icon" />
            <input type="text" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required className="input-field" />
          </div>
          <div className={generateClassName(credentials.password)}>
            <AiOutlineLock className="icon" />
            <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required className="input-field" />
          </div>
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}