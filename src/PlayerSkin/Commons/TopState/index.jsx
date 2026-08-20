import React from 'react';
import PropTypes from 'prop-types';

import { StyledKernel } from '@PlayerSkin/Commons/TopState/TopState.styled';
import SpinnerLoading from '@components/SpinnerLoading';

/**
 * TopState renders top-level player state: kernel/error messages and,
 * optionally, a loading spinner when `loading` is true.
 */
const TopState = ({ hasResource, loading = false, kernelMsg = null }) => {
  if (hasResource === false) {
    return null;
  }

  if (kernelMsg) {
    return (
      <StyledKernel>
        {kernelMsg.type}: {kernelMsg.detail}
      </StyledKernel>
    );
  }

  if (loading) {
    return <SpinnerLoading />;
  }
  return null;
};

TopState.propTypes = {
  hasResource: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  kernelMsg: PropTypes.object,
};

export default React.memo(
  TopState,
  (p, n) => p.hasResource === n.hasResource && p.loading === n.loading && p.kernelMsg === n.kernelMsg,
);
