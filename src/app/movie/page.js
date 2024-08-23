import Link from 'next/link'
import styles from '../styles/common.module.css'
import Moviecard from '../components/Moviecard';

import Image from 'next/image';

const Movie= async() =>{
  await new Promise(resolve=>setTimeout(resolve, 2000))
  
  
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a39c998316msh8eeb3c6f7a7c0e4p17b13bjsnaea68d984340',
      'x-rapidapi-host': 'ott-details.p.rapidapi.com'
    }
  };
  const res=await fetch(url, options);
    const data=await res.json();
    const main_data=data.results;
    console.log(main_data);
    console.log(data);

  return (
    <>

    <section className={styles.movieSection}> 
      
     
      
      <h1 className={styles.heading}>
        Series & Movies
      </h1>
      <div className={styles.container}>
      <div className={styles.card_section}>
        <div className={styles.grid_two_section}>
      {
        main_data && main_data.map((currElem)=>{
            if(currElem.synopsis==""){
              return null;
            }
          return (
          <Moviecard key={currElem.id} {...currElem} />
            
          )

        })
      }
      </div>
      </div>
      </div>
      </section>
    </>
  )
}

export default Movie

