import "./Home.css";


function Home(props) {
  return (
    <div className="homepage-container">
      <div>
        <img className="homepage-image" src="https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxwb3J0Zm9saW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"/>
      </div>
      <div className="homepage-content">
        <h1>Welcome to my HomePage</h1>
      </div>
    </div>
  )
}

export default Home;

