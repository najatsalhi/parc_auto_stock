create DATABASE Parc_Auto_stock;
use Parc_Auto_stock;
create table Users (
    id_user integer PRIMARY KEY,
    nom varchar(30),
    prenom varchar(30),
    email varchar(50),
    password varchar(50),
    role varchar(30),
    telephone varchar(30)
);
alter table Users add id_vehicule integer;
alter table Users add CONSTRAINT fk_user FOREIGN key(id_vehicule) REFERENCES vehicule(id_vehicule);
alter table Users add id_stock integer;
alter table Users add constraint fk_useer1 FOREIGN key(id_stock) references stock(id_stock); 
create table vehicule 
(
    id_vehicule integer PRIMARY KEY,
    marque varchar(50),
    modele varchar(50),
    etat varchar(50),
    couleur varchar(50),
    kilometrage integer,
    type_carburant varchar(50),
    num_immatriculation integer,
    carte_grise varchar(50),
    assurance varchar(50),
    vignette varchar(50),
    visite_technique varchar(50)
    );
alter table vehicule add id_rapport_veh int;
alter table vehicule add CONSTRAINT fk_vehicule FOREIGN key(id_rapport_veh) REFERENCES Rapport_veh(id_rapport_veh);
alter table vehicule add id_reparation_veh int;
alter table vehicule add constraint fk_vehicule1 FOREIGN key(id_reparation_veh) references reparation_veh(id_reparation_veh);
alter table vehicule add id_recharge_carb int;
alter table vehicule add constraint fk_vehicule2 FOREIGN key(id_recharge_carb) references recharge_carb(id_recharge_carb);
alter table vehicule add  id_chauffeur integer;
alter table vehicule add constraint fk_vehicule3 FOREIGN key(id_chauffeur) references chauffeur(id_chauffeur);
create table stock 
(
    id_stock integer PRIMARY KEY,
    typ varchar(30),
    categorie varchar(30),
    quantite integer
);
alter table stock add id_article integer;
alter table stock add CONSTRAINT fk_stock FOREIGN key(id_article) REFERENCES article(id_article);
create table article
(
    id_article integer PRIMARY KEY,
    nom varchar(30),
    description varchar(30),
    etat varchar(30),
    departement varchar(30),
    date_stockage date,
    quantite integer
);
alter table article add id_rapport_art int;
alter table article add CONSTRAINT fk_article FOREIGN key(id_rapport_art) REFERENCES Rapport_art(id_rapport_art);
alter table article add id_reparation_art int;
alter table article add constraint fk_article1 FOREIGN key(id_reparation_art) references repparation_art(id_reparation_art);
create table Rapport_art
(
    id_rapport_art int PRIMARY KEY ,
    type varchar(30),
    date_gener DATE,
    contenu varchar(100),
    format varchar(50)
);

create table Rapport_veh
(
    id_rapport_veh int PRIMARY KEY ,
    type varchar(30),
    date_gener DATE,
    contenu varchar(100),
    format varchar(50)
);

create table repparation_art
(
    id_reparation_art int PRIMARY KEY ,
    type varchar(30),
    date_reparation DATE,
    cout integer,
    fornisseur varchar(50),
    facture varchar(50)
);

create table reparation_veh
(
    id_reparation_veh int PRIMARY KEY ,
    type varchar(30),
    date_reparation DATE,
    cout integer,
    fornisseur varchar(50),
    facture varchar(50)
);
create table chauffeur 
(
    id_chauffeur integer PRIMARY KEY,
    nom varchar(30),
    prenom varchar(30),
    telephone varchar(30),
    permie varchar(30),
    date_debut date,
    date_fin date
); 
create table recharge_carb
(
    id_recharge_carb int PRIMARY KEY ,
    type varchar(30),
    date_recharge DATE,
    cout integer,
    quantite integer,
    fournisseur varchar(50),
    facture varchar(50)
);

