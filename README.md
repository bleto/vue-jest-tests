# Vue Jest Test

### Info
Projekt zawiera zadania przygotowane do ćwiczenia testów jednostkowych w technologii JS (JestJS + Vue). 
> *Projekt bazuje na **Vue CLI 3**.*

### Zadanie
Ogólnym zalożeniem jest przetestowanie aplikacji tak, aby pokrycie testami było jak najwyższe (miło widziane pokrycie 100%).

W katalogu `src` znajdują się wszystkie pliki wymagające testów.
    
Testujemy:
- **/components**
- **/models**
- **App.vue** 


### Konfiguracja
Wszystko co jest potrzebne do poprawnego uruchomienia testów jest już skonfigurowane. 
Najważniejsze miejsca do których warto zajrzeć przed pracą to:
- **package.json** - paczki `npm` i polecenia uruchomieniowe,
- **jest.config.js** - ogólna konfiguracja biblioteki testującej `JestJS`,
- **babel.config.js** - konfiguracja środowiska uruchomieniowego `Babel`,

### Instalacja

```
npm install
```

### Polecenia

##### Uruchomienie środowiska developerskiego
```
npm run serve
```
##### Uruchomienie środowiska produkcyjnego
```
npm run build
```
##### Lintowanie i poprawa plików
```
npm run lint
```

##### Uruchomienie testów
```
npm run test
npm run test:nocache - testy bez cache'u
npm run test:coverage - testy z tabelą pokrycia
```

### Przydatne linki
- [Strona biblioteki do testów Jest][jest]
- [Biblioteka do testów na Vue][vue-test-utils]
- [Biblioteka mockująca do stora][vuex-mock-store]

[jest]: https://jestjs.io/
[vue-test-utils]: https://vue-test-utils.vuejs.org/
[vuex-mock-store]: https://github.com/posva/vuex-mock-store