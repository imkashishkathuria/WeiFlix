import styles from './styles/common.module.css'
import Link from 'next/link'



const notFound = () => {
  return (
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>
                404
            </h1>
            <h2>
                Not Found
            </h2>
            <p>
                Could not find requested resource
            </p>
            <Link href="/">
            <button className={styles.btn}>
                Go to Home Page
            </button>
            </Link>
        </div>

    </section>
  )
}

export default notFound
