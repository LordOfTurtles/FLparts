import { baseUrl } from "../../constants/url.constants";
import axios from "axios";
import { IUser } from "../../types/global.typing";
import "./users.scss";
import { useState, useEffect } from "react";

const Users: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    const fetchUsersList = async () => {
        try {
            const response = await axios.get<IUser[]>(baseUrl)
            setUsers(response.data);
        } catch (error) {
            alert("An Error Happened")
        }
    };

    useEffect(() => {
        fetchUsersList();
    }, []);

    console.log(users);

    return (
        <div className='users'>
            <h1>User List</h1>
            {
                users.length === 0 ? (<h1>No Users</h1>) : (
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => (
                                        <tr key={user.userId}>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )

            }
        </div>
    )
}

export default Users