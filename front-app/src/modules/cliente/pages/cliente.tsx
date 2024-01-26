import React, { useEffect, useState } from 'react';
import { Cliente } from '../models/cliente';
import { GridColDef, DataGrid as MuiDataGrid } from '@mui/x-data-grid';
import { Box, Button, Icon, IconButton, Stack, SvgIcon, Tooltip } from '@mui/material';
import { useClientes } from '../service/cliente-service';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
const ClientePage = () => {
  const { getAllClientes } = useClientes();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getAllClientes()
      .then((clientes) => {
        setClientes(clientes);
      })
      .catch((error) => {
        console.error('Erro ao buscar clientes:', error);
      });
  }, []);

  const renderTooltip = (title: string, component: any) => (
    <Tooltip title={title}>
      <div>{component}</div>
    </Tooltip>
  );
  const columns: GridColDef[] = [
    {
      field: 'acoes',
      headerName: 'Acões',
      minWidth: 160,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: any) => {
        const { id } = params.row;
        return (
          <Stack direction="row" spacing={0}>
            {renderTooltip(
              'Visualizar Cliente',
              <SearchIcon onClick={() => removerItem(id)}></SearchIcon>
            )}
            {renderTooltip('Editar Cliente', <EditIcon onClick={() => editarItem(id)}></EditIcon>)}
            {renderTooltip(
              'Excluir Cliente',
              <DeleteIcon onClick={() => deleteItem(id)}></DeleteIcon>
            )}
          </Stack>
        );
      },
    },
    {
      field: 'nome',
      headerName: 'Cliente',
      minWidth: 300,
      headerAlign: 'center',
    },
    {
      field: 'telefone',
      headerName: 'Telefone',
      minWidth: 160,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 300,
      headerAlign: 'center',
    },
  ];
  const removerItem = (id: any): void => {
    console.log('id', id);
  };
  const editarItem = (id: any): void => {
    console.log('id', id);
  };
  const deleteItem = (id: any): void => {
    console.log('id', id);
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Erro ao buscar clientes: {error?.message}</div>;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <MuiDataGrid
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        style={{ height: '100%' }}
        autoHeight
        pageSizeOptions={[5, 10, 25]}
        rows={clientes}
        columns={columns}
      />
    </Box>
  );
};

export default ClientePage;
