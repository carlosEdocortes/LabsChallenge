import React,{ Fragment }from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AppBar from '../AppBar'
import './styles.css'
function Page (props){

    const {
        results
    }=props;

    const isEmpty = results.length === 0 ;

    return(
        <Fragment>
            <CssBaseLine/>
            <AppBar/>
            <div className='results-page'>
                {
                    isEmpty ?
                        <Typography variant="h5" component= "h3" className="page-message">
                            No hay resultados. Pruebe con otra palabra clave.
                        </Typography>
                        :null
                }
            </div>
        </Fragment>
    );

}

export default Page;