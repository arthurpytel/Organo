import './Time.css';
import Colaborador from '../Colaborador'

const Time = (props) => {

    return(
        <section className='time' style={{backgroundColor:props.corClara}}>
            <h3 style={{borderColor:props.corEscura}}>
                {props.titulo};
            </h3>
            <div className='card'>
                {props.colaboradores.map(colaborador => 
                <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    time={props.corEscura}
                />)}
            </div>
        </section>

    );
}

export default Time;