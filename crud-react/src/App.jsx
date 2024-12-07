
import './App.css'

function App() {

  return (
    <div className='container pb-4'>
      <h1>Hello!</h1>
      
      <div className="mb-3">
        <label for="email" className="form-label">Name</label>
        <input type="email" className="form-control" id="email" placeholder="Jonh Thask" />
      </div>
      <div className="mb-3">
        <label for="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="descricao" className="form-label">Example textarea</label>
        <textarea className="form-control" id="descricao" rows="3"> </textarea>
      </div>

      <div className="d-flex gap-2">
        <button className='btn btn-outline-success'>Entrar</button>
        <button className='btn btn-outline-danger'>Sair</button>
      </div>
    </div>
  )
}

export default App
