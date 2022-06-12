import "./styles.css";
import styled from "styled-components";

const StyledAssist = styled.div`
  right: 7px;
  bottom: 15px;
  position: fixed;
  z-index: 99;
  width: 86px;
  height: 86px;
  cursor: pointer;
`;

const StyledAssistIcon = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  display: flex;
  position: absolute;
  box-shadow: 0 0px 8px 0 rgb(0 0 0 / 20%);
  transition: background 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  /*background: #ff0000 url(/assistance/images/livechat_icon.png) no-repeat center center;*/
  background: red;
  background-size: 65%;
`;

export default function App() {
  return (
    <StyledAssist>
      <StyledAssistIcon />
    </StyledAssist>
  );
}
