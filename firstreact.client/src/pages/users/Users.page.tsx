import { baseUrl } from "../../constants/url.constants";
import axios from "axios";
import { IUser } from "../../types/global.typing";
import "./users.scss";
import {useState, useEffect} from "react";

const Users: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    const fetchUsersList = async () => {
        try {
            const response = await axios.get<IUser[]>(baseUrl)
            setUsers(response.data);
        } catch (error){
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
        </div>
    )
}

export default Users