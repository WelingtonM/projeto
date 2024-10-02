import React, { useState } from "react"

function App() {
  const [clientes, setClientes] = useState([])
  const [nome, setNome] = useState("")
  const [endereco, setEndereco] = useState("")
  const [telefone, setTelefone] = useState("")
  const [editIndex, setEditIndex] = useState(-1)

  const handleAddOrUpdate = () => {
    if (editIndex === -1) {
      setClientes([...clientes, { nome, endereco, telefone }])
    } else {
      const updatedClientes = clientes.map((cliente, index) =>
        index === editIndex ? { nome, endereco, telefone } : cliente
      )
      setClientes(updatedClientes)
      setEditIndex(-1)
    }
    setNome("")
    setEndereco("")
    setTelefone("")
  }

  const handleEdit = (index) => {
    setEditIndex(index)
    const cliente = clientes[index]
    setNome(cliente.nome)
    setEndereco(cliente.endereco)
    setTelefone(cliente.telefone)
  }

  const handleDelete = (index) => {
    setClientes(clientes.filter((_, i) => i !== index))
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cadastro de Clientes</h1>
      <div>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          Endereço:
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
        </label>
        <br />
        <label>
          Telefone:
          <input
            type="text"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleAddOrUpdate}>
          {editIndex === -1 ? "Incluir" : "Atualizar"}
        </button>
      </div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map((cliente, index) => (
          <li key={index}>
            {cliente.nome} - {cliente.endereco} - {cliente.telefone}
            <button onClick={() => handleEdit(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
