import { useParams } from "react-router-dom"

const UserName=()=>{
    const {UserName}=useParams();
    return(
        <div>
            <h1>{UserName}</h1>
        </div>
    )
}
export default UserName