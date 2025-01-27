import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
const Login = () => {
    return (
        <div className="h-screen flex justify-center items-start">
            <form className="w-1/4 p-4 border rounded">
                <Input
                    placeholder="Entre com Usuário"
                    prefix={
                        <UserOutlined className="text-black/25"
                            style={{
                                color: 'rgba(0,0,0,.25)',
                            }}
                        />
                    }
                />  
                <Input.Password
                    placeholder="Entre com Senha" 
                />
            </form>
        </div>
    );
}
 
export default Login;