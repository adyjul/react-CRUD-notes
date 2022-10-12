const CatatanList = (props) => {
  
    return( 
        props.data.map(({id,title,body,createdAt,archived}) => (          
            <div key={id} className="note-item">
                <div className="note-item__content">
                    <h3 className="note-item__title">{title}</h3>
                    <p className="note-item__date">{props.convert(createdAt)}</p>
                    <p className="note-item__body">{body}</p>
                </div>
                <div className="note-item__action">
                    <button className="note-item__delete-button" onClick={() => props.deleteData(id)}>Delete</button>
                    <button className="note-item__archive-button" onClick={() => props.changeData(id)}>{archived ? 'Pindahkan' : 'Arsipkan'}</button>
                </div>
            </div>         
        ))
       
        
    )
}

export default CatatanList;