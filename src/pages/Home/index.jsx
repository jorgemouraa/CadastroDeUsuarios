import { useRef, useState } from 'react';
import api from '/src/services/api.js';
import { useNavigate } from 'react-router-dom';


import {
  Title,
  Container,
  TopBackground,
  Img,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
  FeedBack
} from '/src/pages/Home/style.js';


import Button from '../../Components/Button/index';


  


function Home() {

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  async function registerUser() {
    const data = await api.post("/usuarios", {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    })

    inputName.current.value = '';
    inputAge.current.value = '';
    inputEmail.current.value = '';

    if (data.status === 201) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    console.log(data);
  }

  return (

    <Container>

      <TopBackground>


        <Img src='./src/img/cadunico.jpeg' />
      </TopBackground>
      <Title>
        Cadastro de Usuário
      </Title>
      <Form>
        <ContainerInputs>
          <div>
            <InputLabel>Nome<span>*</span></InputLabel>
            <Input type="text" placeholder="Nome" required ref={inputName} />
          </div>
          <div>
            <InputLabel>Idade<span>*</span></InputLabel>
            <Input type="number" placeholder="Idade" required ref={inputAge} />
          </div>
          <div>
            <InputLabel>Email<span>*</span></InputLabel>
            <Input type="email" placeholder="Email" required ref={inputEmail} />
          </div>
        </ContainerInputs>
        <FeedBack>{success && <p>Usuário cadastrado com sucesso ✅</p>}</FeedBack>
        <Button type="button" onClick={() => registerUser()} theme="primary">Cadastrar Usuário</Button>
        {console.log(Button)}

      <Button type="button" onClick={() => navigate('/users')}>Ver Usuários</Button>
      {console.log(Button)}
      </Form>
    </Container>
  )

}

export default Home;
