import "./Register.scss"

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Chen Ye</h1>
                <p>React Social Media App Design | Dark/Light Mode & Responsive & HTML CSS</p>
                {/*span : inline element*/}
                <span>Do you have an account?</span>
                <button>Login</button>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Password"/>
                    <input type="text" placeholder="Name"/>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register