import React from "react";
import {Table} from "react-bootstrap";

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            servicos : []
        }
    }

    render(){
        return(
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>CLIENTE</th>
                            <th>SEGURADO</th>
                            <th>ASSISTÊNCIA</th>
                            <th>BAIRRO</th>
                            <th>SERVIÇO</th>
                            <th>STATUS</th>
                            <th>CONSISTIDO</th>
                            <th>MÃO OBRA</th>
                            <th>MATERIAL</th>
                            <th>TERCEIROS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luiz</td>
                            <td>test</td>
                            <td>options</td>
                        </tr>
                    </tbody>
                </Table>
        )
    }
}

export default Home;