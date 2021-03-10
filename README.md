# Desafio

# Documentação no Notion

1.  https://www.notion.so/Challenge-back-end-developer-58c9c9aaedfe413c82f681db5d60f931
2.  Endpoints enviado no email, export json do Insomnia;

# Desenvolvimento

API RESTful com nodejs.

1. Container docker e docker-compose;
2. CI (pipeline com github actions, envolvendo: Strategy, Actions github, SonarCloud, QEMU, Buildx);
3. Typescript;
4. Eslint;
5. Prettier;
6. Jest;
7. Supertest;
8. Create endpoints;
9. Testes unitários(Jest);
10. Testes de integração(Jest com Supertest);
11. Dockerize;
12. Axios;
13. Solid;
14. Express;
15. Babel;
16. Type orm;
17. Bcryptjs;
18. Jsonwebtoken;
19. Cors;
20. Mysql;

## Configuração para executar dev

Instale o docker-compose na máquina e execute o seguinte comando:

1. docker-compose up -d --build;
   1.1 Se der erro de permissão na pasta mysql (Version: '5.7.33' socket: '/var/run/mysqld/mysqld.sock' port: 3306 MySQL Community Server (GPL)), vai na pasta do projeto e execute:
   1.1.1 docker-compose down;
   1.1.2 sudo chown -R $USER:$USER;
2. docker-compose ps;
3. docker exec -it app bash;
   3.1 yarn typeorm migration:run;
   3.2 yarn dev;
   3.2. yarn test;

## Meta

Matheus Santos – [@matheusmmjs](https://www.linkedin.com/in/matheusmmjs) – matheusmatmac@hotmail.com

[https://github.com/matheusmmjs/github-link](https://github.com/matheusmmjs/)

## Contribuindo

1. Faça o _fork_ do projeto (<https://github.com/matheusmmjs/nodejs_backend/fork>)
2. Crie uma _branch_ para sua modificação
3. Faça o _commit_
4. _Push_
5. Crie um novo _Pull Request_
