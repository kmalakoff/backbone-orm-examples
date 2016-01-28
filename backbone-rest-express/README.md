
Run
========

$ npm install
$ npm start

Open http://localhost:3000/projects

Create a new record:

$ curl -H "Content-Type: application/json" -X POST -d '{"index": 11, "name":"New Project"}' http://localhost:3000/projects
