import styles from './Avatar.module.css';
// eslint-disable-next-line react/prop-types
export function Avatar({hasBorder = true, src}){

   // const hasBorder = props.hasBorder !== false;
    return(

        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar   }
    
         src={src} />
         //src={props.src} />
    );
}