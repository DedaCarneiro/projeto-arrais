import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Input } from "antd";

const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <form className="w-1/4 p-4 border rounded">
                <Input
                    className="mb-3"
                    placeholder="email@email.com"
                    prefix={
                        <UserOutlined className="text-black/25"/>
                    }
                />
                <Input.Password 
                    className="mb-3"
                    placeholder="input password" 
                />
                <Button
                    type="primary"
                    className="bg-laranja hover:!bg-laranja2 w-full"
                >
                    Entrar
                </Button>
            </form>
        </div>
    );
}
export default Login;