import { DiPostgresql, DiMongodb, DiRuby, DiNodejsSmall } from 'react-icons/di'

export default [
  {
    id: 1,
    logo: <DiRuby />,
    language:'Ruby',
    body: 'Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.'
  },
  {
    id: 2,
    logo: <DiNodejsSmall />,
    language:'Node.js',
    body: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.'
  },
  {
    id: 3,
    logo: <DiPostgresql />,
    language: 'PostgreSQL',
    body: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.'
  },
  {
    id: 4,
    logo: <DiMongodb />,
    language: 'MongoDB',
    body: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.'
  },
]
