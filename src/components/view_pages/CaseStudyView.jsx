import React from 'react';
import compLogo from "../../assets/img/comp_logos/truck-square.png";
import truckXprod from "../../assets/img/truckx-case.png";
import { Link } from 'react-router-dom';

const CaseStudyView = () => {
    return(
        <>
<article className="study-container">
    <section className="study-material">
        <div className="study-info-container">
            <div className="study-title">
                <img src={compLogo} alt="" className="study-read-logo" />
                <h3 className='case-Study-Heading-reader'>Lorem Ipsum Dolor SIt Emet...</h3>
                <p className="caese-styudy-description-reader">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, optio minima natus facere tenetur in, quam quod ipsa repellendus similique soluta illo laboriosam fuga ullam accusantium iure earum. Repudiandae, excepturi!</p>
            </div>
        </div>
        <div className="study-media-container">
            <img src={truckXprod} alt="" className='product-study-img'/>
        </div>       
    </section>
    <section className="study-details-container">
    <div className="study-content">
            <p className="study-details">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum maxime, minima necessitatibus placeat voluptates perferendis et cum fuga, tempore dolore perspiciatis quas accusamus dicta eos numquam earum nesciunt veritatis ratione!
                Dicta porro quidem nam aliquam in harum suscipit dolorum totam officiis eaque voluptatum accusantium iste magnam distinctio sed, debitis earum dolore tempora maiores natus? Nihil laboriosam accusantium veritatis dolore. Consequatur!
                Quia ipsum eaque, tenetur quibusdam voluptas error explicabo magnam, nobis magni alias dolore mollitia esse. Illum accusantium quo iste beatae optio a amet similique dolorem! Eos nobis quod eligendi temporibus.
                Et inventore nesciunt soluta molestiae aut hic sit voluptas, explicabo similique deserunt ipsam est? Reprehenderit perferendis commodi iure iusto aspernatur nisi blanditiis perspiciatis dolor incidunt harum eum, veritatis nam ab!
                Inventore quibusdam perferendis autem nemo quos accusantium laborum repellat adipisci, voluptates reiciendis quae natus odio perspiciatis explicabo nam aspernatur non officia eum. Quam odit voluptatum, tempora expedita exercitationem tenetur iste?
                Quaerat sint odio harum illum quis dignissimos inventore tempore nam pariatur possimus. Ex, odio? Atque incidunt, voluptate voluptatum, non facere aut odit fugiat minima, sed aperiam aliquid vitae pariatur rem.
                Tempora facilis quibusdam impedit. Perspiciatis vitae beatae omnis debitis consequuntur. Rem, aliquam perferendis consequatur fugit nisi blanditiis voluptatibus, 
            </p>
            <div class="case-more-button-container">
                <div class="case-button-study-page-back">
                <Link to="/" className='read-study-button-back'
                  > &larr; Back</Link
                >
               </div>
                <div class="case-button-study-page"> <Link to="/" className='read-study-button-back'
                  > View More Case Studies &rarr;</Link
                > </div>
              </div>
        </div>
    </section>
</article>

        </>
    )
}

export default CaseStudyView;