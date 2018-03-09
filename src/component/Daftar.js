import React, { Component } from 'react';

class Daftar extends Component {
  render() {
    return (

          <div className="container">
              <div className="row">
                  <div className="col-xs-12">
                      <div className="panel panel-primary">
                          <div className="panel-heading">
                              {this.props.coba1}
                          </div>

                          <div className="panel-body">
                            {/* <img>{this.props.coba2}</img> */}
                            {this.props.coba3}                              
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}

export default Daftar;