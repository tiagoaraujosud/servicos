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
                        item.dados.map((dado, dadoIndex) => (
                            <tr key={`${index}-${dadoIndex}`}>
                                <td>{dado.data}</td>
                                <td>{dado.cliente || "N/A"}</td>
                                <td>{dado.segurado || "N/A"}</td>
                                <td>{dado.num_assistencia || "N/A"}</td>
                                <td>{dado.bairro || "N/A"}</td>
                                <td>{dado.servico || "N/A"}</td>
                                <td>{dado.serv_status || "N/A"}</td>
                                <td>{dado.consistido || "N/A"}</td>
                                <td>{dado.mao_obra || "N/A"}</td>
                                <td>{dado.material || "N/A"}</td>
                                <td>{dado.TERCEIROS || "N/A"}</td>
                            </tr>
                        ))
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
