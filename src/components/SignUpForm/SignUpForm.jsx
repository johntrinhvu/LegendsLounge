import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  generateClassName = (value) => {
    return `input-group ${value !== '' ? 'active' : ''}`;
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    } 
  };

  render() {
    const { name, email, password, confirm } = this.state
    const disable = this.state.password !== this.state.confirm;

    return (
      <>
        <div className="column">
          <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit} className="actForm">
              <div className={this.generateClassName(name)}>
                <AiOutlineUser className="icon"/>
                <input type="text" name="name" placeholder="Username" value={this.state.name} onChange={this.handleChange} required className="input-field" />
              </div>
              <div className={this.generateClassName(email)}>
                <AiOutlineMail className="icon" />
                <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required className="input-field" />
              </div>
              <div className={this.generateClassName(password)}>
                <AiOutlineLock className="icon" />
                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required className="input-field" />
              </div>
              <div className={this.generateClassName(confirm)}>
                <AiOutlineLock className="icon" />
                <input type="password" name="confirm" placeholder="Confirm Password" value={this.state.confirm} onChange={this.handleChange} required className="input-field" />
              </div>
              <button type="submit" disabled={disable}>SIGN UP</button>
            </form>
          </div>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </>
    );
  }
}