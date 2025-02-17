import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Input } from "antd";
import { useRef } from "react";


const Login = () => {

    const usuarioValue = useRef();
    const senhaValue = useRef();

    async function login(){
        const usuario = usuarioValue.current.input.value;
        const senha = senhaValue.current.input.value;
        if(usuario == ''){
            alert("Digite o email");
            return;
        }
        if(senha == ''){
            alert("Digite a senha");
            return;
        }

        const request = await fetch("https://projeto-arrais-api.onrender.com/usuario/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ usuario, senha})
        });
        const response = await request.json();        
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <form onSubmit={login} className="w-1/4 p-4 border rounded">
                <Input
                    ref={usuarioValue}
                    className="mb-3"
                    placeholder="Digite seu usuario"
                    prefix={
                        <UserOutlined className="text-black/25"/>
                    }
                    required
                />
                <Input.Password 
                    ref={senhaValue}
                    className="mb-3"
                    placeholder="Digite sua senha" 
                    required
                />
                <Button
                    type="primary"
                    className="bg-laranja hover:!bg-laranja2 w-full"
                    onClick={login}
                >
                    Entrar
                </Button>
                <Button
                    type="secondary"
                    className="mt-4 w-full hover:bg-gray-200"
                    href="/"
                >
                    Voltar
                </Button>
            </form>
        </div>
    );
}
export default Login;