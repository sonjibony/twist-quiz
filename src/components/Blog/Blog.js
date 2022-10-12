import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-container'>
           <div className='blog-intro'>
            <h1 className='greet'>Welcome!</h1>
            <p className='tag-line'>I hope you find what you're looking for and that you enjoy your stay.</p>
           </div>
            <div className="react-router">
                <img src={"https://miro.medium.com/max/880/1*kjZAT2HyYLv5gKT9SMBAHA.png"} alt=""></img>
                <div className='ques-ans'>
                    <h2 className='ques'>1.What is the purpose of React Router?</h2>
                    <p className='ans'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
               </p>
                </div>
            </div>
            <div className="use-ref">
            <div className='ques-ans'>
                    <h2 className='ques'>2.What is useRef Hook and its functionalities?</h2>
                    <p className='ans'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.The mutable ref object it returns will persist for the full lifetime of the component.

               </p>
                </div>  
            <img src={"https://res.cloudinary.com/practicaldev/image/fetch/s--fBV9Brp0--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qnwi8ehe64zysba5y195.png"} alt=""></img>
        </div>

        <div className="context-api">
            <img src={"https://www.loginradius.com/blog/static/157af7ff069ab273224b4718433d9790/03979/title-image.png"} alt=""></img>
            <div className='ques-ans'>
                    <h2 className='ques'>3.How does Context API work in react?</h2>
                    <p className='ans'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.For example, some use cases the Context API is ideal for: theming, user language, authentication, etc  
               </p>
                </div>  
        </div>
         </div>
    );
};

export default Blog;