import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Axios from "axios";

function Home() {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await Axios.get("http://localhost:3000/portifolio");

            setData(Array.isArray(response.data) ? response.data : [response.data]);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
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
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.dados[index].data}</td>
                            <td>{item.dados[index].cliente || "N/A"}</td>
                            <td>{item.dados[index].segurado || "N/A"}</td>
                            <td>{item.dados[index].num_assistencia || "N/A"}</td>
                            <td>{item.dados[index].bairro || "N/A"}</td>
                            <td>{item.dados[index].servico || "N/A"}</td>
                            <td>{item.dados[index].serv_status || "N/A"}</td>
                            <td>{item.dados[index].consistido || "N/A"}</td>
                            <td>{item.dados[index].mao_obra || "N/A"}</td>
                            <td>{item.dados[index].material || "N/A"}</td>
                            <td>{item.dados[index].TERCEIROS || "N/A"}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="11" style={{ textAlign: "center" }}>Nenhum dado disponível</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}

export default Home;
