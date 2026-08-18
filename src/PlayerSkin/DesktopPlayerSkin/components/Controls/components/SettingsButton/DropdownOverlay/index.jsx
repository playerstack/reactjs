import React from 'react';

import {
  StyledDropdownContent,
  StyledDropdownHeader,
  StyledDropdownItem,
  StyledDropdownItemValueSub,
  StyledDropdownList,
} from '@PlayerSkin/DesktopPlayerSkin/components/Controls/components/SettingsButton/DropdownOverlay/DropdownOverlay.styled';
import { ArrowLeftIcon } from '@playerstack/core/icons';
import StyledGeneralButton from '@PlayerSkin/Commons/Buttons/StyledGeneralButton';
import { useAppSelector } from '@context/index';

const DropdownOverlay = React.forwardRef(
  (
    { title, options, value, hiding, isFullscreen, onClick, goBack, showOptionsButton, onOptionsClick, ...rest },
    ref,
  ) => {
    const { i18n } = useAppSelector();
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
      setShow(false);
      if (hiding) {
        setTimeout(() => {
          setShow(true);
        }, 100);
      }
    }, [hiding]);

    return (
      <div ref={ref} {...rest}>
        <StyledDropdownHeader>
          <StyledGeneralButton
            onClick={goBack}
            isFullscreen={isFullscreen}
            isText
            style={showOptionsButton ? { width: 'auto' } : undefined}
          >
            <ArrowLeftIcon width={28} height={28} />
            <span>{title}</span>
          </StyledGeneralButton>
          {showOptionsButton && onOptionsClick && (
            <StyledGeneralButton
              onClick={onOptionsClick}
              isFullscreen={isFullscreen}
              isText
              style={{
                marginLeft: 'auto',
                fontSize: '12px',
                textDecoration: 'underline',
                opacity: 0.8,
                width: 'auto',
                padding: '20px 15px',
              }}
            >
              {i18n.captionOptions}
            </StyledGeneralButton>
          )}
        </StyledDropdownHeader>
        <StyledDropdownContent show={show}>
          <StyledDropdownList>
            {options.map((option, i) => (
              <StyledDropdownItem key={i} selected={option.value === value} isFullscreen={isFullscreen}>
                <StyledGeneralButton onClick={() => onClick(option.value)} isFullscreen={isFullscreen} isText>
                  {option.label}
                  {'isFullHD' in option && option.isFullHD && (
                    <StyledDropdownItemValueSub>{i18n.hd}</StyledDropdownItemValueSub>
                  )}
                </StyledGeneralButton>
              </StyledDropdownItem>
            ))}
          </StyledDropdownList>
        </StyledDropdownContent>
      </div>
    );
  },
);

DropdownOverlay.displayName = 'DropdownOverlay';

export default DropdownOverlay;
