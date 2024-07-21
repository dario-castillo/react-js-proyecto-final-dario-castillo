function Input({onStateUplifting}) {
    
    const handleChange = (e) => {
        onStateUplifting(e.target.value.length)
    }
    
    return (
        <input type="text" onChange={handleChange}/>
    )
}
export default Input
