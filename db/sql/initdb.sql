DO $$
BEGIN
    IF NOT EXISTS (
        SELECT FROM pg_database WHERE datname = 'clientes_db'
    ) THEN
        CREATE DATABASE clientes_db;
    END IF;
END
$$;

\c clientes_db;

CREATE TABLE IF NOT EXISTS clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    coordenada_x VARCHAR(50), 
    coordenada_y VARCHAR(50)
);
INSERT INTO clientes (nome, email, telefone) VALUES ('Debbie Greenholt', 'Carol.Feeney11@hotmail.com', '(07) 2224-3362');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jackie Romaguera', 'Garnett72@yahoo.com', '(99) 4234-4697');
INSERT INTO clientes (nome, email, telefone) VALUES ('Bryan Lubowitz', 'Evert74@yahoo.com', '(86) 9319-7711');
INSERT INTO clientes (nome, email, telefone) VALUES ('Johnnie Jaskolski', 'Cristopher.Kozey@gmail.com', '(17) 2807-6881');
INSERT INTO clientes (nome, email, telefone) VALUES ('Shawna OKeefe', 'Osborne_Becker@hotmail.com', '(42) 0857-5885');
INSERT INTO clientes (nome, email, telefone) VALUES ('Henrietta Lynch', 'Zetta.Abshire5@hotmail.com', '(17) 1738-6820');
INSERT INTO clientes (nome, email, telefone) VALUES ('Claudia Frami MD', 'Greta_Cremin@gmail.com', '(93) 3732-2968');
INSERT INTO clientes (nome, email, telefone) VALUES ('Austin Swift', 'Daren_Bogisich@gmail.com', '(12) 9583-6117');
INSERT INTO clientes (nome, email, telefone) VALUES ('Robert Bartell', 'Ezequiel_Schulist67@yahoo.com', '(37) 8857-0961');
INSERT INTO clientes (nome, email, telefone) VALUES ('Kyle Carter', 'Amos76@gmail.com', '(73) 2185-9947');
INSERT INTO clientes (nome, email, telefone) VALUES ('Gerard Metz', 'Marlon89@hotmail.com', '(91) 5605-7136');
INSERT INTO clientes (nome, email, telefone) VALUES ('Casey Hintz', 'Queen.Kassulke@yahoo.com', '(28) 9651-9810');
INSERT INTO clientes (nome, email, telefone) VALUES ('Shannon Shanahan', 'Raina.Deckow@yahoo.com', '(14) 4385-9508');
INSERT INTO clientes (nome, email, telefone) VALUES ('Clifford Ward', 'Macey_Quitzon@hotmail.com', '(59) 5273-6719');
INSERT INTO clientes (nome, email, telefone) VALUES ('Faye Crooks', 'Antonia99@yahoo.com', '(84) 6179-6745');
INSERT INTO clientes (nome, email, telefone) VALUES ('Angelina Hettinger', 'Heather_Treutel16@yahoo.com', '(39) 9832-7750');
INSERT INTO clientes (nome, email, telefone) VALUES ('Carla Mayert', 'Florence47@hotmail.com', '(74) 2371-0858');
INSERT INTO clientes (nome, email, telefone) VALUES ('Michael Goodwin MD', 'Akeem_Larkin@gmail.com', '(79) 7232-1620');
INSERT INTO clientes (nome, email, telefone) VALUES ('Dr. Wallace Legros', 'Shanelle.Terry@yahoo.com', '(75) 3018-1579');
INSERT INTO clientes (nome, email, telefone) VALUES ('Pauline Bahringer', 'Agustina_Vandervort@gmail.com', '(40) 5152-9501');
INSERT INTO clientes (nome, email, telefone) VALUES ('Miss Doris Dietrich', 'Sabryna59@gmail.com', '(26) 3790-1068');
INSERT INTO clientes (nome, email, telefone) VALUES ('Shaun Emmerich', 'Gudrun_Miller@yahoo.com', '(43) 0789-5582');
INSERT INTO clientes (nome, email, telefone) VALUES ('Shannon Shanahan', 'Mossie_Bosco@gmail.com', '(46) 8807-2183');
INSERT INTO clientes (nome, email, telefone) VALUES ('Dr. Douglas Moen', 'Alysson81@hotmail.com', '(48) 8177-0163');
INSERT INTO clientes (nome, email, telefone) VALUES ('Maurice Maggio V', 'Natalie_Gutmann21@gmail.com', '(58) 5243-7027');
INSERT INTO clientes (nome, email, telefone) VALUES ('Kristine Kuvalis', 'Lelia_Cormier10@hotmail.com', '(67) 5139-5978');
INSERT INTO clientes (nome, email, telefone) VALUES ('Max Herzog IV', 'Carley.Gorczany86@gmail.com', '(64) 6763-8424');
INSERT INTO clientes (nome, email, telefone) VALUES ('Dianne Conn', 'Kory_King34@hotmail.com', '(24) 0601-1550');
INSERT INTO clientes (nome, email, telefone) VALUES ('Homer Skiles', 'Dangelo.Padberg10@hotmail.com', '(66) 5416-1542');
INSERT INTO clientes (nome, email, telefone) VALUES ('Clayton Hilpert', 'Ewell22@hotmail.com', '(28) 0814-0810');
INSERT INTO clientes (nome, email, telefone) VALUES ('Kellie Langworth', 'Eusebio.Keeling71@gmail.com', '(03) 4041-2930');
INSERT INTO clientes (nome, email, telefone) VALUES ('Alvin Bernier', 'Duane_Turcotte@gmail.com', '(07) 3514-8198');
INSERT INTO clientes (nome, email, telefone) VALUES ('Winston Kohler I', 'Connie.Bogisich60@hotmail.com', '(55) 1876-6168');
INSERT INTO clientes (nome, email, telefone) VALUES ('Cora Weimann', 'Sonya.Conn@gmail.com', '(31) 0970-7648');
INSERT INTO clientes (nome, email, telefone) VALUES ('Miss Alan White', 'Bell.Schaden@hotmail.com', '(47) 0467-7313');
INSERT INTO clientes (nome, email, telefone) VALUES ('Ernestine Torp', 'Noe88@yahoo.com', '(11) 9158-2643');
INSERT INTO clientes (nome, email, telefone) VALUES ('Mr. Jasmine Mertz', 'Hillard.Wiegand@yahoo.com', '(08) 7159-3113');
INSERT INTO clientes (nome, email, telefone) VALUES ('Nicolas Pfeffer', 'Zander64@hotmail.com', '(83) 8923-5098');
INSERT INTO clientes (nome, email, telefone) VALUES ('Michael Gutmann', 'Fletcher67@hotmail.com', '(24) 2826-4628');
INSERT INTO clientes (nome, email, telefone) VALUES ('Carroll Borer', 'Elvie.Considine@yahoo.com', '(92) 1004-6934');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jane Zulauf', 'Stanton_Morar33@gmail.com', '(94) 0577-2109');
INSERT INTO clientes (nome, email, telefone) VALUES ('Miss Nathaniel Von', 'Golda73@hotmail.com', '(78) 1336-6490');
INSERT INTO clientes (nome, email, telefone) VALUES ('Kyle Daugherty', 'Wilber_Hilll@yahoo.com', '(34) 3236-4348');
INSERT INTO clientes (nome, email, telefone) VALUES ('Nancy Prohaska', 'Jameson44@gmail.com', '(54) 3187-8113');
INSERT INTO clientes (nome, email, telefone) VALUES ('Kathryn Littel IV', 'Wilhelmine_Thompson@hotmail.com', '(14) 8783-5288');
INSERT INTO clientes (nome, email, telefone) VALUES ('Angel Yundt', 'Celestino_Lebsack@hotmail.com', '(82) 7234-2563');
INSERT INTO clientes (nome, email, telefone) VALUES ('Johnathan Feest', 'Breanne_Stoltenberg56@hotmail.com', '(85) 5765-2524');
INSERT INTO clientes (nome, email, telefone) VALUES ('Ebony Hansen', 'Jaden_Brekke29@yahoo.com', '(50) 4068-0822');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jasmine Schmitt', 'Loraine.Hane@yahoo.com', '(88) 9065-2735');
INSERT INTO clientes (nome, email, telefone) VALUES ('Zachary Buckridge', 'Anabelle29@gmail.com', '(42) 9210-8313');
INSERT INTO clientes (nome, email, telefone) VALUES ('Olivia Blick', 'Lew.OKon55@gmail.com', '(79) 9356-9632');
INSERT INTO clientes (nome, email, telefone) VALUES ('Claude Kozey', 'Adolf13@yahoo.com', '(21) 7709-0103');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jay Parker', 'Guido87@yahoo.com', '(65) 2410-5801');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jennie Stehr', 'Benjamin_Harvey@yahoo.com', '(75) 1193-5290');
INSERT INTO clientes (nome, email, telefone) VALUES ('Loren Bernier', 'Triston_Tremblay85@gmail.com', '(35) 2462-4239');
INSERT INTO clientes (nome, email, telefone) VALUES ('Clyde Auer', 'Esteban.Hilll93@hotmail.com', '(78) 2212-7294');
INSERT INTO clientes (nome, email, telefone) VALUES ('Isabel Sauer', 'Aracely.Powlowski@hotmail.com', '(75) 3290-1646');
INSERT INTO clientes (nome, email, telefone) VALUES ('Sherri Nicolas', 'Vincenza.Hammes91@yahoo.com', '(42) 4039-5454');
INSERT INTO clientes (nome, email, telefone) VALUES ('Ramona Cronin', 'Nickolas.Heaney18@hotmail.com', '(37) 3197-2208');
INSERT INTO clientes (nome, email, telefone) VALUES ('Raquel Torp', 'Stephon.Ebert@gmail.com', '(03) 2417-0388');
INSERT INTO clientes (nome, email, telefone) VALUES ('Nicole Hickle MD', 'Okey6@yahoo.com', '(00) 2443-5499');
INSERT INTO clientes (nome, email, telefone) VALUES ('Veronica Roberts', 'Lura_Paucek79@yahoo.com', '(62) 3449-3814');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jill Crooks', 'Nat.Swift@yahoo.com', '(72) 0117-3453');
INSERT INTO clientes (nome, email, telefone) VALUES ('Clarence Rogahn', 'Aliya_Roberts@yahoo.com', '(61) 3477-9797');
INSERT INTO clientes (nome, email, telefone) VALUES ('Gerardo Berge', 'Valentin.Funk@gmail.com', '(49) 9836-1222');
INSERT INTO clientes (nome, email, telefone) VALUES ('Miss Rudolph Reichert', 'Shanna.Hartmann@gmail.com', '(97) 5278-4157');
INSERT INTO clientes (nome, email, telefone) VALUES ('Dianne Cartwright', 'Makenzie_Paucek51@gmail.com', '(82) 0049-6798');
INSERT INTO clientes (nome, email, telefone) VALUES ('Steven Morar', 'Rozella.Casper24@gmail.com', '(57) 0737-8342');
INSERT INTO clientes (nome, email, telefone) VALUES ('Albert Altenwerth', 'Virginie_Denesik56@hotmail.com', '(06) 6880-7290');
INSERT INTO clientes (nome, email, telefone) VALUES ('Alberta Monahan', 'Gabriella_Hamill@gmail.com', '(42) 9336-6040');
INSERT INTO clientes (nome, email, telefone) VALUES ('Sheila Crist', 'Jean_Lakin@yahoo.com', '(39) 7121-5067');
INSERT INTO clientes (nome, email, telefone) VALUES ('Sophia Doyle', 'Mason62@gmail.com', '(20) 9980-0650');
INSERT INTO clientes (nome, email, telefone) VALUES ('Valerie Toy', 'Craig7@gmail.com', '(50) 7657-2789');
INSERT INTO clientes (nome, email, telefone) VALUES ('Diane Wilderman', 'Kelton_Stanton@gmail.com', '(88) 6259-2603');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jessie Kris', 'Alfred_OKon@yahoo.com', '(74) 5328-6830');
INSERT INTO clientes (nome, email, telefone) VALUES ('Mr. Jay Torphy', 'Emmanuelle.Bernier@gmail.com', '(63) 3847-6052');
INSERT INTO clientes (nome, email, telefone) VALUES ('Sara Marquardt', 'Raven.Collins@hotmail.com', '(69) 3854-1897');
INSERT INTO clientes (nome, email, telefone) VALUES ('Naomi Abernathy', 'Clemmie.Fahey@yahoo.com', '(67) 1493-8611');
INSERT INTO clientes (nome, email, telefone) VALUES ('Madeline Quitzon DVM', 'Reinhold_Volkman@gmail.com', '(76) 9163-1566');
INSERT INTO clientes (nome, email, telefone) VALUES ('Glen Stark', 'Hortense.Friesen@yahoo.com', '(23) 4830-9275');
INSERT INTO clientes (nome, email, telefone) VALUES ('Beth Barrows', 'Arturo64@gmail.com', '(27) 5785-0624');
INSERT INTO clientes (nome, email, telefone) VALUES ('Clinton Mann', 'Annamarie.Swift28@yahoo.com', '(68) 4455-2006');
INSERT INTO clientes (nome, email, telefone) VALUES ('Christian Ferry', 'Wilbert.Okuneva@yahoo.com', '(07) 3301-6741');
INSERT INTO clientes (nome, email, telefone) VALUES ('Armando King I', 'Tomasa_Crona@hotmail.com', '(46) 9803-4058');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jeff Weimann', 'Emil.Marquardt@yahoo.com', '(66) 2135-7641');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jan Satterfield', 'Ahmed85@hotmail.com', '(37) 4919-5798');
INSERT INTO clientes (nome, email, telefone) VALUES ('Christy Labadie', 'Hortense.Rogahn@yahoo.com', '(36) 5331-1647');
INSERT INTO clientes (nome, email, telefone) VALUES ('Pedro OReilly', 'Ena_Bogisich28@gmail.com', '(78) 7738-1258');
INSERT INTO clientes (nome, email, telefone) VALUES ('Mr. Delbert Jenkins', 'Ashly_Glover@hotmail.com', '(51) 1906-2855');
INSERT INTO clientes (nome, email, telefone) VALUES ('Harvey Cronin', 'Ila11@gmail.com', '(00) 6177-2002');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jared Bosco', 'Elyse_Herzog@gmail.com', '(05) 6866-1098');
INSERT INTO clientes (nome, email, telefone) VALUES ('Fannie Nolan', 'Karelle79@gmail.com', '(02) 6653-5607');
INSERT INTO clientes (nome, email, telefone) VALUES ('Roberta Mann', 'Norris.Oberbrunner13@yahoo.com', '(17) 0527-6801');
INSERT INTO clientes (nome, email, telefone) VALUES ('Earl Kuhn', 'Peter94@yahoo.com', '(53) 2346-0122');
INSERT INTO clientes (nome, email, telefone) VALUES ('Mrs. Lucy Stamm', 'Nyasia.OReilly@gmail.com', '(26) 9014-4856');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jacquelyn Vandervort', 'Jefferey_Terry@yahoo.com', '(08) 1032-4903');
INSERT INTO clientes (nome, email, telefone) VALUES ('Daniel Tillman', 'Bruce.Mante52@yahoo.com', '(06) 5645-2181');
INSERT INTO clientes (nome, email, telefone) VALUES ('Jake Farrell', 'Janet_Block@gmail.com', '(71) 2833-5200');
INSERT INTO clientes (nome, email, telefone) VALUES ('Kimberly Gulgowski', 'Grover.Bogan@hotmail.com', '(55) 4641-5851');
INSERT INTO clientes (nome, email, telefone) VALUES ('Miriam Bogisich I', 'Eula_Schuppe@hotmail.com', '(74) 1995-6662');;
