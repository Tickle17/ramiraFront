import React from "react";
import { Grid, Stack } from "@mui/material";
import { ReactComponent as Inst } from "../../../shared/img/inst.svg";
import { ReactComponent as Teleg } from "../../../shared/img/telegram.svg";

import "./style.css";

export default function FutterInfo(props) {
  return (
    <Stack
      spacing={5}
      className="futterInfoWrapper"
      ref={props.props.contactRef}
    >
      <div className="futterTitle"> Свяжитесь с нами</div>
      <div className="futterPhone"> +7 (904) 757-52-86</div>
      <div className="futterMail">ramira_vlg@mail.ru</div>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item className="bgInst">
          <a href="https://www.instagram.com/ramira_corporation/">
            <Inst></Inst>
          </a>
        </Grid>
        <Grid item className="spacing"></Grid>
        <Grid item className="bgInst">
          <a href="https://t.me/ramira_corporation">
            <Teleg></Teleg>
          </a>
        </Grid>
      </Grid>

      <div className="futterAddress">
        ул. Краснознаменская 3а/11, Парк Раздолье
      </div>
    </Stack>
  );
}
