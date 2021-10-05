import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../hooks/useProducts';

const Products = () => {
    const [products] = useProducts();
    console.log(products);
    return (
        <div>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2
            }}>
                <TextField
                    id="outlined-uncontrolled"
                    label="Search Your Product"
                />
            </Box>
        </div>
    );
};

export default Products;