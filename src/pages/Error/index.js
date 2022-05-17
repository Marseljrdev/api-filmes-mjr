import { Link } from "react-router-dom";
import './erro.css';

    export default function Error(){
        return(
            <div className="not-found" >
                <h1>404 - Not Found!</h1> 
                <br/> <br/>
                
                <span>Voltar para o inicio</span> <br/>
                <Link to="/" >Home</Link>
            </div>
        );
    }