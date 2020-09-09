Gerenciamento de Alunos e Cursos 
===================================

### Tecnologias Utilizadas no Projeto

Componente         | Tecnologia
---               | ---
Frontend          | [Angular 9]
Backend (REST)    | [SpringBoot]
REST Documentation| [Swagger UI / OpenAPI]
BD em memória     | H2 
Persistencia      | JPA (Utilizando Spring Data)
Cliente Build     | [angular-cli] npm
Serviço Build     | Maven(Java)

### Acessando a aplicação
Componente        | URL                                      | Comando:
---               | ---                                      |
Frontend          |  http://localhost:8081                   | ng serve --port 8081
H2 Database       |  http://localhost:8080/h2                |
Swagger (API Ref) |  http://localhost:8080/swagger-ui.html   | 

Java JDK versão 1.8

### Como rodar a aplicação Spring Boot?

* Esse projeto utiliza o Maven para gestão de suas dependências. O comando a seguir instala as suas dependências e o empacota.
```
mvn clean install package
```
* A arquitetura da API é dividida nas seguintes camadas:

```
@Repository - Camada responsável pelo acesso direto ao banco de dados.

@Service - Nessa camada intermediária é implementada a maioria as regras de negócio da aplicação. A partir dela acessamos a camada de repositórios.  

@Controller - Essa camada possui todos os end-points da API Rest, ela é a camada de acesso primária e a partir dela temos acesso a camada de serviços. 
 
```

* O arquivo application.propperties possui a conexão com o banco de dados, configuração do servidor de e-mail e a configuração de acesso ao broker do RabbitMQ. Essa aplicação utiliza o banco de dados embarcado H2, sendo assim todos os dados são armazenados em memória o que torna os testes em desenvolvimento muito mais ágeis. A configuração de e-mail é necessária para o disparo de mensagens. Deve-se colocar o nome de usuário e senha do seu servidor de e-mail e lembrar de habilitar o acesso a aplicativos menos seguros. O broker RabbitMQ é possui um nome de usuário e senha padrão quando executado em localhost mas pode-se criar usuários personalizados.  

```application.propperties

#datasource
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.url=jdbc:h2:mem:gerenciamento-universitario
spring.datasource.username=sa
spring.datasource.password=

#jpa
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update

#h2
spring.h2.console.enabled=true
spring.h2.console.path=/h2

### Swagger - Documentação e Testes


* O Swagger é uma ferramenta que permite criar documentação para APIs. Essa ferramenta permite que ao mesmo tempo que é criada a API também seja gerado a sua documentação e ainda possibilita para todos os utilizadores o entendimento claro do comportamento oferecido pelo serviço por que possui um fácil acesso, estruturas claras, é interativo e que permite fazer simulações. Após rodar a aplicação ela fica acessível pela seguinte url:

```
http://localhost:8080/swagger-ui.html

```

### Aplicação Angular

* Como rodar a aplicação Angular?

```
Instalação Angula CLI
 
- npm install -g @angular/cli

Instalação node_modules

- npm install

Visualizando no navegador:

- ng serve --port 8081

- Acessar em: http://localhost:8081/ 

```

