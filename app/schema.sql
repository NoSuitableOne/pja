drop table if exists users;
create table users (
    id integer primary key id,
    'username' text not null,
    role_id integer not null,
    'hash_password'
);