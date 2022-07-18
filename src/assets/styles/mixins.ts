import {css} from "styled-components";
import {colors} from "assets/styles/colors";
import {constants} from "assets/styles/constants";

const headingStyle = () => css`
  font-family: ${constants.headingFontFamily};
  font-size: ${constants.headingFontSize};
  line-height: ${constants.headingLineHeight};
`;

const bodyStyle = () => css`
  font-family: ${constants.bodyFontFamily};
  font-size: ${constants.bodyFontSize};
  line-height: ${constants.bodyLineHeight};
`;

const buttonStyle = () => css`
  font-family: ${constants.buttonFontFamily};
  font-size: ${constants.buttonFontSize};
  line-height: ${constants.buttonLineHeight};
  color: ${colors.textButton};
`;

const overlay = () => css`
  background: rgb(0, 0, 0, 0.6);
  height: 100vh;
  width: 100vw;
`;

const input = () => css`
  height: 2.7rem;
  border-radius: 6px;
  padding: 0.8rem;
  background: ${colors.baseForm};
  border: none;
  box-sizing: border-box;
  font-family: ${constants.bodyFontFamily};
  color: ${colors.textColor};
`;

const gameCard = () => css`
  background: ${colors.cardBg};
`;

export const mixins = {
  headingStyle,
  bodyStyle,
  buttonStyle,
  overlay,
  input,
  gameCard,
};
