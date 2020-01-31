import React , {Component} from 'react'
import {ListGroup , Alert, Button} from 'react-bootstrap'
export default class Element extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "container">
                <ListGroup>
                    <ListGroup.Item >
                        {this.props.content}
                        <Button  
                            onClick = {()=>this.props.remove(this.props.content)}
                            className="m-3" variant="primary"
                        >
                            Remove
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}