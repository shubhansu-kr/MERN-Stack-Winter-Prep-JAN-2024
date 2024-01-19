<!-- Find  -->

1. We can use find function to simply show the table: `db.<collection_name>.find()`

2. We can also pass one key value pair to show the docs which match the provided key:val: `db.<collection_name>.find({'key':value})`

3. If we want to list only one row we can use `findOne()` instead: `db.<collection_name>.findOne({'Key':value})`

<!-- Importing Json in DB -->

To import a json file in db: `mongoimport jsonfile.json -d <db_name> -c <collection_name>`

Now if the json file is an array of objects we have to specify this in the command: `mongoimport jsonFile.json -d <db_name> -c <collection_name> --jsonArray`.

