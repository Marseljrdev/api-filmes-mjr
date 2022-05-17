import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './home.css';

export default function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get('r-api/?api=filmes');
            //console.log(response.data);
            setFilmes(response.data);
        }

        loadFilmes();

    }, []);


    return(
        <div className="container" >
            <div className="lista-filmes" >
                {filmes.map((item) => {
                    return(
                        <article key={item.id} >
                            <strong> {item.nome} </strong>
                            <img src={item.foto} alt={item.nome} />
                            <Link to={`/filme/${item.id}`} >Acessar</Link>

                        </article>
                    );
                })}

            </div>
            
        </div>
    );
}