import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from "../../services/api";
import { toast } from 'react-toastify'
import './filme-info.css';

export default function Filme(){

    const { id } = useParams();
    const history = useHistory();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`);

           if(response.data.length === 0){
               history.replace('/');
               return;
           }

            //console.log(response.data);
            setFilme(response.data);
            setLoading(false);
        }

        loadFilmes();



    }, [history, id]);


    function salvaFilme(){

        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        //Se tiver algum filme salvo com o mesmo id, ele deve ignorar...
        const hasFilme = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === filme.id );

        if(hasFilme){
            toast.error('Esse filme ja foi salvo na sua lista');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso');
    }


    if(loading){
        return(
            <div className="filme-info" >
                <h1>Carregando seu filme...</h1>
            </div>
        );
    }

    return(
        <div className="filme-info" >
            <h1> {filme.nome} </h1>
            <img src={filme.foto} />

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div>
                <button onClick={ salvaFilme } >Salvar</button>
                <button>
                    <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer `} >
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    );
}