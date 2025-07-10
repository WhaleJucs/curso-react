const Challenge = () => {
    const num = {
        a: 15,
        b: 8,
    }

    const soma = () => {
        return console.log(num.a + num.b)
    }

    return (
        <div>
            <p>{num.a}</p>
            <p>{num.b}</p>
            <button onClick={soma}>Clique Aqui para somar!</button>
        </div>
    )
}

export default Challenge