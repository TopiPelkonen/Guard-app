# Dev branch
- branch jota voi käyttää kehitykseen ja testaukseen
- main tarkoitettu lopulliseksi tulokseksi kun todetaan että dev branchin muutokset ok
# kansiot
- App structure, uml kaavio
- backend, nodejs backendi josta otetaan yhteys tietokantaan
- react-native/myApp, frontend, ui, itse sovelluksen käyttöliittymä
   
# Kirjastot joita käytetään

## nodejs, backend

- express, routing
- dotenv, env. muuttujat
- mongoose, tietokanta mallit

# GitHub

https://github.com/oskari6/Guard-app.git

- git clone [url]

# MongoDB yhdistys

connection string: "mongodb+srv://cluster0.hjc5c.mongodb.net/" --apiVersion 1 --username db_admin

pitää olla mongosh ladattuna koneelle (mongodb tietokanta cli työkalu) https://downloads.mongodb.com/compass/mongosh-2.0.0-x64.msi

salasana: Password123

huom. ei toimi peliala netin kautta, pitää yhdistää joko puhelimen kautta tai toisesta netistä

kirjaudu nettiversioon tietokannasta
mongoddb.com
luo käyttäjä
luokan koneella: mongodb.com / database / database access / lisää henkilö

# React Nativen käyttö

- lataa node.js
- npm install -g expo-cli
- npx create-expo-app myApp
- cd myApp
- npm start

osoite: localhost:8081
