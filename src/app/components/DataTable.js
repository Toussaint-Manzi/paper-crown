import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
  Modal,
  Button,
  TextField,
} from '@mui/material';
import { FaEdit } from 'react-icons/fa';
import { IoTrashBinSharp } from 'react-icons/io5';

function DataTable({ columns = [], rows = [], onEdit, onDelete }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteClick = (row) => {
    setSelectedRow(row);
    setOpenDeleteModal(true);
  };

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setOpenEditModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setSelectedRow(null);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setSelectedRow(null);
  };

  const handleDeleteConfirm = () => {
    if (onDelete) {
      onDelete(selectedRow);
    }
    handleCloseDeleteModal();
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    if (onEdit) {
      onEdit(selectedRow);
    }
    handleCloseEditModal();
  };

  return (
    <>
      <Paper sx={{ width: '90%', margin: 'auto', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || 'left'}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                {/* Actions Column */}
                <TableCell key="actions" align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => (
                        <TableCell key={column.id} align={column.align || 'left'}>
                          {column.render ? column.render(row[column.id], row) : row[column.id]}
                        </TableCell>
                      ))}
                      <TableCell align="center">
                        <IconButton onClick={() => handleEditClick(row)}>
                          <FaEdit />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteClick(row)}>
                          <IoTrashBinSharp />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* Delete Confirmation Modal */}
      <Modal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <Paper
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            width: '400px',
          }}
        >
          <h2 id="delete-modal-title">Confirm Delete</h2>
          <p id="delete-modal-description">
            Are you sure you want to delete this item?
          </p>
          <Button variant="contained" color="secondary" onClick={handleDeleteConfirm}>
            Delete
          </Button>
          <Button variant="outlined" onClick={handleCloseDeleteModal} style={{ marginLeft: '10px' }}>
            Cancel
          </Button>
        </Paper>
      </Modal>

      {/* Edit Resource Modal */}
      <Modal
        open={openEditModal}
        onClose={handleCloseEditModal}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <Paper
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            width: '600px',
          }}
        >
          <h2 id="edit-modal-title">Edit Item</h2>
          <form onSubmit={handleEditSubmit}>
            {columns.map((column) => (
              column.editable && (
                <TextField
                  key={column.id}
                  label={column.label}
                  fullWidth
                  margin="normal"
                  value={selectedRow ? selectedRow[column.id] : ''}
                  onChange={(e) =>
                    setSelectedRow((prev) => ({ ...prev, [column.id]: e.target.value }))
                  }
                />
              )
            ))}
            <Button variant="contained" color="primary" type="submit">
              Update
            </Button>
            <Button
              variant="outlined"
              onClick={handleCloseEditModal}
              style={{ marginLeft: '10px' }}
            >
              Cancel
            </Button>
          </form>
        </Paper>
      </Modal>
    </>
  );
}

export default DataTable;
