const cargarPosts=async()=>{
    let url="https://jsonplaceholder.typicode.com/posts";
    const api=await fetch(url);
    const data=await api.json();
    console.log(data);
    tabla=document.querySelector("#lista");
    data.map(item=>{ 
    tabla.innerHTML+=`
    <tr>
                    <td scope="row">${item.id}</td>
                    <td>${item.title}</td>
                    <td>${item.body}</td>
                    <td><button type="button" class="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#Sexoo" onclick="cargarPost(${item.id})"><i class="bi bi-brush"></i></i>Editar</button></td>
                    <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#Sexoo2"><i class="bi bi-x-octagon"></i>Eliminar</button></td>
        </tr>
    `})
    }
    
    
    const guardardata=async ()=>{
    let titulo=document.querySelector("#title").value;
    let body=document.querySelector("#body").value;
    const post={title:titulo,body:body,userId:1};
    
    
        const api= await  fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify (post),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
            });
    const respuesta=await api.json();
    console.log(respuesta)
    tabla=document.querySelector("#lista");
    tr=document.createElement("tr");
    
    tr.innerHTML=`
    <tr>
                    <td scope="row">${respuesta.id}</td>
                    <td>${respuesta.title}</td>
                    <td>${respuesta.body}</td>
                    <td><button type="button" class="btn btn-outline-info"  data-bs-toggle="modal" data-bs-target="#Sexoo"><i class="bi bi-brush"></i></i>Editar</button></td>
                    <td><button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#Sexoo2"><i class="bi bi-x-octagon"></i>Eliminar</button></td>
        </tr>
    `
    tabla.appendChild(tr);
    
    if (respuesta!=null){
        Swal.fire({
            icon: 'success',
            title: 'Insertar',
            text: 'Se inserto correctamente',
    
          })
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'no se inserto algo fallo',
    
          })
    }1
        
    
    }
    const eliminarPost=(id)=>{
      document.querySelector("#deleteid").value=id;
  }
  const deletePost=async ()=>{
      const id=document.querySelector("#deleteid").value;
      const api=await fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
          method: 'DELETE',
      })
      const respuesta=api.json();
      console.log(respuesta)
      if(respuesta!=null){
          Swal.fire({
              icon: 'success',
              title: 'ELIMINAR',
              text: 'SE ELIMINO CORRECTAMENTE!!'
          })
      }else{
          Swal.fire({
              icon: 'error',
              title: 'ERRO',
          } )}
  }

    const cargarPost = async (id) => {
        const api = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
        const respuesta = await api.json();
        console.log(respuesta);
        document.querySelector("#etitle").value = respuesta.title;
        document.querySelector("#ebody").value = respuesta.body;
        document.querySelector("#eid").value = respuesta.id;
        document.querySelector("#euserid").value = respuesta.userId;
      };
      
      const guardarPost = async () => {
        let title = document.querySelector("#etitle").value;
        let body = document.querySelector("#ebody").value;
        let id = document.querySelector("#eid").value;
        let userId = document.querySelector("#euserid").value;
        const post = {
          title: title,
          body: body,
          id: id,
          userId: userId,
        };
        const api = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
      
        const respuesta = api.json();
        console.log(respuesta);
        if (respuesta != null) {
          Swal.fire({
            icon: "success",
            title: "EDITAR",
            text: "SE ACTUALIZO CORRECTAMENTE!!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "ALGO FALLO!!!",
          });
        }
      };
      