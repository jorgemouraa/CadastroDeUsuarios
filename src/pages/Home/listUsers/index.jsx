import { useEffect, useState } from "react";
import api from "../../../Services/api.js";
import { Container, Title, Img, CardUsers, ContainerUsers, TrashIcon, AvatarUser } from "./styles.js";
import Button from "../../../Components/Button"
import FotoUsuarios from "../../../img/users.png";
import { TopBackground } from "../../Home/style.js";
import Trash from "../../../assets/trash.svg";
import { useNavigate }  from "react-router-dom";




function ListUsers() {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get('/usuarios');

      setUsers(data);
    }

    getUsers();
  }, []);

  async function trashDeleteUser(id) {
    await api.delete(`/usuarios/${id}`);

    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers);
  };

  return (

    <Container>
      <TopBackground />
      <Img src={FotoUsuarios} alt="Users" />
      <Title>Lista de Usuários</Title>
      <ContainerUsers>
        {users.map(user => (
          <CardUsers key={user.id}>
            <AvatarUser src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}/>
            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.age} anos</p>
            </div>
            <TrashIcon src={Trash} alt="Trash" onClick={() => trashDeleteUser(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
      {console.log(Button)}
    </Container>
  );
}

export default ListUsers;
