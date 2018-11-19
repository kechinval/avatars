import React, {Component} from 'react'

import './index.css'

export default class Avatar extends Component  {

    state = {
        ids: [2, 7, 1, 8, 3, 9],
        links: [],
    }

    componentDidMount(){
        this.state.ids.map((id) => {
            var url = `https://picurl.herokuapp.com/users/${id}`;
            fetch(url)
                .then((res) => res.json())
                .then((fres) => this.setState({ links: [...this.state.links, fres.url ]}))
        })
        
    }

    render () {
        return(
            <div className="row">
                {this.state.links.map(link => {
                    return(
                        <div key={link} className="col-sm-3">
                            <img className="img-circle img-size" src={link} alt=""/>
                        </div>
                    )
                })}
            </div>
        )
    }
}