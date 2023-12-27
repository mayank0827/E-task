import { useContext} from "react";
import './Email.css'
import { InfoContext } from "../../Context/InfoContext";
import { useNavigate } from "react-router-dom";

const Email = () => {
     
  const {email,handleEmail , value,handleButton} = useContext(InfoContext)
  const navigate = useNavigate();

    const handleClick = () => {
        handleButton(navigate);
    };

    return(
        <div className="email">
            <h1>Information</h1>
            <form  onSubmit={value}>
            <input 
            value={email}
            placeholder="E-mail" 
            type= "email" 
            onChange={handleEmail} />
            <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Email;