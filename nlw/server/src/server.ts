import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads',express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());


app.listen(3333);


//.use serve para colocar uma funcionalidade a mais no express

// Rota: Endereço completo da requisição
// Recurso: qual entidade estamos acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação no back-end
//PUT: Atualizar uma informação existente no back-end
//DELETE: Remover uma informação do back-end

//POST: http://localhost:3333/users: Cria um usuario
//GET: http://localhost:3333/users: Listar usuarios

// Request Param: Parametros que vem na própria rota que indentificam um recurso
// Query Param: Parametros que vem na propria rota geralmente opcionais para filtros, paginação
// Request Body: Parametros para criação/atualização de informações

