/* Replace with your SQL commands */
INSERT INTO public.admin (name, email, org_id, id) VALUES ('Mia Dixon', 'highnote143@gmail.com', 3157, 169);
INSERT INTO public.admin (name, email, org_id, id) VALUES ('mdixon9@students.prairiestate.edu', 'mdixon9@students.prairiestate.edu', 3189, 160);


INSERT INTO public.events (event_name, guest_ids, org_id, id) VALUES ('vfgvdfv', '{32,33,21,34,30}', 3157, 36);
INSERT INTO public.events (event_name, guest_ids, org_id, id) VALUES ('H2 2022 Interview Upstart', '{1,2,3,4,5,6,7,8}', 3157, 1);



INSERT INTO public.guests (name, org_id, id) VALUES ('la-a', 3157, 7);
INSERT INTO public.guests (name, org_id, id) VALUES ('kevin', 3157, 6);
INSERT INTO public.guests (name, org_id, id) VALUES ('dashaun', 3157, 5);
INSERT INTO public.guests (name, org_id, id) VALUES ('monay', 3157, 8);
INSERT INTO public.guests (name, org_id, id) VALUES ('kim davis', 3157, 21);
INSERT INTO public.guests (name, org_id, id) VALUES ('beyonce', 3157, 30);
INSERT INTO public.guests (name, org_id, id) VALUES ('', 3157, 31);
INSERT INTO public.guests (name, org_id, id) VALUES ('mia dixon', 3157, 32);


INSERT INTO public.organizations (org_name, id) VALUES ('techy', 3157);
INSERT INTO public.organizations (org_name, id) VALUES ('prairiestate', 3189);


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
