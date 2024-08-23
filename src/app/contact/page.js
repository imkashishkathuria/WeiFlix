import React from 'react'
import ComponentCard from '../components/ComponentCard'
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm'


const contact = () => {
  return (
    <>
    <div className={styles.container}>
      <h1>
        Contact Us
      </h1>
      <ComponentCard />
      <section className={styles.contact_section}>
        <h2>
          We&apos;d love to hear <span>
            from you
          </span>
        </h2>
        <ContactForm />
      </section>
   
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4654674612734!2d139.7940803746385!3d35.71476942813288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec1a4463df1%3A0x6c0d289a8292810d!2zU2Vuc8WNLWpp!5e0!3m2!1sen!2sin!4v1724402480910!5m2!1sen!2sin" width={600} height={450} style={{border:0} }allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
     </>
  )
}

export default contact

// cEY4Lzv4vuDpDDoZ
