import React from 'react';
import blogHeader from "../../assets/img/b2b.webp";
import { Link } from 'react-router-dom';

const BlogView = () => {
    return(
        <>
          <article className="blog-viewer">
            <section className="blog-content-container">
                <div className="blog-content">
                    <div className="blog-image-header-container">
                        <img src={blogHeader} alt="" className='blog-image-in-reader' />
                    </div>
                   <div className="blog-heading-read-section">
                    Lorem Ipsum Dolor Sit Emit....
                   </div>
                   <div className="blog-desc-line-section">
                    Lorem Ipsum Dolor Sit Emit what ever what ever what ever...
                   </div>
                   <hr />
                   <div className="blog-content-text-section">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem odit quaerat corrupti suscipit ex, fugit saepe dignissimos debitis officia perferendis reiciendis excepturi aperiam odio aliquam iure praesentium accusantium necessitatibus adipisci?
                    Accusamus similique ducimus veniam dolor? Hic rerum, repudiandae repellat optio odit veritatis molestiae ut sint quidem totam libero deserunt iusto quisquam ad aliquid fugiat, error dicta numquam rem, cupiditate eum.
                    Doloribus eaque, hic incidunt rem ipsa mollitia suscipit iusto ullam omnis provident veniam quasi quae vero in ex consequuntur quidem assumenda dicta, ratione minus fugiat cupiditate est sunt? Minima, nam.
                    Eligendi quae nobis dicta optio, consequatur et quidem ipsum suscipit sunt iure soluta aperiam temporibus molestias, minima voluptatem magni accusamus deserunt nihil nesciunt dolor cumque. Accusantium sunt natus numquam maxime?
                   praesentium possimus, saepe reprehenderit illum unde iste eum nam. Repellendus, quod beatae!
                   </div>
                   <div class="blog-more-button-container">
                <div class="blog-button-study-page-back">
               
                <Link to="/" className='blog-study-button-back'
                  > &larr; Back</Link
                >
              
                     </div>
                <div class="blog-button-study-page"> View More blogs &rarr;</div>
              </div>
                </div>
            </section>
          </article>
        </>
    )
}

export default BlogView;