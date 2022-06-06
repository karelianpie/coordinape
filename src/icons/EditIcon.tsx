/* eslint-disable react/display-name */
import * as React from 'react';

import { styled, SvgIconConfig } from 'stitches.config';

import { IconProps } from 'types';

export const EditIcon = styled(
  React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', ...props }, forwardedRef) => {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} ref={forwardedRef}>
          <path
            d="M4 19.3664C4.44499 17.84 4.88839 16.3136 5.33338 14.7873C5.3686 14.6657 5.40541 14.5441 5.43743 14.4225C5.48865 14.2385 5.58469 14.0897 5.73196 13.9665C5.86962 13.8529 5.99127 13.7169 6.11772 13.5905C8.20343 11.525 10.2891 9.45938 12.3733 7.39222C12.4213 7.34422 12.4629 7.28982 12.4965 7.24822C12.7798 7.53302 13.0455 7.80021 13.3417 8.09781C13.3097 8.12021 13.2472 8.15221 13.1992 8.20021C11.0383 10.3554 8.87893 12.5105 6.72279 14.6705C6.64595 14.7489 6.58193 14.8561 6.55151 14.9617C6.2922 15.8177 6.04569 16.6784 5.78958 17.5376C5.75757 17.6448 5.77357 17.712 5.85521 17.7856C5.98807 17.9056 6.10492 18.0432 6.23938 18.1616C6.2858 18.2016 6.37384 18.232 6.42986 18.2176C7.29104 17.9712 8.15061 17.72 9.00858 17.4608C9.08222 17.4384 9.15105 17.376 9.20867 17.3168C11.4 15.1329 13.5882 12.9457 15.7763 10.7602C15.818 10.7186 15.8532 10.6722 15.8772 10.645C16.1877 10.9554 16.4886 11.2562 16.8184 11.5858C16.804 11.5954 16.7464 11.6194 16.7063 11.6594C14.5486 13.7953 12.3877 15.9265 10.2411 18.0736C9.94179 18.3744 9.61685 18.56 9.21507 18.6736C7.79045 19.0768 6.37223 19.5024 4.95081 19.92C4.85637 19.9472 4.76033 19.9728 4.66589 20H4.53783C4.469 19.9696 4.39857 19.9424 4.32974 19.9104C4.13766 19.8208 4.07203 19.6384 4 19.4608V19.3664ZM8.30428 16.7152C8.26266 16.4496 8.21784 16.2064 8.18903 15.9633C8.17462 15.8481 8.1282 15.8017 8.01615 15.7809C7.74243 15.7281 7.47191 15.6593 7.219 15.6033C9.48879 13.3297 11.7586 11.0546 14.014 8.7938C14.3741 9.15379 14.7503 9.52818 15.1136 9.88978C12.8663 12.1425 10.5981 14.4161 8.30428 16.7152ZM14.8415 5.02585C15.0464 4.82585 15.2513 4.61306 15.4706 4.41466C16.0997 3.84827 16.9192 3.86107 17.5323 4.45946C18.2094 5.11865 18.8769 5.78584 19.5364 6.46263C20.1606 7.10102 20.151 7.95541 19.5284 8.5922C19.3411 8.7842 19.1474 8.97139 18.9681 9.14739C17.5979 7.77941 16.2293 6.41303 14.8415 5.02585ZM13.172 6.53623C13.4825 6.24503 13.8011 5.94584 14.1036 5.66104C15.5378 7.09462 16.9641 8.5218 18.4031 9.96018C18.1038 10.2402 17.782 10.5426 17.4715 10.8338L13.172 6.53623Z"
            fill={color}
          />
        </svg>
      );
    }
  ),
  SvgIconConfig
);

export default EditIcon;
