import "./home.scss"
import {Button} from "@mui/material"
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const redirect = useNavigate();
    return (
        <div className ='home'>
            <h1>Testing functionality</h1>
            <Button variant="outlined" color="primary" onClick={() => redirect("/users")}>
                User List
            </Button>
        </div>
    )
}

export default Home;