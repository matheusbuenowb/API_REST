import App from './app';

const port = 3001;

App.listen(port, () =>{
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http>://localhost:${port}`);
});
