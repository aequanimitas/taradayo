Taradayo
========

- build this one first: https://switch2osm.org/serving-tiles/manually-building-a-tile-server-14-04/
- on ```/usr/local/etc/renderd.conf```
    - set ```CORS=*```
    - adjust zoom levels
- starting up tile server
    ```
    sudo mkdir /var/run/renderd
    sudo chown username /var/run/renderd
    sudo -u username renderd -f -c /usr/local/etc/renderd.conf
    ```
