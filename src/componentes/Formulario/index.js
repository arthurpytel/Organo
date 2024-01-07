import './Formulario.css';
import CampoTexto from '../CampoTexto';
import CampoLista from '../CampoLista';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {

    const [nome,setNome] = useState('');
    const [cargo,setCargo] = useState('');
    const [imagem,setImagem] = useState('');
    const [times,setTime] = useState('');

    const aoSalvar = (evento) => {
    evento.preventDefault();
    props.cadastroColaborador({
        nome: nome,
        cargo: cargo,
        imagem: imagem,
        time: times
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }   

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha as informacoes solicitadas abaixo:</h2>
            <CampoTexto 
                obrigatorio = {true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor = {nome}
                aoAlterado = {valor => setNome(valor)}
            /> 
            <CampoTexto 
                obrigatorio = {true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor = {cargo}
                aoAlterado = {valor => setCargo(valor)}
            /> 
            <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereco da imagem"
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}
            /> 
            <CampoLista 
                obrigatorio = {true} 
                label="Time" 
                itens={props.times}
                valor={times}
                aoAlterado={valor => setTime(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario;