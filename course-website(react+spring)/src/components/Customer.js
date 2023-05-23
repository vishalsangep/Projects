import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Customer = () => {
    const[custlist,custlistupdate]=useState([]);
    const [haveedit,editchange]=useState(false);
    const [haveview,viewchange]=useState(false);
    const [haveadd,addchange]=useState(false);
    const [haveremove,removechange]=useState(false);
    const navigate=useNavigate();


    useEffect(()=>{
        GetUserAccess();
        loadcustomer();
        
    },[])

    const loadcustomer=()=>{
        fetch("http://localhost:8000/customer").then(res=>{
        if(!res.ok){
            return false
        }
        return res.json();
        }).then(res=>{
        custlistupdate(res)
        });
    }


    const GetUserAccess=()=>{
        const userrole=sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole').toString():'';
        fetch("http://localhost:8000/roleaccess?role="+userrole+"&menu=customer").then(res=>{
            if(!res.ok){
                
                    navigate('/Signin');
                    alert("you r not authorized");
                
                return false;
            }
            return res.json();
        }).then(res=>{
            if(res.length > 0){
                viewchange(true);
                let userobj=res[0];
                editchange(userobj.haveedit);
            addchange(userobj.haveadd);
                removechange(userobj.havedelete);
            }else{
                navigate('/Signin');
                    alert("you r not authorized");
                
            }
        })
    }
    
    const handleadd=()=>{
        if(haveadd){
            alert("table-added");
        }else{
            alert("no access for add")
        }
    }
    const handleedit=()=>{
        if(haveedit){
        alert("table-edit");
        }else{
            alert('no access for edit')
        }
    }
    const handleremove=()=>{
        if(haveremove){
        alert("table-remove");
        }else{
            alert("no access for remove")
        }
    }

  return (
    <div className='container'>
      
      <div className='card-table'>
        <div className='card-header'>
        <h1>Customer listing</h1>
        </div>
        <div className='card-body'>
            <button className='btn btn-success' onClick={handleadd}> Add(+)</button>
            <table className='table table-bordered'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>code</th>
                        <th>name</th>
                        <th>email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {custlist &&
                        custlist.map(item =>(
                            <tr key={item.code}>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className='btn btn-primary' onClick={handleedit}>Edit</button>
                                    <button className='btn btn-danger' onClick={handleremove} >Remove</button>
                                </td>

                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>

      </div>
    </div>
  )
}

export default Customer
