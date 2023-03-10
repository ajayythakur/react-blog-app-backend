import React, { useEffect, useState } from 'react'
import HomeVerticalTiles from '../Components/HomeVerticalTiles'
import Grassland from '../Images/Grassland.jpg'
// import Hill from './Hill.jpg';
import Hill from '../Images/Hill.jpg'
// import { store } from '../Components/Details'
import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

const Home = (props) => {
  // const [details] = useContext(store);
  const[data ,setData]=useState([]);
  // const url="http://localhost:3002/home";
  const url = "https://backend-for-react-blog.onrender.com/home"
  
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(res=>setData(res))
  })
  console.log(data);
  return (
    <div >
      <div id='grid'>
        <div class='box b1'><img className='gridImage' src={Grassland} alt='404'></img>
          {/* <span className='middleText'>Title of Vertical gallery </span><br /><span className='travelText'>Travel/25 January 2023</span> */}
        </div>
        <div class='box b2'><img className='gridImage2' src={Hill} alt="404" />
          {/* <span className='b2Text'>The Sound Cloud <br />you loved is doomed </span><br /><span className='b2travelText'>Travel/25 January 2023</span> */}
        </div>
        <div class='box b3'><img className='gridImage2' src={Hill} alt="404" />
          {/* <span className='b3Text'>The Sound Cloud <br />you loved is doomed </span><br /><span className='b3travelText'>Travel/25 January 2023</span> */}
        </div>
      </div>
      <br />
      <div className='homeDiv'>
      <p id='latext'>Bollywood <hr id='hr2' /></p>

      <div class='hometiles'>
        {data.filter((article) => { return article.category === "bollywood" }).map((n) => (
          <HomeVerticalTiles
          title={n.title}
            imgUrl={n.img} description={n.description.slice(0, 1500)}

          // img2="https://m.media-amazon.com/images/M/MV5BODM5Zjc5MDYtOWExYi00OTk5LWFhYTQtNWZmM2M4ZjJlZjYzXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg" 
          // text2="With progressive blindness setting in, Gayatri has to find answers to her twin sister's unlikely death. As the lines of reality keep getting blurred, is she ready to look the truth in the eye?"

          // img3="https://upload.wikimedia.org/wikipedia/en/a/ab/Cirkus_film_poster.jpg" 
          // text3="Two sets of identical twins are accidentally separated at birth. Several years later, when they are coincidentally in the same town, there is a lot of confusion and misunderstanding when people mistake them for each other."
          />
        ))}



        {data.slice(6, 10).filter((article) => { return article.category === "Bollywood" }).map((n) => (
          <HomeVerticalTiles
          title={n.title}
            imgUrl={n.img} description={n.description.slice(0, 1000)}
          />
        ))}
     
      </div>
      <Link to='/bollywood'><h3 className='sectionlink'>Go to Bollywood Section</h3></Link>


      <p id='latext'>Technology <hr id='hr2' /></p>
      <div class='hometiles'>
        {data.slice(28, 33).filter((article) => { return article.category === "Technology" }).map((n) => (
          <HomeVerticalTiles
          title={n.title}
            imgUrl={n.img} description={n.description.slice(0, 1000)}
          />
        ))}
      </div>

      <Link to='/technology'><h3>Go to Technology Section </h3></Link>

      <p id='latext'>Hollywood <hr id='hr2' /></p>
      <div class='hometiles'>
        {data.slice().filter((article) => { return article.category === "Hollywood" }).map((n) => (
          <HomeVerticalTiles
          title={n.title}
            imgUrl={n.img} description={n.description.slice(0, 1000)}
          />
        ))}
      </div>

      <Link to='/hollywood'><h3 className='sectionlink'>Go to Hollywood Section </h3></Link>

      {/* <HomeVerticalTiles
    img="https://www.pinkvilla.com/english/images/2023/01/582836848_where-to-watch-everything-everywhere-all-at-once-the-film-that-topped-oscar-nominations-with-11-nods_1280*720.jpg"


    text="Where to watch Everything Everywhere All At Once, the film that topped Oscar nominations with 11 nods.
    Michelle Yeoh starrer Everything Everywhere All At Once led the Oscar 2023 nominations by scoring 11 nods this year. Here’s where you can watch the movie!"
    // https://www.pinkvilla.com/entertainment/hollywood/where-to-watch-everything-everywhere-all-at-once-the-film-that-topped-oscar-nominations-with-11-nods-1207242

    img2="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/f9-poster-social-feature.jpg?q=50&fit=contain&w=767&h=&dpr=1.5"

    text2="You know what they say: good things come in 10s. Fine, maybe they don't actually say that, but in the case of the latest high-octane installment in the Fast and the Furious saga, Fast X, it certainly holds true.You know what they say: good things come in 10s. Fine, maybe they don't actually say that."

    // https://collider.com/fast-10-trailer-release-date/

    img3="https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpantherwakandaforever_lob_pur_digital_01.png"

    text3="Queen Ramonda (Angela Bassett), Shuri (Letitia Wright), M’Baku (Winston Duke), Okoye (Danai Gurira) and the Dora Milaje (including Florence Kasumba), fight to protect their nation from intervening world powers in the wake of King T’Challa’s death."
// https://www.marvel.com/movies/black-panther-wakanda-forever#purchase-9
     /> */}

      <p id='latext'>Fitness <hr id='hr2' /></p>
      <div class='hometiles'>
        {data.slice(39, 43).filter((article) => { return article.category === "Fitness" }).map((n) => (
          <HomeVerticalTiles
            imgUrl={n.img} description={n.description.slice(0, 1000)}
          />
        ))}
      </div>

      <Link to='/fitness'><h3 className='sectionlink'>Go to Fitness Section </h3></Link>

      {/* <HomeVerticalTiles
img="https://barbend.com/wp-content/uploads/2021/04/BarBend-Article-Image-760-x-427-93.jpg"
text="Deadlift Benefits That Are Backed By Science.Want to get bigger, stronger, leaner? Then, you may want to start doing the deadlift."
// https://barbend.com/deadlift-benefits/

img2="https://images.everydayhealth.com/images/walking-workouts-myths-and-facts-1440x810.jpg?sfvrsn=9caa86b_4"
text2="Walking Workouts: 7 Myths and Facts to Know
Should you be walking every single day? Is one long walk better than multiple shorter ones? And how fast should you be walking?"
// https://www.everydayhealth.com/fitness/walking-workouts-myths-and-facts-to-know/

img3="https://images.everydayhealth.com/images/ehfc-best-back-exercises-1440x810.jpg?sfvrsn=ee64917d_4"
text3="The Best At-Home Exercises for a Stronger Back.You may not think about your back muscles very often — out of sight, out of mind, right? But you probably want to be paying them a little more attention."
// https://www.everydayhealth.com/fitness/best-home-exercises-stronger-back/
     /> */}

      <p id='latext'>Food <hr id='hr2' /></p>
      <div class='hometiles'>
        {data.slice(49, 53).filter((article) => { return article.category === "Food" }).map((n) => (
          <HomeVerticalTiles
            imgUrl={n.img} description={n.description.slice(0, 1000)}
          />
        ))}
      </div>

      <Link to='/food'><h3 className='sectionlink'>Go to Food Section </h3></Link>

      {/* <HomeVerticalTiles
 img="https://joybauer.com/wp-content/uploads/2016/02/thumb_2041_content_big_wide.jpg"
 text="Tea and coffee may wake you up and keep you focused, but don’t overdo it on the caffeine — it may trigger migraines or IBS in people who are sensitive."
//  https://joybauer.com/food-articles/coffee-and-tea/

img2="https://joybauer.com/wp-content/uploads/2016/02/thumb_2023_content_big_wide.jpg"
text2="Cruciferous vegetables like broccoli and brussels sprouts are filling and full of nutrients that help keep you healthy! But if you have IBS, you may want to watch how much of them you eat!"
// https://joybauer.com/food-articles/cruciferous-vegetables/

img3="https://joybauer.com/wp-content/uploads/2016/02/thumb_2035_content_big_wide.jpg"
text3="Eggs, chicken, and turkey are rich in high-quality, lean protein and a variety of nutrients. Just remember to remove the skin and reduce the number of egg yolks to keep your heart and waistline in good shape!"
// https://joybauer.com/food-articles/eggs-and-poultry/
 /> */}




</div>
    </div>
  )
}

export default Home