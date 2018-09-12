import React from 'react';

const EquipmentCard = (props) => {
   const { name, type, url, company } = props;

   return (
      <div className="col-lg-4 col-md-6 col-sm-12">
         <div className="blog-item">
            <div className="blog-image">
               <a href="index.html">
                  <img className="img-fluid" src="assets/img/blog/img-1.jpg" alt=""/>
               </a>
            </div>
            <div className="descr">
               <div className="tag">{type}</div>
               <h3 className="title">
                  <a href="single-blog.html">
                     {name}
                  </a>
               </h3>
               <div className="meta-tags">
                  {/*<span className="date">Jan 20, 2018</span>*/}
                  <span className="comments">by
                     <a href={url}>
                     {company}</a>
                  </span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default EquipmentCard;