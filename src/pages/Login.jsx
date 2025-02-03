import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Input } from "antd";
import { useForm } from "react";

const Login = () => {

    const usuarioValue = useref();
    const senhaValue = useref();

    async function login() {
        const usuario = usuarioValue.current.input.value;
        const senha = usuarioValue.current.input.value;

        if(usuario == ''){
            alert("Digite o email");
            return
        }

        if(senha == ''){
            alert("Digite o email");
            return
        }   

        const request = await fetch("https://projeto-arrais-api.onrender.com/usuario/login",{method: "POST", headers:{"Content-type": "applicate/json"}, body: JSON.stringify({usuario, senha})});

    const response = await request.json();
        
    }

    // function login(dados){
    //     console.log("dados", usuarioValue.current.input);
    //     console.log("dados", senhaValue.current.input);
    // }

    return (
        <div className="h-screen flex justify-center items-center">
            <form onSubmit={login} className="w-1/4 p-4 border rounded">
                <Input

                    className="mb-3"
                    placeholder="usuarioValue@email.com"
                    prefix={
                        <UserOutlined className="text-black/25"/>
                    }
                />
                <Input.Password 
                    className="mb-3"
                    placeholder="input password" 
                    onClick={Login}
                />
                <Button
                    type="primary"
                    className="bg-laranja hover:!bg-laranja2 w-full"
                >
                    Entrar
                </Button>
                <Button
                    type="secondary"
                    className=" mt-4 w-full hover:bg-gray-200"
                    href="/"
                >
                    Voltar
                </Button>
            </form>
        </div>
    );
}
export default Login;