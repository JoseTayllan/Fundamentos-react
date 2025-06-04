import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';

import styles from './App.module.css';

import './global.css'

import { Sidebar } from './components/Sidebar.jsx'



export function App() {

  return (
    <div>
      <Header/>
      
     <div className={styles.wrapper}>

      <Sidebar/>

      <main >
      <Post
        author="Matheus" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consectetur minus odit aut optio eos vero est labore beatae, nobis neque numquam sed explicabo, asperiores quibusdam rem reiciendis vitae tempora." 
      />
      <Post 
      author ="José"
      content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem ratione inventore quia non veniam maiores suscipit facere veritatis magni reiciendis libero temporibus blanditiis illum minima sequi, tenetur minus debitis?"
      />
      </main>
     </div>

    </div>
  )
}


