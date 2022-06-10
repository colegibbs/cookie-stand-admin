export default function LoginForm(props) {

  async function handleSubmit(event){
    event.preventDefault();
    props.onLogin(event.target.username.value, event.target.password.value)
    event.target.reset();
  }

  return(
    <form onSubmit={handleSubmit} className="bg-green-400">
      <fieldset autoComplete="off">
        <legend>Log In</legend>
        <label htmlFor="username">Username</label>
        <input type="text" name="username"/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>
        <button type="submit">Login</button>
      </fieldset>
    </form>
  )
}