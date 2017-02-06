if (window.MR === undefined) {window.MR = {};}
console.log ('About component');
(function() {

class AboutComponent extends React.Component {
  render() {

    return <div className="page">

      <MR.HeaderComponent/>
      <div className="container">
      
      </div>


    </div>
  }
}
  MR.AboutComponent = AboutComponent;
}());
