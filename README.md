# KRS-proj

## Instrukcja uruchomienia

1. Uruchom kontenery:

    > Uwaga: serwer API uruchamiany jest na porcie 8080. Przed uruchomieniem upewnij się, że port nie jest zajęty przez inną aplikację/usługę.

    ```bash
    # krs-proj-main/docker
    cd docker
    docker compose up -d
    ```

2. Pobierz zależności dla serwera API:

    ```bash
    docker compose exec -it php /bin/bash

    # Wewnątrz kontenera:
    cd api
    composer install

    # Po pobraniu zależności można wyjść z kontenera: ctrl+d
    ```

3. Pobierz zależności dla frontendu:

    ```bash
    # krs-proj-main/frontend
    cd frontend
    npm install
    ng serve
    ```

4. Uruchom aplikacje pod adresem: <http://localhost:4200>
