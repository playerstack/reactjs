import styled from 'styled-components';

export const StyledControlText = styled.div`
  display: inline-block;
  height: 36px;
  padding: 0 5px;
  font-size: 13px;
  line-height: 35px;
  white-space: nowrap;
`;

export const StyledLiveDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 6px;
  vertical-align: middle;
  border-radius: 50%;
  background: ${(props) => (props.$atEdge ? '#ff0000' : '#888888')};
  transition: background 0.2s ease;
`;

export const StyledLiveBadge = styled.button`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 6px;
  margin: 0;
  border: none;
  background: none;
  color: ${(props) => (props.$atEdge ? '#ffffff' : 'rgba(255, 255, 255, 0.6)')};
  font-size: 13px;
  font-weight: 500;
  line-height: 36px;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s ease;
  vertical-align: top;

  &:hover {
    color: #ffffff;
  }

  &:hover ${StyledLiveDot} {
    background: #ff0000;
  }
`;

export const StyledChapterIndicator = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
`;
