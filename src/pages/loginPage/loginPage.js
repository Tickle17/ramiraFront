import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import Header from "../header/header";
import TextField from "@mui/material/TextField";
import "./style.css";
import axios from "axios";
import { useGetItemsQuery } from "../../shared/store/api/api";
import ChangeMenu from "./changeCreateMenu/changeMenu";
import {
  selectIsAuthenticated,
  setAuthenticated,
  setUnauthenticated,
} from "../../features/authSlice/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const changeLogin = (event) => {
    setLogin(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const checkTokenAndSetAuthStatus = (token) => (dispatch) => {
    if (
      token ===
      "98bd5806929b8e6cadd4ffd3d79afa893c3e30f43d934481bd3f37273689edb2"
    ) {
      dispatch(setAuthenticated());
    } else {
      dispatch(setUnauthenticated());
    }
  };
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  dispatch(checkTokenAndSetAuthStatus(token));
  const authorization = async () => {
    try {
      // Выполняем POST-запрос на сервер
      const response = await axios.post("https://dornetshop.ru/auth/auth", {
        login: login,
        password: password,
      });
      if (response.status === 200) {
        const token = response.data.message;
        localStorage.setItem("token", token);
      }
    } catch (error) {
      console.error("Ошибка при выполнении POST-запроса:", error);
    }
  };
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const { data, isLoading, isError } = useGetItemsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Failed to fetch menu items</div>;
  }
  return (
    <Grid>
      <Header></Header>
      {isAuthenticated ? (
        <Grid container>
          {data.menus.map((item) => (
            <Grid item xs={4}>
              <ChangeMenu item={item}></ChangeMenu>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid>
          <Grid>
            <TextField
              required
              id="outlined-required"
              label="Login"
              value={login}
              onChange={changeLogin}
              className="TextField"
            />
          </Grid>
          <Grid>
            <TextField
              required
              id="outlined-required"
              label="Password"
              className="TextField"
              value={password}
              onChange={changePassword}
            />
          </Grid>
          <Button variant="contained" color="primary" onClick={authorization}>
            Отправить
          </Button>
        </Grid>
      )}
    </Grid>
  );
}
