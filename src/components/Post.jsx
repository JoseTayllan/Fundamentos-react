import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
export function Post() {
  return (
    <article className={styles.post} >
      <header>
        <div className={styles.author} >
          <Avatar  src="https://github.com/JoseTayllan.png" />
          <div className={styles.authorInfo} >
            <strong>
              José Tayllan
            </strong>
            <span>
              Web Developer
            </span>
          </div>

        </div>


        <time title='18 de Fevereiro as 10:00H' dateTime="2025-02-18 10:01:01">Publicado ha 1h </time>
      </header>
      <div className={styles.content} >
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a> </p>
        <p>
          <a href="">#novoprojeto   </a> {' '}
          <a href="">#nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm} >
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentario' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>

      </form>
      <div className={styles.commentList} >
        <Comment/>
        <Comment/>
        <Comment/>

      </div>


    </article>
  )
}