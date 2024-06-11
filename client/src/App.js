import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./api/userApi";
import {Spinner} from "react-bootstrap";
const App = observer( () => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authenticateUser = async () => {
            try {
                const userResponse = await check();
                if (userResponse) {
                    user.setUser(userResponse); // Устанавливаем данные пользователя
                    user.setIsAuth(true); // Устанавливаем статус аутентификации
                } else {
                    user.setUser({}); // Сбрасываем данные пользователя
                    user.setIsAuth(false); // Сбрасываем статус аутентификации
                }
            } catch (e) {
                console.log(e);
                user.setUser({}); // Сбрасываем данные пользователя в случае ошибки
                user.setIsAuth(false); // Сбрасываем статус аутентификации в случае ошибки
            } finally {
                setLoading(false);
            }
        };

        authenticateUser();
    }, []);

    if (loading) {
        return <Spinner animation={"grow"}/>
    }
  return (
      <BrowserRouter>
          <NavBar/>
          <AppRouter/>
      </BrowserRouter>
  );
})

export default App;
