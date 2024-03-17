import axios from "axios";
import { useEffect, useState } from "react"

export default function UserTableComponent()
{
    const [dataFetched, setDataFetched] = useState(false);
    const [users ,setUsers] = useState([]);
    
    useEffect(()=>{
        if (dataFetched) {
            fetchAllUsers();
        }
    }, [dataFetched]);

    
    const fetchAllUsers = () => {
        axios.get("http://localhost:8080/getusers")
        .then(response => {
            console.log("Response data :" , response.data);
            setUsers(response.data);
        })
        .catch(error => {
            console.error("Error fetching users :" ,error);
        });
    };

    const handleEdit = (userId) => {
        //Fetch the User data to edit
        //Send Delete req to server
        const userToEdit = users.find(user => user.id === userId);
        //edit
        console.log("Edit User with ID :" , userId , "User data:", userToEdit);
    };

    //Delete data functionality
    const handleDelete = (userId) => {
      //Send Delete req to server  
                                    axios.delete(`http://localhost:8080/deleteuser/${userId}`)
                                    .then(response => {
                                        console.log(response.data.message);
                                        setUsers(users.filter(user => user.id !== userId));
                                        fetchAllUsers(); // Refresh the user list after deleting
                                    })
                                    .catch(error => {
                                        console.error("Error deleting user :" , error)
                                    });
    };

    return(
        <div style={{paddingLeft:"250px"}} className =" container-fluid bg-secondary pb-5">
            {!dataFetched && (
                    <div className="pt-5 pb-1">
                        <button  className="btn btn-outline-danger" onClick={fetchAllUsers}>Get all User Details </button>
                    </div>
            )}

            <table  className="p-5 m-5  text-center border-light border w-75">
                <thead className=" text-white bg-success font-monospace">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>DOB</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-warning font-monospace">
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td>{user.DOB}</td>
                                <td>
                                    <div className=" d-flex p-1" >
                                        <div >
                                            <button  style={{ marginRight: "10px" }} className=" btn btn-info btn-sm" onClick={() => handleEdit(user.id)}><span className="bi bi-pen"></span></button>
                                        </div>
                                        <div>
                                            <button style={{ marginRight: "10px" }} className="btn btn-danger btn-sm ml-2" onClick={() => handleEdit(user.id)}><span className="bi bi-trash"></span></button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}