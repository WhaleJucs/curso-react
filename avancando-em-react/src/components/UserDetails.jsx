const UserDetails = ({personId, personName, personJob, personAge}) => {
  return (
    <div>
        <h2>{personName}</h2>
        <p>Profissão: {personJob}</p>
        <p>Idade: {personAge}</p>
        {personAge >= 18 ? (<p>Pode tirar carta de habilitação!</p>) : (<p>Menor de idade.</p>)}
    </div>
  )
}

export default UserDetails