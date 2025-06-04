import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
export function Comment() {
    return (
        <div className={styles.comment} >
            <Avatar hasBorder={false} src="https://github.com/JoseTayllan.png" />
            <div className={styles.commentBox} >
                <div className={styles.commentContent} >
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> José tayllan</strong>
                            <time title='18 de Fevereiro as 10:00H' dateTime="2025-02-18 10:01:01">Cerca de 1H Atrás </time>
                        </div>
                        <button title='Deletar comentario' >
                            <Trash size={24}/>
                        </button>

                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>

                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span> 28 </span>
                    </button>
                </footer>

            </div>
        </div>
    )

}