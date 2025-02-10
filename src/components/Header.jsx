import { Button } from "antd";
import logo from "../assets/logo-arrais.webp"
import { useContext } from "react";
import { LoginContex } from "../contexts/LoginContext";
const Header = () => {

    const{ usuario, setUsuario } = useContext(LoginContex);

    return (
        <header className="w-2/12 h-screen p-4 border-r">
            <a href="/">
                <img
                    src={logo}
                    alt="Arrais Veículos"
                    className="m-auto"
                />
            </a>

            {
                usuario ? (
                    <>
                        <h6 className="text-lg">{usuario.nome}</h6>
                        <h6>{usuario.cargo}</h6>
                            <button onClick={() => setUsuario()}>Sair</button>
                    </>
                ) : (
                    <Button
                        type="primary"
                        size="large"
                        className="w-full mt-6 bg-laranja hover:!bg-laranja2"
                        href="/login"
                    >
                        Login
                    </Button>
                )
            }
        </header>
    );
}

export default Header;