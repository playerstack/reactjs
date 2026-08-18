import styled from 'styled-components';
import { scopedResetStyles } from '@utils/resetStyles';

export const StyledMediaPlayerWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    PingFang SC,
    Hiragino Sans GB,
    Microsoft YaHei,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;

  ${scopedResetStyles}

  & video::cue {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 1.1em;
    line-height: 1.4;
  }
`;
