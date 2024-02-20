# MongoDB

1. Open Terminal
2. Run command `mongosh` to connect to mongodb
3. List Database: `show databases` or `show dbs`
4. Create database or switch database: `use <db_name>`
    - When you create a new db, it is not listed by the `show database` because database is empty.
5. List Tables/Collections: `show collections`
6. Create Collection: `db.createCollection('<collection_name>')`.
7. Drop Collection: `db.<collection_name>.drop()`
8. Drop Database: `db.dropDatabase()`.

9. We can also create collections inside a db directly by inserting element in it. : 
    - `db.<collection_name>.insertOne({'key':'value', 'key':'value'})`, here, we are adding only one document using insertOne fxn.
    - `db.<collection_name>.insertMany([{}, {}, {}])`, here we can insert multiple documents where one doc is represented by each `{}` and we pass an array of documents. `[{}, {}, ...]`.

10. To view the data in a table/collection: `db.<collection_name.find()>`

Output: 
```
[
  {
    _id: ObjectId('65a8b71dfb238480693e0229'),
    name: 'Shubhansu',
    reg: 12104991,
    cg: 9.1
  },
  {
    _id: ObjectId('65a8b86cfb238480693e022a'),
    name: 'Anusha',
    reg: 12106614,
    cg: 9
  },
  {
    _id: ObjectId('65a8b86cfb238480693e022b'),
    name: 'Lakhan',
    reg: 12106643,
    cg: 9
  }
]
```

An id is created for each document under the key `_id`.

Always use `""` or `''` for inserting data on key part if the key is multiword key. eg: {'roll no': 21}: here, roll no is a multi word key, thus we have to use single quote.

<!-- Ordered vs Unordered Insertion -->
When we insert multiple documents/rows and if there are any anomaly in any step, the following insertions will be aborted but the prev operations will be saved. This is called ordered insertion.
`db.<collection_name>.insertMany([{}, {}, ...])` or
`db.<collection_name>.insertMany([{}, {}, ...], {ordered:true})` 

In case of unordered insertion, if there is an error in any step all the prev and the subsequent steps are also executed. Only the steps containing the error will be aborted.
`db.<collection_name>.insertMany([{}, {}, ...], {ordered:false})` 

<!-- Case Sensitivity in MongoDB -->
- Collection names are case sensitive
- Field name within document(ie. keys) are also case sensitive.

