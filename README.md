# lifestyle-shopping-full

Estructura monorepo que contra de dos partes primordiales. 

- `lifestyle-api`
- `lifestyle-client`

Partiendo por la parte logica y de servidor. `lifestyle-api` esta construido con una arquitectura API REST la cual expone enpoints en los cuales se podrán realizar peticiones `http`. Cuenta con una estructura
dockerizada usando la herramienta `docker-compose`.

*Dockerización*

`Dockerfile` crea una imagen con `ruby 2.5` especificando el uso de los archivos `Gemfile` y `Gemfile.lock` exponiendo el contenedor en el puerto `3000`

```Dockerfile
FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y nodejs
WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
RUN bundle install
COPY . /myapp

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
```

`docker-compose.yml` este archivo encapsula la imagen previamente creada la cual se determina en un servicio llamado `web` encargado de correr el servicio `API REST` y por el otro lado 
se tiene la base de datos orquestada en un contenedor de `mongodb`.

```yml
version: "3.8"
services:
  db:
    image: 'mongo'
    container_name: 'dev'
    environment:
      - MONGO_INITDB_DATABASE=dev
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=root
    volumes:
      - ./init-mongo.js:/docker-entrypoint-initdb.d/init-mongo.js:ro
      - ./tmp/db:/data/db
    ports:
      - '27017-27019:27017-27019'
  web:
    build: .
    environment:
      - PORT=3000
    volumes:
      - .:/myapp
    ports:
      - "3000:3000"
    depends_on:
      - db
```

*Gems usadas*

|Gem|Qué hace|
|-|-|
|[bcrypt](https://rubygems.org/gems/bcrypt)|bcrypt () es un algoritmo hash sofisticado y seguro diseñado por el proyecto OpenBSD para contraseñas hash.|
|[mongoid](https://rubygems.org/gems/mongoid)|Mongoid es un marco ODM (Object Document Mapper) para MongoDB, escrito en Ruby.|
|[sprockets](https://rubygems.org/gems/sprockets/versions/3.7.2)|Sprockets es un sistema de empaquetado de activos basado en Rack que concatena y sirve JavaScript, CoffeeScript, CSS, LESS, Sass y SCSS.|
|[jwt](https://rubygems.org/gems/jwt)|Una implementación puramente rubí del estándar RFC 7519 OAuth JSON Web Token (JWT).|

`lifestyle-client` es un cliente hecho en `gatsby.js` un framework de `react.js` que permite contruir sitios
web modernos.

La comunicación entre estos dos lados es mediante `http` conectandose mediante la `API` nativa de `Javascript, fetch()`.

