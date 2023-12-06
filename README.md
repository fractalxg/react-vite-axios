![image](https://github.com/fractalxg/react-vite-axios/assets/147837025/c631903c-d8fb-42fc-8630-e64bfe8458a4)

Aplicação de consulta de temperatura da região que o usuário se encontra ou a partir do país/cidade/estado.
Os dados da API são armazenados em um EC2 da AWS para futuras consultas.

DEPLOY DO PROJETO
https://clima-tempo-one.vercel.app/

COMO RODAR O PROJETO

Abra o terminal e entre no diretório/pasta onde os arquivos serão salvos
### cd diretório/pasta

Baixe os arquivos do git no diretorio/pasta
### git clone https://github.com/fractalxg/react-vite-axios.git

Acesse a pasta que foi baixada
### cd react-vite-axios

Acesse a pasta pelo vscode
### code .

Instalar todas as dependências indicadas pelo package.json
### npm install

Criar um arquivo .env dentro da pasta do projeto e inserir as credenciais no arquivo com a api key da https://openweathermap.org/api e o endereço do servidor ou o localhost se estiver executando o servidor localmente

Exemplo de .env vazio:

VITE_REACT_APP_API_KEY=
VITE_REACT_APP_SERVER_URL=

Inicializar o Projeto
### npm run dev


