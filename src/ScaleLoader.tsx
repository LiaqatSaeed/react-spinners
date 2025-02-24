/** @jsxImportSource @emotion/react */
import * as React from "react";
import { keyframes, css, SerializedStyles } from "@emotion/react";

import { heightWidthRadiusDefaults, cssValue } from "./helpers";
import { LoaderHeightWidthRadiusProps } from "./interfaces";

const scale = keyframes`
  0% {transform: scaley(1.0)}
  50% {transform: scaley(0.4)}
  100% {transform: scaley(1.0)}
`;

class Loader extends React.PureComponent<Required<LoaderHeightWidthRadiusProps>> {
  public static defaultProps = heightWidthRadiusDefaults(35, 4, 2);

  public style = (i: number): SerializedStyles => {
    const { color, width, height, margin, radius, speedMultiplier } = this.props;

    return css`
      background-color: ${color};
      width: ${cssValue(width)};
      height: ${cssValue(height)};
      margin: ${cssValue(margin)};
      border-radius: ${cssValue(radius)};
      display: inline-block;
      animation: ${scale} ${1 / speedMultiplier}s ${i * 0.1}s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);
      animation-fill-mode: both;
    `;
  };

  public render(): JSX.Element | null {
    const { loading, css } = this.props;

    return loading ? (
      <span css={[css]}>
        <span css={this.style(1)} />
        <span css={this.style(2)} />
        <span css={this.style(3)} />
        <span css={this.style(4)} />
        <span css={this.style(5)} />
      </span>
    ) : null;
  }
}

export default Loader;
