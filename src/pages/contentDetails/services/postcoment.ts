export const postcoment = (e, token, navigate) => {
  e.preventDefault();
  if (token == null) {
    navigate("/login");
  } else {
    if(e.target.comment.value){
        
    };
  }
};
