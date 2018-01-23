var React = require('react');


var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About Page</h1>
      <p>This is a simple weather app built in 
        <a href="https://reactjs.org"> React</a> and styled with <a href="https://foundation.zurb.com"> Foundation.</a></p>
      <p>You can see the code on <a href="https://github.com/jlcoburn/ReactWeather">Github.</a></p>
      <p>This projet was built following <a herf="https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview">The Complete React Web App Developr Course by Andrew Mead</a> on <a href="https://www.udemy.com">Udemy.</a></p>
    </div>
  )
};

module.exports = About;