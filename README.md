# Git feladat demó

Ennek a feladatnak az a célja, hogy bemutassam a git verziókezelést 1-2-n felhasználón keresztül fejlesztve egy közös kódbázist.

Egyelőre master branch-en történő fejlesztéssel.

### HÁZI

Hozz létre egy üres git repository-t amihez csinálj egy remote-ot is Github-on keresztül.

Klónozd le a repository-t (ha esetleg nem lokálba kezdted el) és a következő kódolási feladatot valósítsd meg:

- vanilla js-ben legyen a https://api.siposm.hu/word api meghívva és az elemek <p> tag-be megjelenítve a html-en
- azok a szavak, amelyek rövidebbek mint 5 karakter, azok legyenek piros színnel kiemelve, amelyek hosszabbak mint 8 karakter, azok legyenek zöld színnel kiemelve
- legyen egy gomb az oldalon, amire kattintva, random 10 szó kiválogatásra kerül és ezek legyenek konzolra kiírva

**Verziókezelés gyakorlása**

- commit small, commit often elv alkalmazása a fejlesztés alatt
- a) két klónozásból két külön fejlesztés "imitálása" párhuzamosan (lásd videóban)
- VAGY
- b) github felületéről szerkeszteni adott fájlt -> commit -> pull lokálba
- merge conflict előállítása és lekezelése


### TODO

- [ ] branch kezelés
- [ ] flowk bemutatása
- [ ] ignore
- [ ] angular példa
- [ ] GUI eszközök bemutatása
- [ ] GH insights
- [ ] issue kezelés GH-n keresztül
