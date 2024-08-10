export default function Login() {
  return (
    <>
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input type="email" className="form-control" id="email" placeholder="Email address" />
          <label for="email">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="password" placeholder="Password" />
          <label for="password">Password</label>
        </div>

        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      </form>
    </>
  );
}