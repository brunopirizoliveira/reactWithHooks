import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({aoEnviar}) {
    const [cep, setCep] = useState(0);
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState(0);
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    return(
        <form onSubmit={(event) =>{
            event.preventDefault();
            aoEnviar({cep, endereco, numero, estado, cidade});
        }}>
            <TextField value={cep} onChange={(event) => setCep(event.target.value)} id="cep" label="cep" type="number" variant="outlined" margin="normal" fullWidth />
            <TextField value={endereco} onChange={(event) => setEndereco(event.target.value)} id="endereco" label="endereco" type="text" variant="outlined" margin="normal" fullWidth />
            <TextField value={numero} onChange={(event) => setNumero(event.target.value)} id="numero" label="numero" type="number" variant="outlined" margin="normal" fullWidth />
            <TextField value={estado} onChange={(event) => setEstado(event.target.value)} id="estado" label="estado" type="text" variant="outlined" margin="normal" fullWidth />
            <TextField value={cidade} onChange={(event) => setCidade(event.target.value)} id="cidade" label="cidade" type="text" variant="outlined" margin="normal" fullWidth />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    );
}

export default DadosEntrega;