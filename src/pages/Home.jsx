import { Button } from "antd";
import { table } from "antd";

import { BrowserRouter,Route, Routes } from "react-router";
import DashboardLayout from "../layouts/Dashboard";
import home from "../pages/Home"
import { useEffect } from "react";


const Home = () => {

    const [dados, setDados] = useState([]);

    const [dadosFalsos] = [
        {
            CD_AQUISICAO: 1,
            NR_PLACA: "POR 1297",
            NM_COR: "BRANCO",
            NM_ANO: "2019",
            VL_VEICULO: "44000",
        }

        {
            CD_AQUISICAO: 1,
            NR_PLACA: "POR 1297",
            NM_COR: "BRANCO",
            NM_ANO: "2019",
            VL_VEICULO: "44000",
        }
    ]

    function buscarDados(){
        fetch("https://projeto-arrais-api.onrender.com/aquisicoes")
        .then(res=> res.json())
        .then(res=> {
            setDados(res);
        })
    }

    useEffect(() => {
        buscarDados();
    })



    return (
        <>
            <div className="w-full h-[50px] flex justify-end items-center">
                <button
                    type="primary"
                    size="large"
                    className="bg-laranja hover:!bg-laranja2"
                >
                    Login
                </button>
            </div> 
            <section>
                <h1 className="text-2x1 font-bold mb-4">Tabela de Veículos</h1>
                <TextEncoderStreamable>
                    datasource={dadosFalsos}
                        title={"CÓDIGO"}
                        dataIndex={"CD_AQUISICAO"}
                        className="w-[50px]"

    
                </TextEncoderStreamable>

            </section>
        </>
        

    );
}
 

export default Home;