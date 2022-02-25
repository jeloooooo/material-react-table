import React, { FC } from 'react';
import { IconButton, IconButtonProps, Tooltip } from '@mui/material';
import { useMRT } from '../useMRT';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';

interface Props extends IconButtonProps {}

export const MRT_ToggleSearchButton: FC<Props> = ({ ...rest }) => {
  const { localization, setShowSearch, showSearch, muiSearchTextFieldProps } =
    useMRT();

  const handleToggleSearch = () => {
    setShowSearch(!showSearch);
    setTimeout(
      () =>
        document
          .getElementById(
            muiSearchTextFieldProps?.id ?? `global-search-text-field`,
          )
          ?.focus(),
      200,
    );
  };

  return (
    <Tooltip arrow title={localization?.toggleSearchButtonTitle ?? ''}>
      <IconButton size="small" onClick={handleToggleSearch} {...rest}>
        {showSearch ? <SearchOffIcon /> : <SearchIcon />}
      </IconButton>
    </Tooltip>
  );
};