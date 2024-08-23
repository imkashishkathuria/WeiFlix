// "use client"
import styles from "../../styles/common.module.css"
import Image from "next/image";

export default async function Page ({params})  {
  const {id}=params;

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
    const item = main_data.find((currElem) => currElem.imdbid === id);
 
  return (
    
    <div>
      {/* <h1>
       {item.title}
      
      </h1>
      <Image src={item.imageurl[0]} alt="title" height={300} width={300} />
      <p>{item.synopsis}</p> */}
    
      <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={item.imageurl[0]} alt={item.title} width={200} height={100} />
        </div>
        <div className={styles.card_data}>
            <h2>
                {item.title}
            </h2>
            <p>
                {item.synopsis}
            </p>
            <h4>
              Genre : {item.genre[0]}, {item.genre[1]}, {item.genre[2]}
            </h4>
            <h4>
              Type : {item.type}

            </h4>
            <h4>
            Imdb Rating : {item.imdbrating}<br />
            </h4>
            <h4>
            Release : {item.released}
            </h4>
        </div>
      </div>
    </div>
  )
}


