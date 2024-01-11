import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUserAction, clearuseraction, deleteUserAction, filterUserAction, updateUserAction } from './action';
import "./App.css"
function App() {
  const villes = useSelector(data => data.villes);
  const users = useSelector(data => data.users);
  const usersFilter = useSelector(data => data.usersFilter);

  const [id, setId] = useState(null);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [ville, setVille] = useState("");
  const [villefilter, setVilleFilter] = useState("");
  const dispatch = useDispatch();

  const handle = () => {
    if (id) {
      dispatch(updateUserAction({ id, name: nom, email, ville }));
      setId(null);
    } else {
      dispatch(addUserAction({ id: users.length + 1, name:nom, email, ville:ville }));
    }
  };
  const handleclear=()=>{
    dispatch(clearuseraction())
    setEmail("")
    setNom("")
    setId("")
    setVille("")
  }

  const handleDelete = (id) => {
    dispatch(deleteUserAction(id));
  };

  const handleModifier = (user) => {
    dispatch(updateUserAction(user));
      setId(user.id);
      setNom(user.name);
      setEmail(user.email);
      setVille(user.ville);
    
  };
  const handlefilter=(ville)=>{
    dispatch(filterUserAction(users.state.filter((u)=>u.ville===ville)))
    setVilleFilter("")

  }
  // useEffect(
  //   function (){
  //     console.log(ville)
  //   },ville
  // )

  return (
    <div style={{ paddingLeft: 40 }}>
      <h1>CRUD REACT-REDUX Example 12</h1>
      <div>
        <label>Nom:</label>
        <input value={nom} type="text" onChange={(e) => setNom(e.target.value)} />
        <label>Email:</label>
        <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
        <label>Ville:</label>
        <select  onChange={(e) => setVille(e.target.value)}>
          {villes.map((ville, i) => (
            <option key={i} value={ville}>
              {ville.nom}
            </option>
          ))}
        </select>
        {id ? <button onClick={() => handle()}>Modifier</button> : <button onClick={() => handle()}>Enregistrer</button>}

        <br></br>
        <br></br>
        <label>Filtrer par ville:</label>
        <select  onChange={(e) => setVilleFilter(e.target.value)}>
          {villes.map((ville, i) => (
            <option key={i} value={ville.id}>
              {ville.nom}
              
            </option>
          ))}
          
        </select>
        <button onClick={()=>handlefilter(ville)}>filtrer</button>
        <button onClick={()=>handleclear(id)}>clear</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>Id:</td>
            <td>Name:</td>
            <td>Email:</td>
            <td>Ville:</td>
            <td>Action:</td>
          </tr>
        </thead>
        <thead>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.ville}</td>
                <td>
                  <button onClick={() => handleModifier(user)}>Modifier</button>
                  <button onClick={() => handleDelete(user.id)}>Supprimer</button>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default App;