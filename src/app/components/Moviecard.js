import Link from 'next/link';
import styles from '../styles/common.module.css'
import Image from 'next/image';

const Moviecard = ({imageurl, title, type, synopsis,imdbid}) => {
    const imageUrl = imageurl && imageurl.length>0?imageurl[0]: '/placeholder.png';

  return (
    <div>
      
      <div className={styles.card}>
      {/* <div className={styles.card_section}> */}
        <div className={styles.card_image}>
            <Image src={imageUrl} alt={title} width={200} height={100} />
        </div>
        <div className={styles.card_data}>
            <h2>
                {title}
            </h2>
            <p>
                {synopsis}
            </p>
            <Link href={`/movie/${imdbid}`} >
            <button className={styles.btn}>
                Read More
            </button>
            </Link>
        </div>
      </div>
      </div>
        // </div>
      
  )
}

export default Moviecard
