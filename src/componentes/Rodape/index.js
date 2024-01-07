import './Rodape.css'

const Rodape = () => {

    return(
        <footer className='footer'>
            <ul>
                <li className='social'>
                    <a className='facebook' href="https://facebook.com">
                        <img  src="/imagens/facebook.png" alt='Facebook'/>
                    </a>
                    <img href="facebook.com" src="/imagens/tw.png" alt='Twitter'/>
                    <img src="/imagens/ig.png" alt='Instagram'/>
                </li>
            </ul>
            <section  className='logo'>
                <img src="/imagens/logo.png" alt='Logo'></img>
            </section>

            <section className='logo'>
                <p>Desenvolvido pelo Pytel</p>
            </section>
        
        </footer>
    )

}

export default Rodape;