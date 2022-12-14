
export default function Fondo_body (props) {
    const estilo= {
        // background: "rgb(190,22,34)",
        background: "linear-gradient(180deg, rgba(190,22,34,1) 0%, rgba(237,244,245,1) 50%, rgba(45,46,131,1) 100%)",
        height: "500px",
    }
    return (<div style={estilo}>
        {props.children}
    </div>);
}