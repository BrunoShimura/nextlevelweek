import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
  return (
    <article className="teacher-item">
          <header> 
            <img src="https://avatars2.githubusercontent.com/u/53915449?s=460&u=ac744d00394ddaa9cdca11aafc4e0e949fa2d730&v=4" alt="Bruno Shimura"/>
            <div>
              <strong>Bruno Anthony Shimura</strong>
              <span>Educação Física</span>
            </div>
          </header>
            <p>
            Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar. 
            <br/><br/>
            Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: "Aprenda a fazer dinheiro com isso!"
            </p>
            <footer>
              <p>
                Preço/hora
                <strong>R$ 100,00</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="Whatssapp"/>
                Entrar em contato
              </button>
            </footer>
        </article>
  );
}

export default TeacherItem;