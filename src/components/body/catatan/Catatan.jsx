import React from "react";
import CatatanList from './CatatanList';
export const Catatan = ({data,convert,changeData,deleteData}) =>{
    let tempArsip = data.filter((rs) =>{        
        return rs.archived
    })
    let tempAktif = data.filter((rs) =>{
        return !rs.archived
    })

    return(
        <>
        <h2>Catatan Aktif</h2>
        <div className="notes-list">
            {
                tempAktif != "" ? <CatatanList convert={convert} changeData={changeData} deleteData={deleteData}  data={tempAktif}/> : <p className="notes-list__empty-message">Tidak ada catatan</p>
            }         
        </div>
        <h2>Arsip</h2>
        <div className="notes-list">       
            {
        tempArsip != "" ? <CatatanList convert={convert} changeData={changeData} deleteData={deleteData} data={tempArsip}/> : <p className="notes-list__empty-message">Tidak ada catatan</p>
            }        
        </div>
                 
        </>
    )
}