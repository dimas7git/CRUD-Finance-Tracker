CREATE TABLE contas (
  id SERIAL PRIMARY KEY,
  cliente VARCHAR(255) NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  status VARCHAR(20) NOT NULL,
  removido BOOLEAN NOT NULL DEFAULT FALSE
);

create table IF NOT EXISTS usuarios (
    usuarioid bigserial constraint pk_usuarios PRIMARY KEY,
    username varchar(10) UNIQUE,
    password text,
    deleted boolean DEFAULT false
);

CREATE EXTENSION if NOT EXISTS pgcrypto;

insert into usuarios values 
    (default, 'admin', crypt('admin', gen_salt('bf'))),
    (default, 'qwe', crypt('qwe', gen_salt('bf')))
ON CONFLICT DO NOTHING;