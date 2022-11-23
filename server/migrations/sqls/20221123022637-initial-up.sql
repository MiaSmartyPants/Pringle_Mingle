/* Replace with your SQL commands */
CREATE TABLE public.admin (
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    org_id integer,
    id SERIAL PRIMARY KEY
);

CREATE TABLE public.events (
    event_name text,
    guest_ids integer[],
    org_id integer,
    id SERIAL PRIMARY KEY
);

CREATE TABLE public.organizations (
    org_name text NOT NULL,
    id integer NOT NULL
);

CREATE TABLE public.rooms (
    room text,
    event_id integer,
    id SERIAL PRIMARY KEY,
    round integer,
    guest_names text[]
);

CREATE TABLE public.guests (
    name text,
    org_id integer,
    id SERIAL PRIMARY KEY
);