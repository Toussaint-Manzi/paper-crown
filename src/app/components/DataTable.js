import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { FaEdit } from 'react-icons/fa';
import { IoTrashBinSharp } from 'react-icons/io5';

const columns = [
  { id: 'number', label: '#', minWidth: 50 },
  { id: 'thumbnail', label: 'Thumbnail', minWidth: 100 },
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'comments', label: 'Comments', minWidth: 100 },
  { id: 'resources', label: 'Resources', minWidth: 100 },
  { id: 'likes', label: 'Likes', minWidth: 100 },
  { id: 'actions', label: 'Actions', minWidth: 150 },
];

export default function DataTable({ rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [selectedResource, setSelectedResource] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteClick = (resource) => {
    setSelectedResource(resource);
    setOpenDeleteModal(true);
  };

  const handleUpdateClick = (resource) => {
    setSelectedResource(resource);
    setOpenUpdateModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    setSelectedResource(null);
  };

  const handleCloseUpdateModal = () => {
    setOpenUpdateModal(false);
    setSelectedResource(null);
  };

  const handleDeleteConfirm = () => {
    // Implement deletion logic here
    console.log(`Resource with ID ${selectedResource.id} deleted.`);
    handleCloseDeleteModal();
  };

  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    // Implement update logic here
    console.log('Resource updated:', selectedResource);
    handleCloseUpdateModal();
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
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell>{index + 1 + page * rowsPerPage}</TableCell>
                      <TableCell>
                        <img src={row.thumbnail[0]} alt="Thumbnail" style={{ width: 50, height: 50 }} />
                      </TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.comments.length}</TableCell>
                      <TableCell>{row.resources.length}</TableCell>
                      <TableCell>{row.likes.length}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleUpdateClick(row)}>
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
            Are you sure you want to delete the resource titled "{selectedResource?.title}"?
          </p>
          <Button variant="contained" color="secondary" onClick={handleDeleteConfirm}>
            Delete
          </Button>
          <Button variant="outlined" onClick={handleCloseDeleteModal} style={{ marginLeft: '10px' }}>
            Cancel
          </Button>
        </Paper>
      </Modal>

      {/* Update Resource Modal */}
      <Modal
        open={openUpdateModal}
        onClose={handleCloseUpdateModal}
        aria-labelledby="update-modal-title"
        aria-describedby="update-modal-description"
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
          <h2 id="update-modal-title">Update Resource</h2>
          <form onSubmit={handleUpdateSubmit}>
            <TextField
              label="Title"
              fullWidth
              margin="normal"
              value={selectedResource?.title || ''}
              onChange={(e) =>
                setSelectedResource((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <TextField
              label="Content"
              fullWidth
              margin="normal"
              value={selectedResource?.content || ''}
              onChange={(e) =>
                setSelectedResource((prev) => ({ ...prev, content: e.target.value }))
              }
            />
            {/* Add other fields like Thumbnail, Resources, etc. as needed */}
            <Button variant="contained" color="primary" type="submit">
              Update
            </Button>
            <Button
              variant="outlined"
              onClick={handleCloseUpdateModal}
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
