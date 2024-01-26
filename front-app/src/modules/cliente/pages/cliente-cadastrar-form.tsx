import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Cliente } from '../models/cliente';

interface ClientesFormProps {
  onSubmit: SubmitHandler<Cliente>;
}

const ClienteNovo: React.FC<ClientesFormProps> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Cliente>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="nome"
        control={control}
        defaultValue=""
        rules={{ required: 'Nome é obrigatório' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nome"
            variant="outlined"
            fullWidth
            error={!!errors.nome}
            helperText={errors.nome?.message}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'Email é obrigatório',
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Email inválido',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        name="telefone"
        control={control}
        defaultValue=""
        rules={{ required: 'Telefone é obrigatório' }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Telefone"
            variant="outlined"
            fullWidth
            error={!!errors.telefone}
            helperText={errors.telefone?.message}
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Adicionar Cliente
      </Button>
    </form>
  );
};

export default ClienteNovo;
