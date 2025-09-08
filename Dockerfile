# Use uma imagem oficial do Node
FROM node:20

# Crie o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Exponha a porta usada pelo seu app
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "src/server.js"]