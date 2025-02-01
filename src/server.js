import App from './app';

const port = process.env.APP_PORT;

App.listen(port, () =>{
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http>://localhost:${port}`);
});
