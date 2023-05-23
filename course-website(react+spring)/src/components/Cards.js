import React from 'react'
import './Cards.css'
export default function Cards() {
  return (
    <div class="main">
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://assets.codepen.io/652/photo-1468777675496-5782faaea55b.jpeg" alt="mixed vegetable salad in a mason jar." />
          <span class="card_price"><span>$</span>9</span>
        </div>
        <div class="card_content">
          <h2 class="card_title">Farmstand Salad</h2>
          <div class="card_text">
            <p>Dig into the freshest veggies of the season! This salad-in-a-jar features a mixture of
              leafy greens and seasonal vegetables, fresh from the farmer's market.
            </p>
            <hr />
            <p>Served with your choice of dressing on the side: <strong>housemade ranch</strong>, <strong>cherry balsamic
                vinaigrette</strong>, <strong>creamy chipotle</strong>, <strong>avocado green goddess</strong>, or <strong>honey mustard</strong>. Add your choice
              of protein for $2 more.
            </p>
          </div>
        </div>
      </div>
    </li>
    

    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper." />
          <span class="card_price"><span>$</span>18</span>
        </div>
        <div class="card_content">
          <h2 class="card_title">Ultimate Reuben</h2>
          <div class="card_text">
            <p>All great meals take time, but this one takes it to the next level! More than 650 hours
              of fermenting, brining, aging, and curing goes into each and every one of our legendary
              Reuben sandwiches.
            </p>
            <p>Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye
              bread baked from our secret recipe to the cave-aged Swiss cheese, right down to the
              pickle. The only thing we didn't make on the premises is the toothpick ( but we're
              looking into how to do that).
            </p>
            <hr />
            <p>This unforgettable sandwich has all of the classic Reuben elements: <strong>corned beef</strong>, <strong>rye
                bread</strong>, <strong>creamy Russian dressing</strong>, <strong>sauerkraut</strong>, plus a <strong>sweet gherkin pickle</strong>.
              No substitions please!
            </p>
            <p>Add a side of <strong>french fries</strong> or <strong>sweet potato fries</strong> for $2 more, or our
              <strong>housemade pub chips</strong> for $1.
            </p>
          </div>
        </div>
      </div>
    </li>

    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <span class="note">Seasonal</span>
          <img src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" alt="A side view of a plate of figs and berries." />
          <span class="card_price"><span>$</span>16</span>
        </div>
        <div class="card_content">
          <h2 class="card_title">Fig &amp; Berry Plate</h2>
          <div class="card_text">
            <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in
              this refreshing, shareable dessert.
            </p>
            <hr />
            <p>Choose your drizzle: <strong>cherry-balsamic vinegar</strong>, <strong>local honey</strong>, or
              <strong>housemade chocolate sauce</strong>.
            </p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
  )
}
