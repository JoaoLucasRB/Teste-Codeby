import { CartIcon, Container, Content, Logo } from './style';
import { Button, Popover, TextField } from '@mui/material';
import { useEffect, useState } from 'react'
import { Cart } from '../Cart';

export function Header() {
  const [openPopover, setOpenPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sticky, setSticky] = useState(false);

  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPopover(true);
  }

  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpenPopover(false);
  }

  return (
    <>
      <Container className={sticky ? "sticky" : ""}>
        <Content>
          <Logo>Seu Zé</Logo>
          <CartIcon onClick={handleOpenPopover}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" /></svg>
          </CartIcon>
        </Content>
      </Container>
      <Popover
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Cart />
      </Popover>
    </>
  )
}