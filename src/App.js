import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './index.css';

class App extends React.Component {

  state = {
    files: [],
  }

  dropHandler = (e) => {
    e.preventDefault();
    console.log("Files dropped");
    
    if (e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {

        // If dropped items aren't files, reject them
        if (e.dataTransfer.items[i].kind === 'file') {
          var file = e.dataTransfer.items[i].getAsFile();
          console.log('... file[' + i + '].name = ' + file.name);
          this.setState({ files: [...this.state.files, file.name]  })
        }
        
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
        
      }
    }

  }

  dragOverHandler = (e) => {
    e.preventDefault();
    console.log('dragOverHandler');
  }

  render() {
    return (
      <div className="container">
          
          <div>
            <ProgressBar variant="danger" now={100} />
            <ul>
              {this.state.files.map((item, index) => <li key={index} className="item" >{item}</li>)}
            </ul>
          </div>
          
          <div id="bot">
            <div id="drop_zone" onDrop={this.dropHandler} onDragOver={this.dragOverHandler} >

              <p id="drop_zone_p">Drag files here or Browse</p>
              <input type="file" id="file" />

            </div>
          </div>
          
      </div>
    );
  }
}

export default App;
