import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import HiveServices from '../services/HiveServices'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'



export default class UpdateHive extends Component {
    constructor(props){
        super(props)
        this.state={
            title: this.props.hive ? this.props.hive.title : '',
            info:'',
            age:'',
            location:{ coordinates:{
                lat:'',
                lng:'',
            }
                
            },
            race:'',
        }
    }

    handleOnChange = (e) =>{
        const target = e.target
        const name = target.name
        const val = target.value
        this.setState({
            [name]:val
        })
    }

    componentDidMount(){
        console.log(this.props)
    }


    render() {
        console.log("state hive title: ", this.state)
        console.log("Props hive title: ", this.props.hive)
        return (
            <div className="mt-5">
                <Form className='mr-md-5 ml-md-3 ml-2 mr-2'>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Name of Hive"  value={this.state.title} onChange={this.handleOnChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" name="age" placeholder="Age of hive" value={this.state.age} onChange={this.handleOnChange}/>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelectRace">
                                <Form.Label>Select Race</Form.Label>
                                <Form.Control as="select">
                                    <option>{this.state.race}</option>
                                    <option>Buckfast</option>
                                    <option>Italian</option>
                                    <option>Russian</option>
                                    <option>Cordovan</option>
                                    <option>Caucasian</option>
                                    <option>Carniolan</option>
                                    <option>European Dark Bee</option>
                                    <option>Wild / Unknown</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formLocLat">
                                    <Form.Label>Lat</Form.Label>
                                    <Form.Control type="text" name="lat" placeholder="Latitude"  value={this.state.location.coordinates.lat} onChange={this.handleOnChange}/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formLocLng">
                                    <Form.Label>Long</Form.Label>
                                    <Form.Control type="text" name="lng" placeholder="Longitude"  value={this.state.location.coordinates.lng} onChange={this.handleOnChange}/>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formLocLat">
                            <Form.Label>Lat</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Info about Hive" value={this.state.info} onChange={this.handleOnChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Button variant='secondary' type="submit" onClick={this.updateHive}>
                        Update
                    </Button>
                </Form>
            </div>
        )
    }
}
