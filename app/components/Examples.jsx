var React = require('react');
var {Link} = require('react-router');



var Examples = () => {
  return (
    <div>
      <h1 className="text-center page-title">Examples Page</h1>
      <p>Here are a few example locations to try out.</p>
      <ol>
        <li>
          <Link to='/?location=Thomasville'>Thomasville, NC, USA</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;