--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admin; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.admin (
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    org_id integer,
    id integer NOT NULL
);


ALTER TABLE public.admin OWNER TO me;

--
-- Name: admin_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.admin_id_seq OWNER TO me;

--
-- Name: admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.admin_id_seq OWNED BY public.admin.id;


--
-- Name: events; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.events (
    event_name text,
    guest_ids integer[],
    org_id integer,
    id integer NOT NULL
);


ALTER TABLE public.events OWNER TO me;

--
-- Name: events_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.events_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.events_id_seq OWNER TO me;

--
-- Name: events_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.events_id_seq OWNED BY public.events.id;


--
-- Name: guests; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.guests (
    name text,
    org_id integer,
    id integer NOT NULL
);


ALTER TABLE public.guests OWNER TO me;

--
-- Name: guests_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.guests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.guests_id_seq OWNER TO me;

--
-- Name: guests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.guests_id_seq OWNED BY public.guests.id;


--
-- Name: organizations; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.organizations (
    org_name text NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.organizations OWNER TO me;

--
-- Name: organizations_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.organizations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.organizations_id_seq OWNER TO me;

--
-- Name: organizations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.organizations_id_seq OWNED BY public.organizations.id;


--
-- Name: rooms; Type: TABLE; Schema: public; Owner: me
--

CREATE TABLE public.rooms (
    room text,
    event_id integer,
    id integer NOT NULL,
    round integer,
    guest_names text[]
);


ALTER TABLE public.rooms OWNER TO me;

--
-- Name: rooms_id_seq; Type: SEQUENCE; Schema: public; Owner: me
--

CREATE SEQUENCE public.rooms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rooms_id_seq OWNER TO me;

--
-- Name: rooms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: me
--

ALTER SEQUENCE public.rooms_id_seq OWNED BY public.rooms.id;


--
-- Name: admin id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.admin ALTER COLUMN id SET DEFAULT nextval('public.admin_id_seq'::regclass);


--
-- Name: events id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.events ALTER COLUMN id SET DEFAULT nextval('public.events_id_seq'::regclass);


--
-- Name: guests id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.guests ALTER COLUMN id SET DEFAULT nextval('public.guests_id_seq'::regclass);


--
-- Name: organizations id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.organizations ALTER COLUMN id SET DEFAULT nextval('public.organizations_id_seq'::regclass);


--
-- Name: rooms id; Type: DEFAULT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.rooms ALTER COLUMN id SET DEFAULT nextval('public.rooms_id_seq'::regclass);


--
-- Data for Name: admin; Type: TABLE DATA; Schema: public; Owner: me
--

INSERT INTO public.admin (name, email, org_id, id) VALUES ('Jerry', 'jerry@example.com', 1, 1);
INSERT INTO public.admin (name, email, org_id, id) VALUES ('George', 'george@example.com', 2, 2);
INSERT INTO public.admin (name, email, org_id, id) VALUES ('mia', 'mia@techtonica.org', 1, 3);
INSERT INTO public.admin (name, email, org_id, id) VALUES ('Mia Dixon', 'highnote143@gmail.com', 3157, 169);
INSERT INTO public.admin (name, email, org_id, id) VALUES ('mia dixon', 'mia.dixon143@gmail.com', 3157, 187);
INSERT INTO public.admin (name, email, org_id, id) VALUES ('mdixon9@students.prairiestate.edu', 'mdixon9@students.prairiestate.edu', 3189, 160);


--
-- Data for Name: events; Type: TABLE DATA; Schema: public; Owner: me
--

INSERT INTO public.events (event_name, guest_ids, org_id, id) VALUES ('H2 2022 Application Workshop Thursday 1', '{1,2,3}', 3157, 2);
INSERT INTO public.events (event_name, guest_ids, org_id, id) VALUES ('H2 2022 Interview Upstart', '{1,2,3,4,5,6,7,8}', 3157, 1);
INSERT INTO public.events (event_name, guest_ids, org_id, id) VALUES ('vfgvdfv', '{32,33,21,34,30}', 3157, 36);
INSERT INTO public.events (event_name, guest_ids, org_id, id) VALUES ('jjjsgcbd', '{32,33,21,34,30}', 3157, 37);
INSERT INTO public.events (event_name, guest_ids, org_id, id) VALUES ('test 2', '{35}', 3157, 38);
INSERT INTO public.events (event_name, guest_ids, org_id, id) VALUES ('test3', '{36,37,38,39}', 3157, 39);


--
-- Data for Name: guests; Type: TABLE DATA; Schema: public; Owner: me
--

INSERT INTO public.guests (name, org_id, id) VALUES ('kim', 1, 1);
INSERT INTO public.guests (name, org_id, id) VALUES ('john', 1, 2);
INSERT INTO public.guests (name, org_id, id) VALUES ('quinta', 1, 3);
INSERT INTO public.guests (name, org_id, id) VALUES ('bell', 2, 4);
INSERT INTO public.guests (name, org_id, id) VALUES ('la-a', 3157, 7);
INSERT INTO public.guests (name, org_id, id) VALUES ('kevin', 3157, 6);
INSERT INTO public.guests (name, org_id, id) VALUES ('dashaun', 3157, 5);
INSERT INTO public.guests (name, org_id, id) VALUES ('monay', 3157, 8);
INSERT INTO public.guests (name, org_id, id) VALUES ('kim davis', 3157, 21);
INSERT INTO public.guests (name, org_id, id) VALUES ('beyonce', 3157, 30);
INSERT INTO public.guests (name, org_id, id) VALUES ('', 3157, 31);
INSERT INTO public.guests (name, org_id, id) VALUES ('mia dixon', 3157, 32);
INSERT INTO public.guests (name, org_id, id) VALUES ('summer walker', 3157, 33);
INSERT INTO public.guests (name, org_id, id) VALUES ('deka iru', 3157, 34);
INSERT INTO public.guests (name, org_id, id) VALUES ('mia, james, wrigley, nancy, keisha', 3157, 35);
INSERT INTO public.guests (name, org_id, id) VALUES ('mel,', 3157, 36);
INSERT INTO public.guests (name, org_id, id) VALUES ('summer,', 3157, 37);
INSERT INTO public.guests (name, org_id, id) VALUES ('witney,', 3157, 38);
INSERT INTO public.guests (name, org_id, id) VALUES ('steve', 3157, 39);


--
-- Data for Name: organizations; Type: TABLE DATA; Schema: public; Owner: me
--

INSERT INTO public.organizations (org_name, id) VALUES ('techy', 3157);
INSERT INTO public.organizations (org_name, id) VALUES ('technology', 25);
INSERT INTO public.organizations (org_name, id) VALUES ('prairiestate', 3189);
INSERT INTO public.organizations (org_name, id) VALUES ('tech', 3160);
INSERT INTO public.organizations (org_name, id) VALUES ('mimi', 3169);


--
-- Data for Name: rooms; Type: TABLE DATA; Schema: public; Owner: me
--

INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES ('room 1', 1, 1, 1, '{''beckyyyy'',''mickeeyyyy''}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES ('room 2', 1, 2, 1, '{''tom'',''summer'',''kim''}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES ('room1', 2, 3, 1, '{''morty'',''summer''}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES ('room 2', 2, 4, 2, '{''kim'',''jo'',''rick''}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES ('room1', 1, 5, 2, '{''tom'',''beckeyyyy''}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 7, 1, '{dashaun,quinta}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 8, 2, '{john,dashaun}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 6, 1, '{kevin,la-a}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 9, 1, '{bell,monay}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 10, 2, '{kim,quinta}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 11, 2, '{bell,la-a}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 12, 2, '{monay,kevin}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 13, 3, '{john,bell}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 14, 3, '{la-a,monay}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 15, 3, '{dashaun,quinta}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 1, 16, 3, '{kevin,kim}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 36, 17, 1, '{"mia dixon",beyonce}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 36, 18, 1, '{"summer walker","kim davis"}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 36, 21, 2, '{"kim davis",beyonce}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 36, 20, 3, '{"summer walker","mia dixon"}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 36, 22, 2, '{"deka iru","summer walker"}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 36, 23, 2, '{"mia dixon"}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 36, 25, 3, '{"kim davis"}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 36, 24, 3, '{"deka iru",beyonce}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 36, 19, 1, '{"deka iru"}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 38, 26, 1, '{"mia, james, wrigley, nancy, keisha"}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 39, 27, 1, '{"summer,",steve}');
INSERT INTO public.rooms (room, event_id, id, round, guest_names) VALUES (NULL, 39, 28, 1, '{"witney,","mel,"}');


--
-- Name: admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.admin_id_seq', 191, true);


--
-- Name: events_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.events_id_seq', 39, true);


--
-- Name: guests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.guests_id_seq', 39, true);


--
-- Name: organizations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.organizations_id_seq', 3218, true);


--
-- Name: rooms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: me
--

SELECT pg_catalog.setval('public.rooms_id_seq', 28, true);


--
-- Name: admin admin_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);


--
-- Name: admin email; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.admin
    ADD CONSTRAINT email UNIQUE (email);


--
-- Name: events events_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.events
    ADD CONSTRAINT events_pkey PRIMARY KEY (id);


--
-- Name: guests guests_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.guests
    ADD CONSTRAINT guests_pkey PRIMARY KEY (id);


--
-- Name: organizations org_name; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.organizations
    ADD CONSTRAINT org_name UNIQUE (org_name);


--
-- Name: organizations organizations_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.organizations
    ADD CONSTRAINT organizations_pkey PRIMARY KEY (id);


--
-- Name: rooms rooms_pkey; Type: CONSTRAINT; Schema: public; Owner: me
--

ALTER TABLE ONLY public.rooms
    ADD CONSTRAINT rooms_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

