import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: './assets/curriculo.jpg',
      name: 'João Andrade',
      role: 'Desenvolvedor Frontend'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir o primeiro projeto do meu portfólio, feito para candidatura do Vereador Reimont Otoni a Deputado Federal pelo Rio. Projeto desenvolvido em Next.js com Typescript, Tailwind e backend em Node. Nesse projeto pude utilizar ferramentas como a geração de páginas estáticas (SSG), renderização do lado do servidor (SSR), além do consumo de dados através da Rest API segue o link !' },
      { type: 'link', content: 'www.reimont1333.com.br' },
    ],
    publishedAt: new Date('2022-08-16 20:00:00'),
  }
];

export function App() {
  return (
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
  )
}
