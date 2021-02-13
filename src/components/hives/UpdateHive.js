import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'



export default class UpdateHive extends Component {
    constructor(props){
        super(props)
        this.state={
            title:this.props.hive.name,
            info:this.props.hive.info,
            age:this.props.hive.age,
            location:{ coordinates:{
                lat:this.props.hive.location.coordinates[0],
                lng:this.props.hive.location.coordinates[1],
            }
                
            },
            race:this.props.hive.race,
        }
    }

    render() {
        return (
            <div className="mt-5">
                <Form className='mr-md-5 ml-md-3 ml-2 mr-2'>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="title" placeholder="Name of Hive"  value={this.state.name} onChange={this.handleOnChange}/>
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
                    <Button variant='secondary' type="submit" onClick={this.submitLogin}>
                        Save
                    </Button>
                </Form>
            </div>
        )
    }
}
