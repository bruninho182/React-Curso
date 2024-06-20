import { useState } from "react"

const ListRender = () => {
    const [List] = useState (["Bruno", "Letíca", "Patrick"]);

    const [users, setUsers] = useState ([
        {id: 1, name: "Bruno" , age: 28 },
        {id: 2, name: "Letícia" , age: 27 },
        {id: 3, name: "Patrick" , age: 22 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter ((user) => randomNumber !== user.id)

        })
    };

  return <div>
        <ul>
            {List.map((item, i) => (
                <li key={i}>{item}</li>
            ) )}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete radom user</button>
    </div>
  
}

export default ListRender