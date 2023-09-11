import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CNavbar, CContainer, CForm, CFormInput, CButton } from "@coreui/react";
import Modal from "@mui/material/Modal";
import { FaSearch } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Search() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <FaSearch color="black"></FaSearch>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CNavbar colorScheme="light" className="bg-light">
            <CContainer fluid>
              <CForm className="d-flex">
                <CFormInput
                  type="search"
                  className="me-2"
                  placeholder="Search"
                />
                <CButton type="submit" color="success" variant="outline">
                  Search
                </CButton>
              </CForm>
            </CContainer>
          </CNavbar>
        </Box>
      </Modal>
    </div>
  );
}
