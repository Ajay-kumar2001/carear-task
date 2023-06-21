import ".././App.css"
let Displaytable=(props)=>{
    console.log(props.data)
   const data=props.data
    return(
       
        <tbody>
          <tr>
            <td>{data.thermostatPacket.data.timestamp.split("T")[0]}</td>
            <td>{data.thermostatPacket.data.timestamp.split("T")[1]}</td>
            <td>{data.thermostatPacket.info.product}</td>
            <td>{data.thermostatPacket.info.version}</td>
            <td>{data.thermostatPacket.info.id}</td>


          </tr>
         
        </tbody>
    )
}
export default Displaytable