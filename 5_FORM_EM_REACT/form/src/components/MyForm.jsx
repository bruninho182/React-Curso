import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - controlled inputs
    // 3 - genrenciamento de dados
    const [ name, setName ] = useState( user ? user.name : "");
    const [ email, setEmail ] = useState( user ? user.email : "");

    const [ bio, setBio ] = useState( user ? user.bio : "");

    const [ role, setRole ] = useState(user ? user.role : "");

    const handleName = (e) => {
        setName(e.target.value);
    };

   // console.log(name);
   // console.log(email);
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviado o formulário");
        console.log(name, email, bio, role)

        // validação
        // envio

        // 7 - limpar formulário 
        setName("");
        setEmail("");
        setBio("");
    } 

  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome" 
                onChange={handleName}
                value={name}
                />
            </div>
            {/* Label envolvendo input*/}
            <label>
                <span>E-mail</span>
                {/* 4 - simplificação de manipulação de state */}
                <input 
                type="email" 
                name="email" 
                placeholder="Digite seu email aqui" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                />
            </label>
            {/* 8 - textarea */}
            <label>
                <span>Bio:</span>
                <textarea 
                name="bio" 
                placeholder="Descrição do usúario " 
                onChange={(e) => setBio(e.target.value)} 
                value={bio}>
                </textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Função no sistema</span>
                <select 
                name="role" 
                onChange={(e) => setRole(e.target.value)}
                value={role}
                >
                    <option value="user">Usúario</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador </option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm