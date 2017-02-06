if (window.MR === undefined) {window.MR = {};}
console.log ('About component');
(function() {

class AboutComponent extends React.Component {
  render() {

    return (<div className="page">

      <MR.HeaderComponent/>
      <div className="container">
        <h1> About LAURA</h1>
        <ul>
          <li>Uses: </li>
            <p>Users can record themselves in their Native Language and compare it to the language they wish to learn. The users can then down load their recordings and share them with other learners or language mentors</p>
          <li>Features:</li>
            <p>LAURA uses accessible features ensure all users have means to communicate. LAURA also emphasizes the importance of self-analysis to truly understand your own communication needs.</p>
          <li>Inspiration:</li>
            <p>Inspired by a local Sign Language Interpreter and her desire to advance her skill through accessible language.</p>
          <li>Code:</li>
            <p className="code-paragraph">The code for Laura can be found on <a href="https://github.com/chelsey-wiley/laura-app" target="_blank">GitHub</a>.</p>
        </ul>
      </div>



    </div>)
  }
}
  MR.AboutComponent = AboutComponent;
}());
