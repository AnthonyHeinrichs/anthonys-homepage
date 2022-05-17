import { DiHeroku, DiPostgresql, DiMongodb, DiRuby, DiRor } from 'react-icons/di'
import { SiNextdotjs } from 'react-icons/si'


export default [
  {
    id: 1,
    logo: <DiRuby />,
    language:'Ruby',
    body: 'Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.' 
  },
  {
    id: 2,
    logo: <DiPostgresql />,
    language: 'PostgreSQL',
    body: 'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance.' 
  },
  {
    id: 3,
    logo: <DiMongodb />,
    language: 'MongoDB',
    body: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.' 
  },
  {
    id: 4,
    logo: <DiHeroku />,
    language: 'Heroku',
    body: 'Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.' 
  },
  {
    id: 5,
    logo: <DiRor />,
    language: 'Ruby on Rails',
    body: 'Ruby on Rails is a server-side web application framework written in Ruby.'
  },
  {
    id: 6,
    logo: <SiNextdotjs />,
    language: 'Next.js',
    body: 'Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.' 
  }
]


